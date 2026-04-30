import { useEffect, useRef } from 'react'
import { MapPin, Star, Car, Users } from 'lucide-react'
import './Local.css'

const highlights = [
  { Icon: MapPin, label: 'Localização central', desc: 'Av. Tancredo Neves, 1632 — Caminho das Árvores, Salvador/BA' },
  { Icon: Star,   label: 'Infraestrutura 5 estrelas', desc: 'Auditório moderno com equipamento audiovisual de ponta' },
  { Icon: Car,    label: 'Acesso e estacionamento', desc: 'Fácil acesso, estacionamento no local e proximidade de hotéis' },
  { Icon: Users,  label: 'Área de networking', desc: 'Espaço exclusivo para interação com docentes e colegas' },
]

export default function Local() {
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
    <section id="local" className="local section-dark-soft section-pad" ref={ref}>
      <div className="container local__grid">

        <div className="local__text">
          <p className="section-label fade-up">Local do Evento</p>
          <h2 className="section-h2 fade-up delay-1" style={{ color: 'var(--c-white)' }}>
            Um evento à altura do seu nível profissional
          </h2>
          <div className="gold-rule fade-up delay-2" />
          <p className="local__intro fade-up delay-2">
            A Imersão Bloqueios da Dor acontece no auditório do{' '}
            <strong>Salvador Trade Center</strong> — o mais moderno centro de negócios
            e eventos da Bahia, localizado no coração de Salvador.
          </p>

          <ul className="local__highlights fade-up delay-3">
            {highlights.map(({ Icon, label, desc }, i) => (
              <li key={i} className="local__highlight-item">
                <span className="local__highlight-icon">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="local__highlight-label">{label}</p>
                  <p className="local__highlight-desc">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Google Maps embed */}
        <div className="local__map fade-up delay-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.815557074892!2d-38.456307224923314!3d-12.983645887332834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b10049d63ef%3A0x5db7abe00761d876!2sSalvador%20Trade%20Center!5e0!3m2!1spt-BR!2sbr!4v1777517495030!5m2!1spt-BR!2sbr"
            title="Salvador Trade Center — Google Maps"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  )
}
