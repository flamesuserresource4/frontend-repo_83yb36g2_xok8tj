import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Story from './components/Story'
import Program from './components/Program'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import LeadForm from './components/LeadForm'

function App() {
  const goToForm = () => {
    const el = document.getElementById('anfrage')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const goToProgram = () => {
    const el = document.getElementById('programm')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero onPrimary={goToForm} onSecondary={goToProgram} />
      <Problem />
      <Story />
      <Program />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA onPrimary={goToForm} />
      <LeadForm />
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Männer Coaching Schweiz. Alle Rechte vorbehalten.
      </footer>
    </div>
  )
}

export default App
