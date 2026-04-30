import { useEffect, useRef } from 'react'
import './Problema.css'

const painPoints = [
  'Trava na hora de executar bloqueios no quadril, joelho ou tornozelo',
  'Não tem certeza da anatomia sonográfica na prática clínica',
  'Quer expandir seus atendimentos para dor crônica e intervencionismo, mas sente que falta treino supervisionado',
  'Já fez cursos e ainda não se sente confiante para executar os procedimentos com segurança',
]

export default function Problema() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="problema" className="problema section-dark section-pad" ref={ref}>
      <div className="container container--narrow">
        <p className="section-label fade-up">O Problema</p>
        <h2 className="section-h2 problema__h2 fade-up delay-1">
          Você já perdeu pacientes para outros especialistas por não dominar
          bloqueios guiados por imagem?
        </h2>
        <div className="gold-rule fade-up delay-2" />

        <div className="problema__body fade-up delay-2">
          <p>
            A medicina intervencionista da dor cresceu. E médicos que não dominam
            as técnicas de bloqueio e radiofrequência estão ficando para trás —
            perdendo casos, credibilidade e receita para colegas mais capacitados.
          </p>
          <p>
            A verdade é que a maioria dos cursos oferece muito teoria e pouco treino
            real. Você assiste a vídeos, lê artigos, mas na hora de pegar o transdutor
            e conduzir um procedimento no paciente… a insegurança aparece.
          </p>
          <p className="problema__lead">Se você sente que:</p>
        </div>

        <ul className="problema__list fade-up delay-3">
          {painPoints.map((point, i) => (
            <li key={i} className="problema__item">
              <span className="problema__x" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <line x1="2" y1="2" x2="14" y2="14" stroke="#C0392B" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="14" y1="2" x2="2" y2="14" stroke="#C0392B" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              {point}
            </li>
          ))}
        </ul>

        <p className="problema__conclusion fade-up delay-4">
          …então a <strong>Imersão Bloqueios da Dor</strong> foi criada para você.
        </p>
      </div>
    </section>
  )
}
