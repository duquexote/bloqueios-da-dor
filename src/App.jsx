import Navbar     from './components/Navbar'
import Hero        from './components/Hero'
import Problema    from './components/Problema'
import Solucao     from './components/Solucao'
import Diferenciais from './components/Diferenciais'
import Programa    from './components/Programa'
import Docentes    from './components/Docentes'
import Investimento from './components/Investimento'
import Local       from './components/Local'
import ParaQuem    from './components/ParaQuem'
import FAQ         from './components/FAQ'
import CTAFinal    from './components/CTAFinal'
import Footer      from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Solucao />
        <Diferenciais />
        <Programa />
        <Docentes />
        <Investimento />
        <Local />
        <ParaQuem />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
