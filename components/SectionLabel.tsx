interface Props { text:string; center?:boolean }

export function SectionLabel({ text, center=false }:Props) {
  return (
    <div className={`flex items-center gap-2.5 mb-12 ${center ? 'justify-center':''}`}>
      <div className="w-6 h-px" style={{background:'var(--color-accent)'}}/>
      <span className="font-inter text-[11px] font-semibold tracking-[0.16em] uppercase"
        style={{color:'var(--color-accent)'}}>
        {text}
      </span>
    </div>
  )
}
