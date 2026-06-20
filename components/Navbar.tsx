'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const LINKS = ['About','Experience','Projects','Skills','Contact']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive:true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-500"
        style={{
          background:    scrolled ? 'rgba(6,6,10,0.9)'           : 'transparent',
          backdropFilter:scrolled ? 'blur(20px) saturate(1.6)'   : 'none',
          borderBottom:  scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        }}
      >
        <Link href="/" className="font-syne font-extrabold text-xl tracking-tight"
          style={{ color:'var(--color-text)' }}>
          IB<span style={{color:'var(--color-accent)'}}>.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="font-inter text-[13px] tracking-wide transition-colors duration-200"
              style={{color:'var(--color-muted)'}}
              onMouseEnter={e=>(e.currentTarget.style.color='var(--color-text)')}
              onMouseLeave={e=>(e.currentTarget.style.color='var(--color-muted)')}
            >{l}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <HireBtn />
        </div>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-[5px] p-1 z-50"
          onClick={()=>setOpen(o=>!o)} aria-label="Menu">
          {[0,1,2].map(i=>(
            <motion.span key={i} className="block h-[2px] rounded-full origin-center"
              style={{background:'var(--color-text)', width: i===1?'14px':'20px'}}
              animate={open
                ? i===0?{rotate:45,y:7,width:'20px'}
                : i===1?{opacity:0}
                :       {rotate:-45,y:-7,width:'20px'}
                : {rotate:0,y:0,opacity:1,width:i===1?'14px':'20px'}}
              transition={{duration:.22}}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
            style={{background:'rgba(6,6,10,0.97)'}}
            initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.25}}>
            {LINKS.map((l,i)=>(
              <motion.a key={l} href={`#${l.toLowerCase()}`}
                className="font-syne font-bold text-4xl mb-8"
                style={{color:'var(--color-text)'}}
                initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
                transition={{delay:i*0.07}}
                onClick={()=>setOpen(false)}
              >{l}</motion.a>
            ))}
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.38}}>
              <HireBtn />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function HireBtn() {
  const [h,setH]=useState(false)
  return (
    <a href="#contact"
      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      className="font-inter font-semibold text-[13px] rounded-xl px-5 py-2.5 transition-all duration-200"
      style={{
        color:'#06060A',
        background: h?'#A09AFF':'var(--color-accent)',
        boxShadow:  h?'0 6px 24px rgba(139,127,255,0.4)':'none',
        transform:  h?'translateY(-1px)':'none',
      }}>
      Hire Me ↗
    </a>
  )
}
