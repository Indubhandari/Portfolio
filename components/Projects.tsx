'use client'
import { useState }    from 'react'
import { motion }      from 'framer-motion'
import { FadeUp }       from './FadeUp'
import { SectionLabel } from './SectionLabel'
import { ArrowUpRightIcon } from './icons/SocialIcons'
import { projects }     from '@/data/portfolio'
import type { Project } from '@/types'

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto">
        <FadeUp>
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <SectionLabel text="Selected Work"/>
            </div>
            <p className="font-inter text-[13px]" style={{color:'var(--color-muted)',marginTop:'-36px'}}>
              4 of 20+ projects
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p,i)=>(
            <FadeUp key={i} delay={i*.1}>
              <ProjectCard project={p}/>
            </FadeUp>
          ))}
        </div>

        {/* CTA */}
        <FadeUp delay={.3}>
          <div className="flex justify-center mt-12">
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer"
              className="font-inter font-medium text-[13px] rounded-xl px-6 py-3 transition-all duration-200"
              style={{color:'var(--color-accent)',background:'rgba(139,127,255,0.1)',border:'1px solid rgba(139,127,255,0.25)'}}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background='rgba(139,127,255,0.18)'}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background='rgba(139,127,255,0.1)'}}>
              View All Work on Behance ↗
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

function ProjectCard({ project:p }:{ project:Project }) {
  const [hov,setHov]=useState(false)
  return (
    <motion.div
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      animate={{
        y:           hov?-6:0,
        boxShadow:   hov?`0 24px 60px ${p.accent}14`:'0 0 0 rgba(0,0,0,0)',
        borderColor: hov?`${p.accent}50`:'rgba(255,255,255,0.07)',
      }}
      transition={{duration:.28,ease:'easeOut'}}
      className="rounded-[20px] overflow-hidden cursor-pointer"
      style={{background:'var(--color-card)',border:'1px solid rgba(255,255,255,0.07)'}}>

      {/* Coloured header */}
      <div className="relative h-28 flex items-center px-7" style={{
        background:`linear-gradient(135deg, ${p.accent}22 0%, ${p.accent}08 100%)`,
        borderBottom:'1px solid rgba(255,255,255,0.05)',
      }}>
        <div className="absolute inset-0" style={{
          backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
          backgroundSize:'28px 28px',
        }}/>
        <p className="font-syne font-extrabold tracking-[-0.04em] z-10" style={{color:p.accent,fontSize:'56px',opacity:.2,lineHeight:1}}>{p.num}</p>

        {/* Arrow on hover */}
        <motion.div className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full"
          style={{background:p.accent,color:'#fff'}}
          animate={{opacity:hov?1:0,scale:hov?1:.8}}
          transition={{duration:.2}}>
          <ArrowUpRightIcon className="w-3.5 h-3.5"/>
        </motion.div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-syne font-bold text-[18px] mb-2.5"
          style={{color:'var(--color-text)',letterSpacing:'-.02em'}}>{p.title}</h3>
        <p className="font-inter text-[13px] leading-[1.76] mb-5"
          style={{color:'var(--color-muted)'}}>{p.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map(t=>(
            <span key={t} className="font-inter text-[11px] font-medium tracking-[0.03em] rounded-lg px-3 py-1"
              style={{color:p.accent,background:`${p.accent}16`,border:`1px solid ${p.accent}28`}}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
