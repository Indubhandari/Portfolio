'use client'
import { FadeUp }        from './FadeUp'
import { SectionLabel } from './SectionLabel'

const SERVICES = [
  {
    icon:(
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title:'UX Research',
    desc:'User interviews, usability testing, and data analysis to ground every design decision in real human insights.',
  },
  {
    icon:(
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title:'UI Design',
    desc:'Pixel-perfect, accessible interfaces with strong visual hierarchy, fluid motion, and a consistent design language.',
  },
  {
    icon:(
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    ),
    title:'Prototyping',
    desc:'Interactive prototypes from lo-fi wireframes to high-fidelity demos that validate ideas quickly and clearly.',
  },
  {
    icon:(
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    title:'Design Systems',
    desc:'Scalable component libraries and style guides that keep teams aligned and products consistent at any scale.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12" style={{
      background:'var(--color-panel)',
      borderTop:'1px solid var(--color-border)',
      borderBottom:'1px solid var(--color-border)',
    }}>
      <div className="max-w-[1000px] mx-auto">
        <FadeUp><SectionLabel text="What I Do"/></FadeUp>
        <FadeUp delay={.08}>
          <h2 className="font-syne font-bold mb-14 max-w-xl"
            style={{color:'var(--color-text)',fontSize:'clamp(24px,3.5vw,38px)',letterSpacing:'-.025em',lineHeight:1.2}}>
            Turning ideas into <span style={{color:'var(--color-accent)'}}>experiences</span> people love
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SERVICES.map((s,i)=>(
            <FadeUp key={i} delay={i*.1}>
              <ServiceCard {...s}/>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({icon,title,desc}:{icon:React.ReactNode;title:string;desc:string}) {
  return (
    <div className="group rounded-2xl p-7 transition-all duration-300 cursor-default"
      style={{background:'var(--color-card)',border:'1px solid var(--color-border)'}}
      onMouseEnter={e=>{
        (e.currentTarget as HTMLElement).style.borderColor='rgba(139,127,255,0.35)'
        ;(e.currentTarget as HTMLElement).style.transform='translateY(-4px)'
        ;(e.currentTarget as HTMLElement).style.boxShadow='0 16px 48px rgba(139,127,255,0.1)'
      }}
      onMouseLeave={e=>{
        (e.currentTarget as HTMLElement).style.borderColor='var(--color-border)'
        ;(e.currentTarget as HTMLElement).style.transform='none'
        ;(e.currentTarget as HTMLElement).style.boxShadow='none'
      }}>
      <div className="flex items-center justify-center w-11 h-11 rounded-xl mb-5"
        style={{background:'rgba(139,127,255,0.12)',color:'var(--color-accent)'}}>
        {icon}
      </div>
      <h3 className="font-syne font-bold text-[17px] mb-3" style={{color:'var(--color-text)',letterSpacing:'-.018em'}}>{title}</h3>
      <p  className="font-inter text-[13px] leading-[1.78]" style={{color:'var(--color-muted)'}}>{desc}</p>
    </div>
  )
}
