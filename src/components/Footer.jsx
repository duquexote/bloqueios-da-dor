import './Footer.css'

const navLinks = [
  { label: 'Sobre', href: '#solucao' },
  { label: 'Programa', href: '#programa' },
  { label: 'Docentes', href: '#docentes' },
  { label: 'Investimento', href: '#investimento' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top-rule" aria-hidden="true" />
      <div className="container footer__grid">

        {/* Brand */}
        <div className="footer__brand">
          <a href="#hero">
            <img src="/logo-branca.svg" alt="Bloqueios da Dor" className="footer__logo-img" />
          </a>
          <p className="footer__tagline">Imersão Presencial · Salvador, BA</p>
          <p className="footer__tagline">03 e 04 de julho de 2026</p>
        </div>

        {/* Quick links */}
        <div className="footer__links-col">
          <p className="footer__col-title">Links</p>
          <ul className="footer__links">
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="footer__link">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__contact-col">
          <p className="footer__col-title">Contato</p>
          <a
            href="https://wa.me/5571999295613"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__wa"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
            </svg>
            (71) 9 9929-5613
          </a>
          <p className="footer__address">
            Salvador Trade Center<br />
            Av. Tancredo Neves, 1632<br />
            Salvador – BA
          </p>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © 2026 Imersão Bloqueios da Dor · Realização: Conceito QI Franquia Ltda · CNPJ: 32.279.248/0001-20
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Política de Privacidade</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="footer__legal-link">Termos &amp; Condições</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="footer__legal-link">Política de Reembolso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
