import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'Sobre', href: '#solucao' },
  { label: 'Programa', href: '#programa' },
  { label: 'Docentes', href: '#docentes' },
  { label: 'Investimento', href: '#investimento' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          <a href="#hero" className="navbar__logo" onClick={handleLinkClick}>
            <img src="/logo-branca.svg" alt="Bloqueios da Dor" className="navbar__logo-img navbar__logo-img--white" />
            <img src="/logo.svg"        alt="Bloqueios da Dor" className="navbar__logo-img navbar__logo-img--color" />
          </a>

          <ul className="navbar__links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="navbar__link">{l.label}</a>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/5571999295613?text=Vi%20o%20v%C3%ADdeo%20de%20Dr%20Walter%20e%20quero%20informa%C3%A7%C3%B5es%20sobre%20a%20imers%C3%A3o%20Bloqueios%20da%20Dor"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gold navbar__cta"
          >
            Garantir Vaga
          </a>

          <button
            className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <a href="#hero" className="mobile-menu__logo" onClick={handleLinkClick}>
          <img src="/logo.svg" alt="Bloqueios da Dor" />
        </a>
        <ul className="mobile-menu__links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="mobile-menu__link" onClick={handleLinkClick}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/5571999295613?text=Vi%20o%20v%C3%ADdeo%20de%20Dr%20Walter%20e%20quero%20informa%C3%A7%C3%B5es%20sobre%20a%20imers%C3%A3o%20Bloqueios%20da%20Dor"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--gold btn--lg"
          onClick={handleLinkClick}
        >
          Garantir Vaga
        </a>
      </div>
    </>
  )
}
