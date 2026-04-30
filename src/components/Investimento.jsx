import { useEffect, useRef } from 'react'
import { Lightbulb } from 'lucide-react'
import './Investimento.css'

// end date is inclusive (23:59:59 of that day)
const tiers = [
  {
    period: 'Lote 1 — Até 20/06/2026',
    price: 'R$ 7.500',
    installment: '10x de R$ 750 sem juros',
    cta: 'Garantir no Menor Preço',
    end: new Date('2026-06-20T23:59:59'),
  },
  {
    period: 'Lote 2 — 21/06 a 01/07/2026',
    price: 'R$ 9.800',
    installment: '10x de R$ 980 sem juros',
    cta: 'Quero Participar',
    end: new Date('2026-07-01T23:59:59'),
  },
  {
    period: 'Lote 3 — 02/07 a 03/07/2026',
    price: 'R$ 11.800',
    installment: '10x de R$ 1.180 sem juros',
    cta: 'Inscrever no Lote 3',
    end: new Date('2026-07-03T23:59:59'),
  },
]

function getActiveTierIndex() {
  const now = new Date()
  const idx = tiers.findIndex(t => now <= t.end)
  // if past all dates, highlight the last tier
  return idx === -1 ? tiers.length - 1 : idx
}

export default function Investimento() {
  const ref = useRef(null)
  const activeIndex = getActiveTierIndex()

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
    <section id="investimento" className="investimento section-light section-pad" ref={ref}>
      <div className="container">
        <div className="investimento__header fade-up">
          <p className="section-label">Investimento</p>
          <h2 className="section-h2">Garanta sua vaga agora e pague menos</h2>
          <p className="investimento__sub">
            O investimento aumenta conforme a data se aproxima. Quanto antes você garantir,
            menor o valor.
          </p>
        </div>

        <div className="investimento__grid fade-up delay-1">
          {tiers.map((tier, i) => {
            const isActive = i === activeIndex
            return (
              <div
                key={i}
                className={`pricing-card ${isActive ? 'pricing-card--featured' : ''}`}
              >
                {isActive && (
                  <span className="pricing-card__badge">Preço atual</span>
                )}
                <p className="pricing-card__period">{tier.period}</p>
                <p className="pricing-card__price">{tier.price}</p>
                <p className="pricing-card__installment">{tier.installment}</p>
                {isActive ? (
                  <a
                    href="https://wa.me/5571999295613"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--gold btn--full"
                  >
                    {tier.cta}
                  </a>
                ) : (
                  <span className="btn btn--full pricing-card__btn--disabled" aria-disabled="true">
                    Indisponível
                  </span>
                )}
              </div>
            )
          })}
        </div>

        <div className="investimento__anchor fade-up delay-2">
          <div className="investimento__anchor-icon" aria-hidden="true">
            <Lightbulb size={22} strokeWidth={1.75} />
          </div>
          <p>
            Uma pós-graduação em dor custa <strong>R$15.000 a R$30.000</strong> e não garante
            a prática que você terá neste final de semana. Aqui, em 2 dias, você sai executando.
          </p>
        </div>

        <p className="investimento__contact fade-up delay-3">
          Dúvidas sobre pagamento?{' '}
          <a
            href="https://wa.me/5571999295613"
            target="_blank"
            rel="noopener noreferrer"
            className="investimento__wa-link"
          >
            Fale no WhatsApp: (71) 9 9929-5613
          </a>
        </p>
      </div>
    </section>
  )
}
