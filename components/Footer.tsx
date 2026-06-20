'use client'
import { useState }    from 'react'
import Link             from 'next/link'
import { LinkedInIcon, BehanceIcon, DribbbleIcon } from './icons/SocialIcons'

const NAV   = ['About','Experience','Projects','Skills','Contact']
const SOCIALS = [
  { href:'https://linkedin.com', Icon:LinkedInIcon, label:'LinkedIn' },
  { href:'https://behance.net',  Icon:BehanceIcon,  label:'Behance'  },
  { href:'https://dribbble.com', Icon:DribbbleIcon, label:'Dribbble' },
]

export function Footer() {
  return (
    <footer className="px-6 md:px-12 pt-14 pb-8" style={{borderTop:'1px solid var(--color-border)'}}>
      <div className="max-w-[1000px] mx-auto">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 mb-12 items-start">
          {/* Brand */}
          <div>
            <Link href="/" className="font-syne font-extrabold text-2xl tracking-tight mb-3 block"
              style={{color:'var(--color-text)'}}>
              IB<span style={{color:'var(--color-accent)'}}>.</span>
            </Link>
            <p className="font-inter text-[13px] leading-relaxed max-w-[240px]" style={{color:'var(--color-muted)'}}>
              UI/UX Designer crafting digital experiences that feel inevitable.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.14em] mb-4" style={{color:'var(--color-muted)'}}>Navigation</p>
            <ul className="flex flex-col gap-2.5">
              {NAV.map(l=>(
                <li key={l}>
                  <FooterLink href={`#${l.toLowerCase()}`}>{l}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.14em] mb-4" style={{color:'var(--color-muted)'}}>Social</p>
            <div className="flex flex-col gap-2.5">
              {SOCIALS.map(({href,label})=>(
                <FooterLink key={label} href={href} external>{label}</FooterLink>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{background:'var(--color-border)'}}/>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-[12px]" style={{color:'var(--color-muted)'}}>
            © {new Date().getFullYear()} Indu Bhandari. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {SOCIALS.map(({href,Icon,label})=>(
              <SocialIcon key={label} href={href} label={label}><Icon className="w-3.5 h-3.5"/></SocialIcon>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({href,children,external=false}:{href:string;children:React.ReactNode;external?:boolean}) {
  const [h,setH]=useState(false)
  return (
    <a href={href} {...(external?{target:'_blank',rel:'noopener noreferrer'}:{})}
      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      className="font-inter text-[13px] transition-colors duration-200"
      style={{color:h?'var(--color-text)':'var(--color-muted)'}}>
      {children}
    </a>
  )
}

function SocialIcon({href,label,children}:{href:string;label:string;children:React.ReactNode}) {
  const [h,setH]=useState(false)
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200"
      style={{
        color:      h?'var(--color-text)':'var(--color-muted)',
        background: h?'rgba(139,127,255,0.12)':'rgba(255,255,255,0.04)',
        border:    `1px solid ${h?'rgba(139,127,255,0.3)':'var(--color-border)'}`,
      }}>{children}</a>
  )
}
