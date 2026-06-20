import { Navbar }     from '@/components/Navbar'
import { Hero }       from '@/components/Hero'
import { Services }   from '@/components/Services'
import { About }      from '@/components/About'
import { Experience } from '@/components/Experience'
import { Projects }   from '@/components/Projects'
import { Skills }     from '@/components/Skills'
import { Education }  from '@/components/Education'
import { Contact }    from '@/components/Contact'
import { Footer }     from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
