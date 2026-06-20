'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { LinkedInIcon, BehanceIcon, DribbbleIcon } from './icons/SocialIcons'

const SOCIALS = [
  { href:'https://linkedin.com',  Icon:LinkedInIcon,  label:'LinkedIn'  },
  { href:'https://behance.net',   Icon:BehanceIcon,   label:'Behance'   },
  { href:'https://dribbble.com',  Icon:DribbbleIcon,  label:'Dribbble'  },
]

const ctn  = { hidden:{}, show:{ transition:{ staggerChildren:.13, delayChildren:.1 } } }
const item = { hidden:{ opacity:0, y:28 }, show:{ opacity:1, y:0, transition:{ duration:.9, ease:[0.25,0.46,0.45,0.94] } } }

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-14 lg:px-24 py-28 overflow-hidden">

      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:'linear-gradient(rgba(139,127,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(139,127,255,0.03) 1px,transparent 1px)',
        backgroundSize:'80px 80px',
      }}/>

      {/* Right side orb */}
      <div className="absolute pointer-events-none rounded-full" style={{
        width:'700px',height:'700px',
        background:'radial-gradient(circle,rgba(139,127,255,0.13) 0%,rgba(139,127,255,0.03) 55%,transparent 70%)',
        top:'50%',right:'-15%',transform:'translateY(-50%)',
      }}/>

      <div className="relative max-w-[1160px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-center">

        {/* ── Left: Text ── */}
        <motion.div variants={ctn} initial="hidden" animate="show">

          {/* Greeting tag */}
          <motion.div variants={item} className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px" style={{background:'var(--color-accent)'}}/>
            <span className="font-inter text-[12px] font-semibold tracking-[0.14em]" style={{color:'var(--color-accent)'}}>
              HELLO, I&apos;M
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={item}
            className="font-syne font-extrabold leading-[0.93] tracking-[-0.04em] mb-5"
            style={{color:'var(--color-text)', fontSize:'clamp(46px,7vw,90px)'}}>
            Indu<br/>Bhandari
          </motion.h1>

          {/* Role chip */}
          <motion.div variants={item} className="flex items-center gap-2.5 mb-6">
            <span className="inline-block w-2 h-2 rounded-full" style={{background:'var(--color-green)',boxShadow:'0 0 8px rgba(90,237,200,0.7)'}}/>
            <span className="font-syne font-semibold" style={{color:'var(--color-accent)',fontSize:'clamp(15px,2vw,20px)'}}>
              UI / UX Designer
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p variants={item}
            className="font-inter text-[15px] leading-[1.88] mb-10 max-w-[480px]"
            style={{color:'var(--color-muted)'}}>
            Crafting user-centered digital products for 4+ years. I turn complex problems
            into elegant, intuitive interfaces — from deep user research to pixel-perfect delivery.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-10">
            <PrimaryBtn href="#projects">View Portfolio ↗</PrimaryBtn>
            <OutlineBtn href="/cv.pdf">Download CV</OutlineBtn>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="flex items-center gap-2">
            <span className="font-inter text-[12px] mr-1" style={{color:'var(--color-muted)'}}>Find me —</span>
            {SOCIALS.map(({href,Icon,label})=>(
              <SocialBtn key={label} href={href} label={label}><Icon className="w-[15px] h-[15px]"/></SocialBtn>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Photo ── */}
        <motion.div
          className="relative mx-auto lg:mx-0 shrink-0"
          initial={{opacity:0,x:40,scale:.94}}
          animate={{opacity:1,x:0,scale:1}}
          transition={{duration:1.1,delay:.25,ease:[0.25,0.46,0.45,0.94]}}>

          {/* Glow shadow behind */}
          <div className="absolute inset-0 rounded-[28px] -z-10" style={{
            background:'rgba(139,127,255,0.14)',
            transform:'translate(14px,14px)',filter:'blur(4px)',
          }}/>

          {/* Photo frame */}
          <div className="relative overflow-hidden rounded-[28px]"
            style={{width:'288px',height:'356px',border:'1px solid rgba(139,127,255,0.28)'}}>
            <Image src="/profile-placeholder.svg" alt="Indu Bhandari"
              fill priority className="object-cover"/>
            {/* bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-1/4" style={{
              background:'linear-gradient(to top,rgba(6,6,10,0.55),transparent)'
            }}/>
          </div>

          {/* Available badge */}
          <div className="absolute -bottom-5 left-4 flex items-center gap-2 rounded-2xl px-3.5 py-2.5 shadow-xl"
            style={{background:'var(--color-card)',border:'1px solid var(--color-border)'}}>
            <span className="w-[7px] h-[7px] rounded-full block" style={{
              background:'var(--color-green)',
              boxShadow:'0 0 8px rgba(90,237,200,0.8)',
              animation:'blink 2s ease-in-out infinite',
            }}/>
            <span className="font-inter text-[12px] font-medium" style={{color:'var(--color-text)'}}>
              Available for Work
            </span>
          </div>

          {/* Years badge */}
          <div className="absolute -top-4 -right-4 rounded-2xl px-4 py-3 text-center" style={{
            background:'var(--color-accent)',
            boxShadow:'0 8px 32px rgba(139,127,255,0.45)',
            animation:'float 4s ease-in-out infinite',
          }}>
            <p className="font-syne font-extrabold text-[22px] text-white leading-none">4+</p>
            <p className="font-inter text-[10px] text-white/80 mt-0.5 leading-none">Years Exp.</p>
          </div>

          {/* Projects badge */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 rounded-2xl px-3.5 py-2.5" style={{
            background:'var(--color-card)',
            border:'1px solid var(--color-border)',
            animation:'float 4s ease-in-out infinite .8s',
          }}>
            <p className="font-syne font-extrabold text-[20px] leading-none" style={{color:'var(--color-accent)'}}>20+</p>
            <p className="font-inter text-[10px] leading-none mt-1" style={{color:'var(--color-muted)'}}>Projects</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{opacity:0}} animate={{opacity:.4}} transition={{delay:2,duration:1}}>
        <span className="font-inter text-[9px] tracking-[0.14em]" style={{color:'var(--color-muted)'}}>SCROLL</span>
        <div className="w-px h-9" style={{
          background:'linear-gradient(to bottom,rgba(139,127,255,0.8),transparent)',
          animation:'scrollBar 2.2s ease-in-out infinite',
        }}/>
      </motion.div>
    </section>
  )
}

