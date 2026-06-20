'use client'
import { useState, FormEvent } from 'react'
import { motion }      from 'framer-motion'
import { FadeUp }       from './FadeUp'
import { SectionLabel } from './SectionLabel'
import { LinkedInIcon, BehanceIcon, DribbbleIcon, EmailIcon, LocationIcon } from './icons/SocialIcons'

const SOCIALS = [
  { href:'https://linkedin.com', Icon:LinkedInIcon, label:'LinkedIn' },
  { href:'https://behance.net',  Icon:BehanceIcon,  label:'Behance'  },
  { href:'https://dribbble.com', Icon:DribbbleIcon, label:'Dribbble' },
]

export function Contact() {
  const [form, setForm]   = useState({ name:'', email:'', message:'' })
  const [sent, setSent]   = useState(false)
  const [focus,setFocus]  = useState<string|null>(null)

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body    = encodeURIComponent(form.message)
    window.location.href = `mailto:indu.bhandari@email.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(()=>setSent(false),3000)
  }

  const fieldStyle = (name:string):React.CSSProperties => ({
    fontFamily:'var(--font-inter),system-ui,sans-serif',
    fontSize:'14px',
    color:'var(--color-text)',
    background:'transparent',
    border:`1px solid ${focus===name?'rgba(139,127,255,0.55)':'var(--color-border)'}`,
    borderRadius:'12px',
    padding:'13px 16px',
    width:'100%',
    transition:'border-color .2s ease',
    outline:'none',
  })

  return (
    <section id="contact" className="py-24 px-6 md:px-12" style={{
      background:'var(--color-panel)',
      borderTop:'1px solid var(--color-border)',
    }}>
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">

        {/* ── Left: Info ── */}
        <FadeUp>
          <SectionLabel text="Let's Connect"/>
          <h2 className="font-syne font-extrabold mb-5"
            style={{color:'var(--color-text)',fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-.03em',lineHeight:1.1}}>
            Have a project in mind?<br/>
            <span style={{color:'var(--color-accent)'}}>Let&apos;s talk.</span>
          </h2>
          <p className="font-inter text-[14px] leading-[1.85] mb-10" style={{color:'var(--color-muted)'}}>
            Whether you&apos;re looking for a designer to join your team or want to bring a
            product idea to life — I&apos;d love to hear from you.
          </p>

          {/* Contact details */}
          <div className="flex flex-col gap-3 mb-10">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
                style={{background:'rgba(139,127,255,0.1)',color:'var(--color-accent)'}}>
                <EmailIcon className="w-4 h-4"/>
              </div>
              <a href="mailto:indu.bhandari@email.com"
                className="font-inter text-[14px] transition-colors duration-200"
                style={{color:'var(--color-muted)'}}
                onMouseEnter={e=>(e.currentTarget.style.color='var(--color-text)')}
                onMouseLeave={e=>(e.currentTarget.style.color='var(--color-muted)')}>
                indu.bhandari@email.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
                style={{background:'rgba(139,127,255,0.1)',color:'var(--color-accent)'}}>
                <LocationIcon className="w-4 h-4"/>
              </div>
              <span className="font-inter text-[14px]" style={{color:'var(--color-muted)'}}>Kathmandu, Nepal · Open to Remote</span>
            </div>
          </div>

          {/* Social icons */}
          <div>
            <p className="font-inter text-[12px] mb-4 uppercase tracking-[0.1em]" style={{color:'var(--color-muted)'}}>Find me on</p>
            <div className="flex gap-3">
              {SOCIALS.map(({href,Icon,label})=>(
                <SocialBtn key={label} href={href} label={label}>
                  <Icon className="w-4 h-4"/>
                </SocialBtn>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* ── Right: Form ── */}
        <FadeUp delay={.15}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-inter text-[12px] font-medium" style={{color:'var(--color-muted)'}}>Name</label>
                <input type="text" placeholder="Your name" required
                  value={form.name}
                  onChange={e=>setForm(f=>({...f,name:e.target.value}))}
                  onFocus={()=>setFocus('name')} onBlur={()=>setFocus(null)}
                  style={fieldStyle('name')}/>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-inter text-[12px] font-medium" style={{color:'var(--color-muted)'}}>Email</label>
                <input type="email" placeholder="you@email.com" required
                  value={form.email}
                  onChange={e=>setForm(f=>({...f,email:e.target.value}))}
                  onFocus={()=>setFocus('email')} onBlur={()=>setFocus(null)}
                  style={fieldStyle('email')}/>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-inter text-[12px] font-medium" style={{color:'var(--color-muted)'}}>Message</label>
              <textarea placeholder="Tell me about your project..." required rows={6}
                value={form.message}
                onChange={e=>setForm(f=>({...f,message:e.target.value}))}
                onFocus={()=>setFocus('message')} onBlur={()=>setFocus(null)}
                style={{...fieldStyle('message'),resize:'none'}}/>
            </div>
            <motion.button type="submit"
              className="font-inter font-semibold text-[14px] rounded-xl py-3.5 transition-all duration-250 w-full mt-1"
              style={{color:'#06060A',background:'var(--color-accent)',letterSpacing:'.01em'}}
              whileHover={{background:'#A09AFF',y:-2,boxShadow:'0 10px 32px rgba(139,127,255,0.44)'}}
              whileTap={{scale:.98}}>
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </motion.button>
          </form>
        </FadeUp>
      </div>
    </section>
  )
}

function SocialBtn({href,label,children}:{href:string;label:string;children:React.ReactNode}) {
  const [h,setH]=useState(false)
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200"
      style={{
        color:      h?'var(--color-text)':'var(--color-muted)',
        background: h?'rgba(139,127,255,0.14)':'rgba(255,255,255,0.04)',
        border:    `1px solid ${h?'rgba(139,127,255,0.35)':'var(--color-border)'}`,
        transform:  h?'translateY(-2px)':'none',
      }}>{children}</a>
  )
}
