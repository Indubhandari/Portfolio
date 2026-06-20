'use client'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props { children:ReactNode; delay?:number; className?:string }

export function FadeUp({ children, delay=0, className }:Props) {
  return (
    <motion.div
      initial={{ opacity:0, y:32 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin:'-72px' }}
      transition={{ duration:.75, delay, ease:[0.25,0.46,0.45,0.94] }}
      className={className}
    >{children}</motion.div>
  )
}
