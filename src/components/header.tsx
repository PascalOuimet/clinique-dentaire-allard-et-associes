import React from "react"

import Logo from "../images/svg/logo.svg"

const navLinks = [
  { displayText: "Services", link: "servicesTitle" },
  { displayText: "Contact", link: "contactTitle" },
]

const Header = () => {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) {
      return undefined
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    document.body.classList.add("hasDrawer")
    window.addEventListener("keydown", closeOnEscape)

    return () => {
      document.body.classList.remove("hasDrawer")
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [open])

  const smoothScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const navigateTo = (id: string) => {
    setOpen(false)
    setTimeout(() => smoothScroll(id), 80)
  }

  return (
    <React.Fragment>
      <header className="siteHeader">
        <div className="siteHeader__toolbar">
          <button
            type="button"
            className="siteHeader__brand"
            onClick={() => smoothScroll("top")}
          >
            <Logo className="siteHeader__logo" aria-hidden="true" />
            <span className="siteHeader__title">
              Clinique Dentaire Allard et Associés
            </span>
          </button>

          <nav className="siteHeader__nav" aria-label="Navigation principale">
            {navLinks.map(item => (
              <button
                className="siteHeader__navButton"
                key={item.displayText}
                type="button"
                onClick={() => smoothScroll(item.link)}
              >
                {item.displayText}
              </button>
            ))}
            <button
              className="buttonLike buttonLike--primary siteHeader__cta"
              type="button"
              onClick={() => smoothScroll("contactTitle")}
            >
              Prendre rendez-vous
            </button>
          </nav>

          <button
            className="siteHeader__menuButton"
            type="button"
            aria-label="Ouvrir la navigation"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        className={`mobileDrawerOverlay${open ? " isOpen" : ""}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        <aside
          className="mobileDrawer"
          aria-label="Navigation mobile"
          onClick={event => event.stopPropagation()}
        >
          <div className="mobileDrawer__brand">
            <Logo className="siteHeader__logo" aria-hidden="true" />
            <span>Clinique Dentaire Allard et Associés</span>
          </div>
          <nav className="mobileDrawer__nav">
            {navLinks.map(item => (
              <button
                className="mobileDrawer__item"
                key={item.displayText}
                type="button"
                onClick={() => navigateTo(item.link)}
              >
                {item.displayText}
              </button>
            ))}
          </nav>
          <button
            className="buttonLike buttonLike--primary mobileDrawer__cta"
            type="button"
            onClick={() => navigateTo("contactTitle")}
          >
            Prendre rendez-vous
          </button>
        </aside>
      </div>
    </React.Fragment>
  )
}

export default Header
