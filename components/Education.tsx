import { FadeUp }                            from './FadeUp'
import { SectionLabel }                     from './SectionLabel'
import { educationEntries, certifications } from '@/data/portfolio'

export function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* Education */}
        <div>
          <FadeUp><SectionLabel text="Education"/></FadeUp>
          <div className="flex flex-col gap-4">
            {educationEntries.map((e,i)=>(
              <FadeUp key={i} delay={i*.1}>
                <div className="rounded-2xl p-5" style={{background:'var(--color-card)',border:'1px solid var(--color-border)'}}>
                  <h3 className="font-syne font-bold text-[16px] mb-1.5" style={{color:'var(--color-text)'}}>{e.degree}</h3>
                  <p className="font-inter text-[13px] font-medium mb-2" style={{color:'var(--color-accent)'}}>{e.institution}</p>
                  <p className="font-inter text-[12px]" style={{color:'var(--color-muted)'}}>{e.period}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <FadeUp><SectionLabel text="Certifications"/></FadeUp>
          <div className="flex flex-col gap-3">
            {certifications.map((c,i)=>(
              <FadeUp key={i} delay={i*.1}>
                <div className="flex gap-3 items-start rounded-2xl p-5"
                  style={{background:'var(--color-card)',border:'1px solid var(--color-border)'}}>
                  <span className="w-[7px] h-[7px] rounded-full mt-[5px] shrink-0"
                    style={{background:'var(--color-accent)',boxShadow:'0 0 8px rgba(139,127,255,0.5)'}}/>
                  <div>
                    <p className="font-inter text-[13px] font-medium mb-1.5" style={{color:'var(--color-text)'}}>{c.name}</p>
                    <p className="font-inter text-[12px]" style={{color:'var(--color-muted)'}}>{c.issuer}</p>
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
