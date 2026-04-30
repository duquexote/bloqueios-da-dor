import { useEffect, useRef } from 'react'
import { Zap, Calendar, Building2, Stethoscope, Target, ArrowRight, ChevronDown } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.fade-up')
    if (!els) return
    const timer = setTimeout(() => {
      els.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 120)
      })
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className="hero section-light" ref={ref}>
      <div className="hero__grain" aria-hidden="true" />
      <div className="container hero__grid">

        {/* ── Left column ── */}
        <div className="hero__content">
          <p className="hero__eyebrow fade-up">
            Curso Presencial Intensivo&nbsp;&nbsp;·&nbsp;&nbsp;Salvador, BA
          </p>

          <h1 className="hero__h1 fade-up delay-1">
            Domine Bloqueios e Radiofrequência em{' '}
            <span className="hero__h1--accent">Membros Inferiores</span> em 2 Dias
            de Imersão Prática
          </h1>

          <p className="hero__sub fade-up delay-2">
            A única imersão presencial do Brasil onde você pratica bloqueios guiados
            por ultrassom em quadril, joelho e tornozelo — ao lado de 5 especialistas
            de referência nacional.
          </p>

          <div className="hero__badges fade-up delay-3">
            <span className="hero__badge">
              <Zap size={12} /> Apenas 20 vagas
            </span>
            <span className="hero__badge hero__badge--outline">
              <Calendar size={12} /> 03 e 04 de julho de 2026
            </span>
          </div>

          <div className="hero__actions fade-up delay-4">
            <a
              href="https://wa.me/5571999295613"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold btn--lg"
            >
              Garantir Minha Vaga
              <ArrowRight size={16} />
            </a>
            <a href="#programa" className="hero__link">
              Ver programa completo
              <ChevronDown size={14} />
            </a>
          </div>

          <div className="hero__stats fade-up delay-5">
            <div className="hero__stat">
              <span className="hero__stat-value">20</span>
              <span className="hero__stat-label">vagas totais</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-value">2</span>
              <span className="hero__stat-label">dias de imersão</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-value">6</span>
              <span className="hero__stat-label">especialistas</span>
            </div>
          </div>
        </div>

        {/* ── Right column — logo visual ── */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__circle-outer">
            <img
              src="/icon-logo.svg"
              alt="Bloqueios da Dor"
              className="hero__logo-icon"
            />
          </div>

          <div className="hero__floating-card hero__floating-card--1">
            <span className="hfc__icon"><Building2 size={20} strokeWidth={1.5} /></span>
            <div>
              <p className="hfc__value">Salvador Trade</p>
              <p className="hfc__label">Center · Bahia</p>
            </div>
          </div>

          <div className="hero__floating-card hero__floating-card--2">
            <span className="hfc__icon"><Stethoscope size={20} strokeWidth={1.5} /></span>
            <div>
              <p className="hfc__value">6 Docentes</p>
              <p className="hfc__label">referência nacional</p>
            </div>
          </div>

          <div className="hero__floating-card hero__floating-card--3">
            <span className="hfc__icon"><Target size={20} strokeWidth={1.5} /></span>
            <div>
              <p className="hfc__value">100% Prático</p>
              <p className="hfc__label">pacientes reais</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}