function PrimaryBtn({children,href}:{children:React.ReactNode;href:string}) {
  const [h,setH]=useState(false)
  return (
    <a href={href} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      className="font-inter font-semibold text-[14px] rounded-xl px-7 py-3 transition-all duration-250 no-underline inline-block"
      style={{
        color:'#06060A',
        background:h?'#A09AFF':'var(--color-accent)',
        boxShadow:h?'0 10px 36px rgba(139,127,255,0.44)':'none',
        transform:h?'translateY(-2px)':'none',
        letterSpacing:'.01em',
      }}>{children}</a>
  )
}

function OutlineBtn({children,href}:{children:React.ReactNode;href:string}) {
  const [h,setH]=useState(false)
  return (
    <a href={href} download onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      className="font-inter font-medium text-[14px] rounded-xl px-7 py-3 transition-all duration-250 no-underline inline-block"
      style={{
        color:'var(--color-text)',
        background:'transparent',
        border:`1px solid ${h?'rgba(240,238,232,0.35)':'rgba(240,238,232,0.16)'}`,
        transform:h?'translateY(-2px)':'none',
      }}>{children}</a>
  )
}

function SocialBtn({href,label,children}:{href:string;label:string;children:React.ReactNode}) {
  const [h,setH]=useState(false)
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200"
      style={{
        color:      h?'var(--color-text)':'var(--color-muted)',
        background: h?'rgba(139,127,255,0.14)':'rgba(255,255,255,0.04)',
        border:    `1px solid ${h?'rgba(139,127,255,0.32)':'var(--color-border)'}`,
        transform:  h?'translateY(-2px)':'none',
      }}>{children}</a>
  )
}
