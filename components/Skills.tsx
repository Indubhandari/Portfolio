'use client'
import { useState }    from 'react'
import { FadeUp }       from './FadeUp'
import { SectionLabel } from './SectionLabel'
import { skillGroups }  from '@/data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12" style={{
      background:'var(--color-panel)',
      borderTop:'1px solid var(--color-border)',
      borderBottom:'1px solid var(--color-border)',
    }}>
      <div className="max-w-[1000px] mx-auto">
        <FadeUp><SectionLabel text="Skills & Tools"/></FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillGroups.map((g,i)=>(
            <FadeUp key={i} delay={i*.1}>
              <div className="rounded-2xl p-6" style={{background:'var(--color-card)',border:'1px solid var(--color-border)'}}>
                <p className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase mb-4"
                  style={{color:'var(--color-accent)'}}>{g.cat}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map(item=><Chip key={item} label={item}/>)}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function Chip({ label }:{ label:string }) {
  const [h,setH]=useState(false)
  return (
    <span onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      className="font-inter text-[12px] font-medium tracking-wide rounded-lg px-3 py-[6px] cursor-default transition-all duration-200"
      style={{
        color:      h?'var(--color-text)':'var(--color-muted)',
        background: h?'rgba(139,127,255,0.14)':'rgba(255,255,255,0.04)',
        border:    `1px solid ${h?'rgba(139,127,255,0.36)':'var(--color-border)'}`,
        transform:  h?'translateY(-1px)':'none',
      }}>{label}</span>
  )
}
