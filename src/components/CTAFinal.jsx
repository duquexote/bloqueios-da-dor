import { useEffect, useRef } from 'react'
import { AlertTriangle, Timer, ArrowRight } from 'lucide-react'
import './CTAFinal.css'

export default function CTAFinal() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="inscricao" className="cta-final section-dark section-pad" ref={ref}>
      <div className="cta-final__glow" aria-hidden="true" />
      <div className="container container--narrow cta-final__content">

        <p className="cta-final__urgency fade-up">
          <AlertTriangle size={14} strokeWidth={2} />
          Apenas 20 vagas disponíveis — Turmas anteriores esgotadas
        </p>

        <h2 className="cta-final__h2 fade-up delay-1">
          Sua próxima virada clínica começa em Salvador
        </h2>

        <p className="cta-final__sub fade-up delay-2">
          20 vagas. 6 especialistas. 2 dias de prática real.
          Não existe atalho mais direto do que esse para dominar bloqueios em membros inferiores.
        </p>

        <a
          href="https://wa.me/5571999295613"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--gold btn--lg cta-final__btn fade-up delay-3"
        >
          Quero Garantir Minha Vaga Agora
          <ArrowRight size={18} />
        </a>

        <p className="cta-final__note fade-up delay-4">
          <Timer size={13} strokeWidth={2} className="cta-final__note-icon" />
          Inscrições com valor especial encerram em{' '}
          <strong>20 de junho de 2026</strong>. Após essa data, o investimento
          sobe para R$9.800.
          <br />
          Dúvidas?{' '}
          <a href="https://wa.me/5571999295613" target="_blank" rel="noopener noreferrer">
            WhatsApp: (71) 9 9929-5613
          </a>
        </p>

      </div>
    </section>
  )
}
