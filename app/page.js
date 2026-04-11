'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const PUZZLE = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]
];

const SOLUTION = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];

export default function FreddyDoku() {
  const [board, setBoard] = useState(PUZZLE.map(r => [...r]));
  const [selected, setSelected] = useState(null);
  const [mistakes, setMistakes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [won, setWon] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  function fmt(s) {
    return `${Math.floor(s/60)}:${(s%60).toString().padStart(2,'0')}`;
  }

  function enter(num) {
    if (!selected || won) return;
    const { r, c } = selected;
    if (PUZZLE[r][c] !== 0) return;
    const next = board.map(row => [...row]);
    next[r][c] = num;
    if (num !== 0 && num !== SOLUTION[r][c]) setMistakes(m => m + 1);
    setBoard(next);
    if (next.every((row, ri) => row.every((v, ci) => v === SOLUTION[ri][ci]))) setWon(true);
  }

  function reset() {
    setBoard(PUZZLE.map(r => [...r]));
    setSelected(null);
    setMistakes(0);
    setSeconds(0);
    setWon(false);
  }

  function hint() {
    const empties = [];
    for (let r = 0; r < 9; r++)
      for (let c = 0; c < 9; c++)
        if (board[r][c] === 0) empties.push({r,c});
    if (!empties.length) return;
    const p = empties[Math.floor(Math.random() * empties.length)];
    const next = board.map(row => [...row]);
    next[p.r][p.c] = SOLUTION[p.r][p.c];
    setBoard(next);
  }

  function highlight(r, c) {
    if (!selected) return false;
    const br = Math.floor(r/3), bc = Math.floor(c/3);
    const sr = Math.floor(selected.r/3), sc = Math.floor(selected.c/3);
    return r === selected.r || c === selected.c || (br === sr && bc === sc);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f0f2f5; font-family: 'DM Sans', sans-serif; }
        .cell { width: 52px; height: 52px; display: flex; align-items: center; justify-content: center; font-family: 'DM Mono', monospace; font-size: 18px; cursor: pointer; user-select: none; transition: background 0.1s; }
        .num-btn { height: 48px; border-radius: 10px; border: 1.5px solid #e4e8ed; background: white; font-family: 'DM Mono', monospace; font-size: 18px; color: #0f1c2d; cursor: pointer; }
        .num-btn:hover { background: #0f1c2d; color: white; }
        @media (max-width: 520px) { .cell { width: 38px !important; height: 38px !important; font-size: 14px !important; } }
      `}</style>

      {/* Nav */}
      <nav style={{background:'#0f1c2d',height:'56px',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 24px'}}>
        <a href="/" style={{fontFamily:'Georgia,serif',fontStyle:'italic',fontSize:'18px',color:'white',textDecoration:'none'}}>
          FreeDeal<span style={{color:'#00C27C'}}>Calc</span>
        </a>
        <div style={{display:'flex',gap:'20px'}}>
          <a href="/freddie" style={{color:'#94a8b8',textDecoration:'none',fontSize:'13px'}}>Analyze a Deal</a>
          <a href="/" style={{color:'#94a8b8',textDecoration:'none',fontSize:'13px'}}>Home</a>
        </div>
      </nav>

      <main style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'32px 16px 48px'}}>
        
        {/* Freddie image */}
        <Image
          src="/Freddie solving a Sudoku puzzle.png"
          alt="Freddie solving a sudoku"
          width={140}
          height={140}
          style={{borderRadius:'50%',marginBottom:'16px'}}
        />

        <h1 style={{fontFamily:'Georgia,serif',fontStyle:'italic',fontSize:'32px',color:'#0f1c2d',marginBottom:'4px'}}>
          Freddy <span style={{color:'#00C27C'}}>Doku</span>
        </h1>
        <p style={{color:'#5a7184',fontSize:'13px',marginBottom:'24px'}}>
          {new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'})}
        </p>

        {/* Stats */}
        <div style={{display:'flex',gap:'12px',marginBottom:'20px'}}>
          {[{v:fmt(seconds),l:'Time'},{v:mistakes,l:'Mistakes'},{v:board.flat().filter(v=>v===0).length,l:'Left'}].map((s,i)=>(
            <div key={i} style={{background:'white',border:'1px solid #e4e8ed',borderRadius:'10px',padding:'10px 16px',textAlign:'center',minWidth:'70px'}}>
              <div style={{fontFamily:'DM Mono,monospace',fontSize:'20px',color:'#0f1c2d'}}>{s.v}</div>
              <div style={{fontSize:'10px',color:'#94a8b8',textTransform:'uppercase',letterSpacing:'0.8px'}}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Board */}
        <div style={{background:'white',borderRadius:'16px',padding:'16px',boxShadow:'0 2px 20px rgba(0,0,0,0.08)',marginBottom:'16px'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(9,52px)',border:'2.5px solid #0f1c2d',borderRadius:'4px',overflow:'hidden'}}>
            {board.map((row,r)=>row.map((val,c)=>{
              const isSel = selected?.r===r && selected?.c===c;
              const isGiven = PUZZLE[r][c]!==0;
              const isError = val!==0 && val!==SOLUTION[r][c];
              const isHigh = highlight(r,c);
              return (
                <div key={`${r}-${c}`} className="cell" onClick={()=>setSelected({r,c})}
                  style={{
                    background: isSel?'#e8f8f2': isGiven?'#f0f4f8': isHigh?'#f0faf6':'white',
                    color: isError?'#e53935': isGiven?'#0f1c2d':'#00a368',
                    outline: isSel?'2px solid #00C27C':'none',
                    outlineOffset:'-2px',
                    borderRight: (c+1)%3===0&&c!==8?'2px solid #0f1c2d':'1px solid #d8e0ea',
                    borderBottom: (r+1)%3===0&&r!==8?'2px solid #0f1c2d':'1px solid #d8e0ea',
                  }}>
                  {val!==0?val:''}
                </div>
              );
            }))}
          </div>
        </div>

        {/* Numpad */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:'8px',width:'calc(52px*9 + 32px)',marginBottom:'12px'}}>
          {[1,2,3,4,5,6,7,8,9].map(n=>(
            <button key={n} className="num-btn" onClick={()=>enter(n)}>{n}</button>
          ))}
          <button className="num-btn" onClick={()=>enter(0)} style={{fontSize:'12px',color:'#94a8b8'}}>✕ Erase</button>
        </div>

        {/* Actions */}
        <div style={{display:'flex',gap:'10px',width:'calc(52px*9 + 32px)'}}>
          <button onClick={hint} style={{height:'44px',padding:'0 16px',background:'white',border:'1.5px solid #e4e8ed',borderRadius:'10px',fontSize:'13px',cursor:'pointer'}}>💡 Hint</button>
          <button onClick={reset} style={{flex:1,height:'44px',background:'#0f1c2d',color:'white',border:'none',borderRadius:'10px',fontSize:'14px',fontWeight:'600',cursor:'pointer'}}>Reset Puzzle</button>
        </div>

      </main>

      {/* Win overlay */}
      {won && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.6)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:100}}>
          <div style={{background:'white',borderRadius:'20px',padding:'40px',textAlign:'center',maxWidth:'320px',width:'90%'}}>
            <div style={{fontSize:'48px',marginBottom:'12px'}}>🎉</div>
            <h2 style={{fontFamily:'Georgia,serif',fontStyle:'italic',fontSize:'28px',color:'#0f1c2d',marginBottom:'8px'}}>Puzzle Solved!</h2>
            <div style={{fontFamily:'DM Mono,monospace',fontSize:'32px',color:'#0f1c2d',marginBottom:'20px'}}>{fmt(seconds)}</div>
            <button onClick={reset} style={{width:'100%',padding:'12px',background:'#0f1c2d',color:'white',border:'none',borderRadius:'10px',fontSize:'14px',fontWeight:'600',cursor:'pointer',marginBottom:'10px'}}>Play Again</button>
            <a href="/freddie" style={{display:'block',padding:'12px',background:'#00C27C',color:'white',borderRadius:'10px',fontSize:'14px',fontWeight:'600',textDecoration:'none'}}>Analyze a Deal →</a>
          </div>
        </div>
      )}

      <footer style={{background:'#0f1c2d',padding:'20px',textAlign:'center',fontSize:'12px',color:'#5a7184'}}>
        FreeDealCalc.com · <a href="/freddie" style={{color:'#5a7184',textDecoration:'none'}}>Analyze a Deal</a> · © 2026 FreeDealCalc
      </footer>
    </>
  );
}