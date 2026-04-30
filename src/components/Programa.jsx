import { useState, useEffect, useRef } from 'react'
import { Calendar, MapPin, Clock, Check } from 'lucide-react'
import './Programa.css'

const day1 = [
  { time: '14h00', title: 'Chegada e Integração', desc: 'Recepção, alinhamento com os docentes e imersão no ambiente do curso.' },
  { time: '14h30', title: 'Fundamentos: Anatomia Sonográfica e Técnica de Agulhamento', desc: 'Anatomia estrutural dos membros inferiores aplicada ao intervencionismo, princípios de US e radiofrequência.' },
  { time: '15h30', title: 'Quadril: da Anatomia ao Procedimento', desc: 'Bloqueios, denervação por RF, proloterapia de bursas, infiltrações intra-articulares. Demonstração em paciente modelo.' },
  { time: '16h15', title: 'Intervalo e Networking', desc: '' },
  { time: '16h45', title: 'Joelho: o Procedimento Mais Requisitado', desc: 'Denervação por RF, proloterapia, infiltrações de tendões patelares e IT-band, infiltração intra-articular.' },
  { time: '17h30', title: 'Tornozelo e Pé: Precisão Onde a Anatomia Exige Mais', desc: 'Bloqueios e RF, infiltrações de tendões (plantar, aquileu, peroneais), demonstração ao vivo.' },
  { time: '18h15', title: 'Intervalo', desc: '' },
  { time: '18h45', title: 'Estações de Prática Supervisionada (Modelos)', desc: 'Grupos de até 5 alunos rotacionam por 4 estações simultâneas com docente dedicado e equipamento de US.' },
  { time: '21h00', title: 'Encerramento do Dia 1', desc: '' },
]

const day2 = [
  { time: '08h00', title: 'Prática Clínica — Quadril (manhã)', desc: 'Grupos de até 5 alunos. Cada participante opera em paciente real com supervisão individual do docente. US projetado em telão.' },
  { time: '10h00', title: 'Prática Clínica — Joelho (manhã)', desc: 'Mesma dinâmica: 1 paciente por vez, acompanhamento individualizado, docente ao lado.' },
  { time: '12h00', title: 'Almoço', desc: 'Pausa para consolidar o aprendizado da manhã.' },
  { time: '14h00', title: 'Prática Clínica Avançada — Quadril (tarde)', desc: 'Bloqueios com mais autonomia, aprofundamento de técnica e consolidação do protocolo clínico pessoal.' },
  { time: '16h00', title: 'Prática Clínica Avançada — Joelho e Tornozelo (tarde)', desc: 'Último bloco de maior exigência técnica. Docentes presentes para ajustes em tempo real.' },
  { time: '19h00', title: 'Cerimônia de Encerramento e Certificados', desc: '' },
]

const equipment = [
  '4 aparelhos de ultrassom (Sonosite, Mindray, GE)',
  'Aparelho de Radiofrequência com agulhas específicas',
  'Material Coolief (empresa parceira)',
  'Lidocaína 1%, Dexametasona, Betametasona, Glicose 50%, Motix, Zeel, Traumeel',
  'Material descartável completo (luvas estéreis, agulhas, seringas, gel US, clorexidina)',
  'Projeção em telão do ultrassom principal para aprendizado coletivo',
]

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <div key={i} className={`timeline__item ${!item.desc ? 'timeline__item--break' : ''}`}>
          <span className="timeline__time">{item.time}</span>
          <div className="timeline__dot" aria-hidden="true" />
          <div className="timeline__content">
            <p className="timeline__title">{item.title}</p>
            {item.desc && <p className="timeline__desc">{item.desc}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Programa() {
  const [activeDay, setActiveDay] = useState('day1')
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="programa" className="programa section-light section-pad" ref={ref}>
      <div className="container">

        <div className="programa__header fade-up">
          <p className="section-label">Programação</p>
          <h2 className="section-h2">
            Cada hora foi planejada para você sair executando — não apenas sabendo
          </h2>
          <p className="programa__sub">
            Desde o primeiro bloco, você já tem as mãos no equipamento.
          </p>
        </div>

        {/* Event info strip */}
        <div className="programa__info fade-up delay-1">
          <span><Calendar size={14} strokeWidth={1.8} /> 03 e 04 de julho de 2026</span>
          <span><MapPin size={14} strokeWidth={1.8} /> Salvador Trade Center — Salvador, BA</span>
          <span><Clock size={14} strokeWidth={1.8} /> Sexta: 14h–21h &nbsp;|&nbsp; Sábado: 08h–19h</span>
        </div>

        {/* Day tabs */}
        <div className="programa__tabs fade-up delay-2">
          <button
            className={`tab-btn ${activeDay === 'day1' ? 'tab-btn--active' : ''}`}
            onClick={() => setActiveDay('day1')}
          >
            Dia 1 — Sexta, 03/07
          </button>
          <button
            className={`tab-btn ${activeDay === 'day2' ? 'tab-btn--active' : ''}`}
            onClick={() => setActiveDay('day2')}
          >
            Dia 2 — Sábado, 04/07
          </button>
        </div>

        <div className="programa__timeline-wrap fade-up delay-3">
          {activeDay === 'day1' ? (
            <>
              <p className="programa__day-label">14h às 21h — Fundamentos + Prática em Modelos</p>
              <Timeline items={day1} />
            </>
          ) : (
            <>
              <p className="programa__day-label">08h às 19h — Prática Clínica com Pacientes Reais</p>
              <Timeline items={day2} />
            </>
          )}
        </div>

        {/* Equipment card */}
        <div className="programa__equipment fade-up delay-2">
          <h3 className="programa__equipment-title">Infraestrutura Técnica Disponível</h3>
          <ul className="programa__equipment-list">
            {equipment.map((item, i) => (
              <li key={i}>
                <span className="programa__check" aria-hidden="true">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
