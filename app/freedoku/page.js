'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const PUZZLE = [[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]];
const SOLUTION = [[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];

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

  function fmt(s) { return Math.floor(s/60) + ':' + (s%60).toString().padStart(2,'0'); }

  function enter(num) {
    if (!selected || won) return;
    const {r, c} = selected;
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

  return (
    <div style={{minHeight:'100vh',background:'#f0f2f5',fontFamily:'sans-serif'}}>
      <nav style={{background:'#0f1c2d',height:'56px',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 24px'}}>
        <a href="/" style={{fontStyle:'italic',fontSize:'18px',color:'white',textDecoration:'none'}}>FreeDeal<span style={{color:'#00C27C'}}>Calc</span></a>
        <a href="/freddie" style={{color:'#94a8b8',textDecoration:'none',fontSize:'13px'}}>Analyze a Deal</a>
      </nav>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'32px 16px'}}>
        <img src="/Freddie solving a Sudoku puzzle.png" alt="Freddie" style={{width:'140px',height:'140px',borderRadius:'50%',marginBottom:'16px'}} />
        <h1 style={{fontSize:'32px',color:'#0f1c2d',marginBottom:'8px'}}>Freddy Doku</h1>
        <div style={{display:'flex',gap:'12px',marginBottom:'20px'}}>
          <div style={{background:'white',padding:'10px 16px',borderRadius:'10px',textAlign:'center'}}><div style={{fontSize:'20px'}}>{fmt(seconds)}</div><div style={{fontSize:'10px',color:'#94a8b8'}}>TIME</div></div>
          <div style={{background:'white',padding:'10px 16px',borderRadius:'10px',textAlign:'center'}}><div style={{fontSize:'20px'}}>{mistakes}</div><div style={{fontSize:'10px',color:'#94a8b8'}}>MISTAKES</div></div>
        </div>
        <div style={{background:'white',borderRadius:'16px',padding:'16px',marginBottom:'16px'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(9,48px)',border:'2px solid #0f1c2d',overflow:'hidden'}}>
            {board.map((row,r)=>row.map((val,c)=>(
              <div key={r+'-'+c} onClick={()=>setSelected({r,c})}
                style={{width:'48px',height:'48px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'18px',cursor:'pointer',background:selected&&selected.r===r&&selected.c===c?'#e8f8f2':PUZZLE[r][c]!==0?'#f0f4f8':'white',color:val!==0&&val!==SOLUTION[r][c]?'#e53935':PUZZLE[r][c]!==0?'#0f1c2d':'#00a368',borderRight:(c+1)%3===0&&c!==8?'2px solid #0f1c2d':'1px solid #d8e0ea',borderBottom:(r+1)%3===0&&r!==8?'2px solid #0f1c2d':'1px solid #d8e0ea'}}>
                {val!==0?val:''}
              </div>
            )))}
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:'8px',width:'464px',marginBottom:'12px'}}>
          {[1,2,3,4,5,6,7,8,9].map(n=>(
            <button key={n} onClick={()=>enter(n)} style={{height:'48px',borderRadius:'10px',border:'1.5px solid #e4e8ed',background:'white',fontSize:'18px',cursor:'pointer'}}>{n}</button>
          ))}
          <button onClick={()=>enter(0)} style={{height:'48px',borderRadius:'10px',border:'1.5px solid #e4e8ed',background:'white',fontSize:'12px',cursor:'pointer'}}>✕ Erase</button>
        </div>
        <button onClick={reset} style={{padding:'12px 32px',background:'#0f1c2d',color:'white',border:'none',borderRadius:'10px',fontSize:'14px',cursor:'pointer'}}>Reset</button>
      </div>
      {won&&<div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.6)',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{background:'white',borderRadius:'20px',padding:'40px',textAlign:'center'}}>
          <div style={{fontSize:'48px'}}>🎉</div>
          <h2 style={{fontSize:'24px',margin:'12px 0'}}>Puzzle Solved!</h2>
          <div style={{fontSize:'32px',marginBottom:'20px'}}>{fmt(seconds)}</div>
          <button onClick={reset} style={{display:'block',width:'100%',padding:'12px',background:'#0f1c2d',color:'white',border:'none',borderRadius:'10px',marginBottom:'10px',cursor:'pointer'}}>Play Again</button>
          <a href="/freddie" style={{display:'block',padding:'12px',background:'#00C27C',color:'white',borderRadius:'10px',textDecoration:'none'}}>Analyze a Deal →</a>
        </div>
      </div>}
    </div>
  );
}
