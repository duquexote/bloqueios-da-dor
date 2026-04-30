import { useEffect, useRef } from 'react'
import './Docentes.css'

const doctors = [
  {
    initials: 'JL',
    name: 'Dr. José Luiz de Campos',
    crm: 'CRM 68663-SP',
    role: 'Coordenador',
    specialty: 'Médico Anestesiologista',
    credentials: [
      'Chefe do Depto. de Dor — Hospital Vera Cruz (Campinas/SP)',
      'Título FIPP — World Institute of Pain, Cleveland/EUA',
      'Certified Interventional Pain Sonologist — WIP, Miami/FL',
      'Coordenador da Pós-Graduação em Dor – Faculdade Cetrus',
    ],
    photo: '/jose_luiz.webp',
  },
  {
    initials: 'MS',
    name: 'Dr. May Silvio Silveira',
    crm: 'CRM 51873-RS',
    role: 'Coordenador',
    specialty: 'Ortopedia e Traumatologia',
    credentials: [
      'Membro SBOT e SBRET/SOBRAMID',
      'Pós-Graduação em Medicina Intervencionista em Dor',
      'Especialista em Medicina Regenerativa',
    ],
    photo: '/may_silvio.webp',
  },
  {
    initials: 'WV',
    name: 'Dr. Walter Viterbo da Silva',
    crm: 'CRM 11188-BA',
    role: null,
    specialty: 'Anestesiologia, Acupuntura e Medicina da Dor',
    credentials: [
      'Mestre, Doutor e Pós-Doutor',
      'Fundador da rede Clínicas Viterbo',
      '+30 anos de experiência clínica',
    ],
    photo: '/walter_viterbo.webp',
  },
  {
    initials: 'AM',
    name: 'Dr. Alexandre Mio Pos',
    crm: 'CRM 29907-MG',
    role: null,
    specialty: 'Anestesiologia',
    credentials: [
      'Anestesiologista pela UFMG',
      'Especialização em Dor — Hospital Sírio-Libanês',
      'Mestre em Dor Oncológica',
      'Coordenador da Pós-Graduação em Dor – FASEH',
    ],
    photo: '/alexandre_mio.webp',
  },
  {
    initials: 'YM',
    name: 'Dr. Yran Ferreira de Miranda',
    crm: 'CRM 21939-MG',
    role: null,
    specialty: 'Ortopedia e Medicina Regenerativa',
    credentials: [
      'Residência em Ortopedia no INTO-RJ',
      'Especialista em Medicina Intervencionista da Dor',
      'Membro Fundador — Assoc. Brasileira de US Musculoesquelética',
    ],
    photo: '/yran_ferreira.webp',
  },
  {
    initials: 'FA',
    name: 'Dr. Felipe Duarte Augusto',
    crm: 'CRM 61140-MG',
    role: null,
    specialty: 'Neurocirurgia e Dor',
    credentials: [
      'Especialista em Dor e Cuidados Paliativos (PUC-MG)',
      'Cirurgia Endoscópica da Coluna — Hospital Albert Einstein',
      'Título de Especialista em Dor pela AMB',
    ],
    photo: '/felipe_duarte.webp',
  },
]

function DoctorCard({ doctor, delay }) {
  return (
    <div className={`doctor-card fade-up delay-${delay}`}>
      {doctor.role && (
        <span className="doctor-card__role">{doctor.role}</span>
      )}

      {/* Photo placeholder — substitua pelo <img> quando tiver a foto */}
      <div className="doctor-card__photo-wrap">
        {doctor.photo ? (
          <img src={doctor.photo} alt={`Foto de ${doctor.name}`} className="doctor-card__photo" />
        ) : (
          <div className="doctor-card__placeholder" aria-label={`Foto de ${doctor.name} — a adicionar`}>
            <span className="doctor-card__initials">{doctor.initials}</span>
            <span className="doctor-card__placeholder-label">Foto em breve</span>
          </div>
        )}
      </div>

      <div className="doctor-card__info">
        <h3 className="doctor-card__name">{doctor.name}</h3>
        <p className="doctor-card__crm">{doctor.crm}</p>
        <p className="doctor-card__specialty">{doctor.specialty}</p>
        <ul className="doctor-card__creds">
          {doctor.credentials.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Docentes() {
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
    <section id="docentes" className="docentes section-dark section-pad" ref={ref}>
      <div className="container">
        <div className="docentes__header fade-up">
          <p className="section-label">Corpo Docente</p>
          <h2 className="section-h2" style={{ color: 'var(--c-white)' }}>
            Aprenda com quem faz. Todo dia.
          </h2>
          <p className="docentes__sub">
            6 dos maiores especialistas do Brasil em medicina intervencionista da dor —
            com credenciais nacionais e internacionais, experiência clínica real e décadas
            de prática cirúrgica e ambulatorial.
          </p>
        </div>

        <div className="docentes__grid">
          {doctors.map((doc, i) => (
            <DoctorCard key={doc.crm} doctor={doc} delay={Math.min(i + 1, 5)} />
          ))}
        </div>
      </div>
    </section>
  )
}
