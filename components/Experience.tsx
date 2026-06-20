'use client'
import { FadeUp }       from './FadeUp'
import { SectionLabel } from './SectionLabel'
import { experiences }  from '@/data/portfolio'

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12" style={{
      background:'var(--color-panel)',
      borderTop:'1px solid var(--color-border)',
      borderBottom:'1px solid var(--color-border)',
    }}>
      <div className="max-w-[1000px] mx-auto">
        <FadeUp><SectionLabel text="Work Experience"/></FadeUp>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-3 bottom-3 w-px hidden md:block"
            style={{background:'linear-gradient(to bottom,var(--color-accent),rgba(139,127,255,0.1))'}}/>

          <div className="flex flex-col gap-2">
            {experiences.map((exp,i)=>(
              <FadeUp key={i} delay={i*.12}>
                <div className="grid grid-cols-1 md:grid-cols-[24px_1fr] gap-0 md:gap-8 mb-10 last:mb-0">

                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center mt-[6px]">
                    <div className="w-3.5 h-3.5 rounded-full shrink-0 z-10"
                      style={{
                        background: exp.current ? 'var(--color-accent)' : 'var(--color-card)',
                        border:`2px solid ${exp.current?'var(--color-accent)':'rgba(139,127,255,0.4)'}`,
                        boxShadow: exp.current ? '0 0 12px rgba(139,127,255,0.6)' : 'none',
                      }}/>
                  </div>

                  {/* Content card */}
                  <div className="rounded-2xl p-6 md:p-7 transition-all duration-300"
                    style={{background:'var(--color-card)',border:'1px solid var(--color-border)'}}
                    onMouseEnter={e=>{
                      (e.currentTarget as HTMLElement).style.borderColor='rgba(139,127,255,0.28)'
                      ;(e.currentTarget as HTMLElement).style.transform='translateX(4px)'
                    }}
                    onMouseLeave={e=>{
                      (e.currentTarget as HTMLElement).style.borderColor='var(--color-border)'
                      ;(e.currentTarget as HTMLElement).style.transform='none'
                    }}>

                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-syne font-bold text-[18px] mb-1"
                          style={{color:'var(--color-text)',letterSpacing:'-.02em'}}>{exp.role}</h3>
                        <p className="font-inter text-[13px] font-medium" style={{color:'var(--color-accent)'}}>{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {exp.current && (
                          <span className="font-inter text-[9px] font-bold tracking-[0.1em] rounded-md px-2.5 py-1" style={{
                            color:'var(--color-green)',background:'rgba(90,237,200,0.1)',border:'1px solid rgba(90,237,200,0.25)',
                          }}>CURRENT</span>
                        )}
                        <span className="font-inter text-[12px]" style={{color:'var(--color-muted)'}}>{exp.period}</span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="flex flex-col gap-2">
                      {exp.bullets.map((b,j)=>(
                        <li key={j} className="flex gap-2.5 items-start">
                          <span className="text-[11px] mt-[3px] shrink-0" style={{color:'var(--color-accent)'}}>→</span>
                          <span className="font-inter text-[13px] leading-[1.68]" style={{color:'var(--color-muted)'}}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
