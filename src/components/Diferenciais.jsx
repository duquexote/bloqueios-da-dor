import { useEffect, useRef } from 'react'
import './Diferenciais.css'

const cards = [
  {
    num: '01',
    title: 'Vagas Limitadas — 20 Participantes',
    desc: 'Não somos um congresso com 300 pessoas. Somos uma imersão de elite com no máximo 20 médicos por turma. Isso garante que você realmente pratique — e não apenas assista outros praticando.',
  },
  {
    num: '02',
    title: 'Prática Real com Pacientes e Supervisão Individual',
    desc: 'Nos dois dias, você opera com as próprias mãos. Guiado por ultrassom, você executa bloqueios em quadril, joelho, tornozelo e pé em modelos e em pacientes reais — sempre com um especialista ao seu lado.',
  },
  {
    num: '03',
    title: 'Corpo Docente de 6 Referências Nacionais',
    desc: 'São 6 especialistas altamente certificados — anestesiologistas, ortopedistas, neurocirurgiões — com títulos nacionais e internacionais em medicina da dor.',
  },
  {
    num: '04',
    title: 'Infraestrutura Premium no Coração de Salvador',
    desc: 'O evento acontece no auditório do Salvador Trade Center, um dos mais modernos centros de eventos da Bahia. Estrutura de ponta para um aprendizado de alto nível.',
  },
]

export default function Diferenciais() {
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
    <section id="diferenciais" className="diferenciais section-dark-soft section-pad" ref={ref}>
      <div className="container">
        <div className="diferenciais__header fade-up">
          <p className="section-label">Por que é diferente</p>
          <h2 className="section-h2" style={{ color: 'var(--c-white)' }}>
            Por que a Imersão Bloqueios da Dor é diferente de tudo que você já viu?
          </h2>
        </div>

        <div className="diferenciais__grid">
          {cards.map((c, i) => (
            <div key={c.num} className={`diferencial-card fade-up delay-${i + 1}`}>
              <span className="diferencial-card__num">{c.num}</span>
              <h3 className="diferencial-card__title">{c.title}</h3>
              <p className="diferencial-card__desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
