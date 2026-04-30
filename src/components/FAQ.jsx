import { useState, useEffect, useRef } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'Preciso ter experiência prévia com ultrassom?',
    a: 'Não é obrigatório. O curso começa pelos fundamentos de anatomia sonográfica e avança para a prática supervisionada. Médicos de todos os níveis são bem-vindos.',
  },
  {
    q: 'O curso tem certificado?',
    a: 'Sim. Todos os participantes recebem certificado de conclusão da Imersão Bloqueios da Dor.',
  },
  {
    q: 'Quantas vagas ainda estão disponíveis?',
    a: 'A turma tem no máximo 20 participantes. As vagas são preenchidas por ordem de inscrição e pagamento. Entre em contato pelo WhatsApp para verificar a disponibilidade atual.',
  },
  {
    q: 'Posso parcelar minha inscrição?',
    a: 'Sim. O investimento pode ser parcelado em até 10x sem juros, dependendo do lote de inscrição.',
  },
  {
    q: 'O curso cobre apenas membros inferiores?',
    a: 'Sim. Esta edição foca em bloqueios e infiltrações no quadril, joelho, tornozelo e pé — com profundidade técnica e prática real nessas regiões.',
  },
  {
    q: 'Onde posso tirar mais dúvidas?',
    a: 'Fale diretamente com a equipe pelo WhatsApp: (71) 9 9929-5613. Respondemos de segunda a sexta, das 9h às 18h.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  const answerRef = useRef(null)

  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button
        className="faq-item__question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{faq.q}</span>
        <span className="faq-item__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <line x1="10" y1="4" x2="10" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
              style={{ transform: isOpen ? 'scaleY(0)' : 'scaleY(1)', transformOrigin: 'center', transition: 'transform 0.25s ease' }}
            />
            <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <div
        className="faq-item__answer"
        ref={answerRef}
        style={{ maxHeight: isOpen ? answerRef.current?.scrollHeight + 'px' : '0' }}
      >
        <p>{faq.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
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
    <section id="faq" className="faq section-dark section-pad" ref={ref}>
      <div className="container container--narrow">
        <div className="faq__header fade-up">
          <p className="section-label">Dúvidas</p>
          <h2 className="section-h2" style={{ color: 'var(--c-white)' }}>
            Perguntas Frequentes
          </h2>
        </div>

        <div className="faq__list fade-up delay-1">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="faq__footer fade-up delay-2">
          <p>Não encontrou sua resposta?</p>
          <a
            href="https://wa.me/5571999295613"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline-gold"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
