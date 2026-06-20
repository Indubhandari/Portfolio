import Image from 'next/image'
import { FadeUp }        from './FadeUp'
import { SectionLabel } from './SectionLabel'
import { stats }         from '@/data/portfolio'

const VALUES = [
  { label:'Empathy first',    desc:`I design from the user's perspective, not assumptions.` },
  { label:'Intentional craft',desc:`Every pixel has a reason. Details make the difference.` },
  { label:'Collaborate deeply',desc:`Great design emerges from tight feedback loops with teams.` },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto">
        <FadeUp><SectionLabel text="About Me"/></FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-14 items-start">

          {/* Left col: photo + stats */}
          <FadeUp delay={.1} className="flex flex-col items-center lg:items-start gap-5">
            {/* Small photo */}
            <div className="relative w-[200px] h-[220px] rounded-2xl overflow-hidden shrink-0"
              style={{border:'1px solid rgba(139,127,255,0.25)'}}>
              <Image src="/profile-placeholder.svg" alt="Indu Bhandari" fill className="object-cover"/>
            </div>
            {/* Quick stats */}
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 w-full max-w-[200px]">
              {stats.map((s,i)=>(
                <div key={i} className="rounded-xl px-4 py-3 text-center lg:text-left"
                  style={{background:'var(--color-card)',border:'1px solid var(--color-border)'}}>
                  <p className="font-syne font-extrabold text-[26px] leading-none" style={{color:'var(--color-accent)'}}>{s.value}</p>
                  <p className="font-inter text-[11px] mt-1" style={{color:'var(--color-muted)'}}>{s.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right col: bio + values */}
          <FadeUp delay={.18}>
            <h2 className="font-syne font-bold mb-5"
              style={{color:'var(--color-text)',fontSize:'clamp(22px,3vw,34px)',letterSpacing:'-.025em',lineHeight:1.24}}>
              I design experiences that bridge the gap between{' '}
              <span style={{color:'var(--color-accent)'}}>people and products.</span>
            </h2>

            <p className="font-inter text-[15px] leading-[1.88] mb-4" style={{color:'var(--color-muted)'}}>
              With 4+ years in UI/UX design, I&apos;ve worked across EdTech, SaaS, and enterprise products.
              My process begins with deep user understanding and ends with polished, developer-ready designs
              that teams can ship confidently.
            </p>
            <p className="font-inter text-[15px] leading-[1.88] mb-10" style={{color:'var(--color-muted)'}}>
              Based in Kathmandu, Nepal — open to remote opportunities worldwide.
            </p>

            {/* Values */}
            <div className="flex flex-col gap-3">
              {VALUES.map((v,i)=>(
                <div key={i} className="flex gap-3 items-start rounded-xl p-4"
                  style={{background:'var(--color-card)',border:'1px solid var(--color-border)'}}>
                  <span className="w-[7px] h-[7px] rounded-full mt-[5px] shrink-0"
                    style={{background:'var(--color-accent)',boxShadow:'0 0 8px rgba(139,127,255,0.5)'}}/>
                  <div>
                    <p className="font-inter font-semibold text-[13px] mb-0.5" style={{color:'var(--color-text)'}}>{v.label}</p>
                    <p className="font-inter text-[12px] leading-relaxed" style={{color:'var(--color-muted)'}}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
