import { useEffect, useRef } from 'react'
import './ParaQuem.css'

const forYes = [
  'Você é médico e atua ou quer atuar com manejo de dor crônica ou aguda',
  'Você quer dominar bloqueios guiados por ultrassom em membros inferiores',
  'Você quer expandir seu portfólio de procedimentos intervencionistas',
  'Você sente que falta treino prático supervisionado para ganhar confiança clínica',
  'Você quer aprender com quem realmente faz — não apenas com quem ensina teoria',
]

const forNo = [
  'Você busca mais um congresso com slides e certificado de participação',
  'Você não está disposto a se dedicar a 2 dias intensos de imersão prática',
]

export default function ParaQuem() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="para-quem" className="para-quem section-light section-pad" ref={ref}>
      <div className="container">
        <div className="para-quem__header fade-up">
          <p className="section-label">Público</p>
          <h2 className="section-h2">Esta imersão é para você se…</h2>
        </div>

        <div className="para-quem__grid">
          {/* Yes column */}
          <div className="para-quem__col fade-up delay-1">
            <ul className="para-quem__list para-quem__list--yes">
              {forYes.map((item, i) => (
                <li key={i} className="para-quem__item">
                  <span className="para-quem__check" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="8.25" fill="var(--c-gold)" fillOpacity="0.15" stroke="var(--c-gold)" strokeWidth="1.5"/>
                      <path d="M5 9l3 3 5-5" stroke="var(--c-gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* No column */}
          <div className="para-quem__col para-quem__col--no fade-up delay-2">
            <h3 className="para-quem__no-title">E <em>não</em> é para você se…</h3>
            <ul className="para-quem__list para-quem__list--no">
              {forNo.map((item, i) => (
                <li key={i} className="para-quem__item">
                  <span className="para-quem__x" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="8.25" fill="rgba(0,0,0,0.04)" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5"/>
                      <path d="M6 6l6 6M12 6l-6 6" stroke="#999" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="para-quem__cta fade-up delay-3">
          <a
            href="https://wa.me/5571999295613"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gold btn--lg"
          >
            Quero me Inscrever
          </a>
        </div>
      </div>
    </section>
  )
}
