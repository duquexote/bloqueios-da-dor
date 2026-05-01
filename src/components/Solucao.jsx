import { useEffect, useRef } from 'react'
import './Solucao.css'

export default function Solucao() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="solucao" className="solucao section-light section-pad" ref={ref}>
      <div className="container solucao__grid">

        <div className="solucao__text">
          <p className="section-label fade-up">A Solução</p>
          <h2 className="section-h2 fade-up delay-1">O que é a Imersão Bloqueios da Dor?</h2>
          <div className="gold-rule fade-up delay-2" />

          <div className="solucao__body fade-up delay-2">
            <p>
              É um curso presencial intensivo, com formato <strong>100% hands-on</strong>, onde você
              passa 2 dias dominando na prática as principais técnicas de bloqueio e radiofrequência
              em membros inferiores — com supervisão direta de 5 especialistas de renome nacional.
            </p>
            <p>
              Diferente de qualquer outro curso que você já fez, aqui você pratica nos dois dias:
              primeiro em modelos anatômicos guiados por ultrassom, e depois diretamente em
              <strong> pacientes reais</strong>, com supervisão individual do corpo docente.
            </p>
            <p>
              Com apenas <strong>20 vagas por turma</strong>, cada participante recebe atenção de
              verdade — sem aquela sensação de ser mais um na plateia.
            </p>
          </div>

          <a
            href="https://wa.me/5571999295613"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--black btn--lg fade-up delay-3"
          >
            Quero participar
          </a>
        </div>

        <div className="solucao__quote fade-up delay-2">
          <blockquote className="solucao__blockquote">
            "Aprenda com quem faz, em pacientes reais."
          </blockquote>
          <div className="solucao__quote-meta">
            <div className="solucao__quote-line" aria-hidden="true" />
            <span>Corpo docente com atuação clínica diária</span>
          </div>

          <div className="solucao__pillars">
            {[
              { num: '03', label: 'Regiões anatômicas' },
              { num: '2d', label: 'De imersão prática' },
              { num: '20', label: 'Vagas por turma' },
            ].map(p => (
              <div key={p.num} className="solucao__pillar">
                <span className="solucao__pillar-num">{p.num}</span>
                <span className="solucao__pillar-label">{p.label}</span>
              </div>
            ))}
          </div>
          <img
            src="/aplicacao_joelho.gif"
            alt="Aplicação de bloqueio guiado por ultrassom no joelho"
            className="solucao__gif"
          />

        </div>

      </div>
    </section>
  )
}
