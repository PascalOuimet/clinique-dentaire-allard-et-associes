import React from "react"
import { useMapsUrl } from "../utils/maps"

const contactEmail = "info@dentisteallard.com"

const Footer = () => {
  const mapsUrl = useMapsUrl()
  const [isPrivacyOpen, setIsPrivacyOpen] = React.useState(false)

  React.useEffect(() => {
    if (!isPrivacyOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPrivacyOpen(false)
      }
    }

    document.body.classList.add("hasDrawer")
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.classList.remove("hasDrawer")
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isPrivacyOpen])

  return (
    <React.Fragment>
      <footer className="footer" aria-labelledby="contactTitle">
        <div className="footerInner">
          <section>
            <h2 className="footerTitle" id="contactTitle">
              Contact
            </h2>
            <p className="footerText">
              <a
                className="footerAddress"
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                85 Notre-Dame suite 1, Salaberry-de-Valleyfield, J6S1E7
              </a>
            </p>
            <div className="footerLinks">
              <a className="footerLink" href="tel:4503717571">
                T&eacute;l&eacute;phone 450 371-7571
              </a>
              <a className="footerLink" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
              <span className="footerLink">Fax 450 371-8122</span>
            </div>
          </section>

          <section>
            <h2 className="footerTitle footerSubtitle">
              Heures d&apos;ouverture
            </h2>
            <ul className="openHours">
              <li>
                <span>Lundi</span>
                <strong>7h30 &agrave; 17h00</strong>
              </li>
              <li>
                <span>Mardi</span>
                <strong>7h30 &agrave; 17h00</strong>
              </li>
              <li>
                <span>Mercredi</span>
                <strong>7h30 &agrave; 17h00</strong>
              </li>
              <li>
                <span>Jeudi</span>
                <strong>7h30 &agrave; 15h00</strong>
              </li>
              <li>
                <span>Vendredi</span>
                <strong>7h30 &agrave; 14h00</strong>
              </li>
            </ul>
          </section>
        </div>
      </footer>
      <div className="attribution">
        <div className="attributionInner">
          <p>
            Ordre des dentistes du Qu&eacute;bec{" "}
            <a
              href="https://www.odq.qc.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ODQ
            </a>
          </p>
          <p>
            Ordre des hygi&eacute;nistes dentaires du Qu&eacute;bec{" "}
            <a
              href="https://ohdq.com/public/lordre/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OHDQ
            </a>
          </p>
          <p>
            <button
              type="button"
              className="attributionLinkButton"
              onClick={() => setIsPrivacyOpen(true)}
            >
              Politique de confidentialit&eacute;
            </button>
          </p>
        </div>
      </div>
      {isPrivacyOpen ? (
        <div
          className="modalOverlay"
          role="presentation"
          onClick={() => setIsPrivacyOpen(false)}
        >
          <div
            className="modalCard"
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacyPolicyTitle"
            onClick={event => event.stopPropagation()}
          >
            <div className="modalHeader">
              <h2 className="modalTitle" id="privacyPolicyTitle">
                Politique de confidentialit&eacute;
              </h2>
              <button
                type="button"
                className="modalCloseButton"
                aria-label="Fermer la politique de confidentialit&eacute;"
                onClick={() => setIsPrivacyOpen(false)}
              >
                &times;
              </button>
            </div>
            <div className="modalBody">
              <p>
                Nous recueillons votre adresse courriel et le contenu de votre
                message lorsque vous nous contactez par courriel afin de
                r&eacute;pondre &agrave; votre demande ou fixer un rendez-vous.
              </p>
              <p>
                Ces renseignements sont utilis&eacute;s uniquement &agrave; cette
                fin et ne sont pas communiqu&eacute;s &agrave; des tiers, sauf si
                n&eacute;cessaire au traitement de votre demande.
              </p>
              <p>
                Ils sont conserv&eacute;s pour la dur&eacute;e n&eacute;cessaire au
                suivi.
              </p>
              <p>
                Vous pouvez demander l&apos;acc&egrave;s, la correction ou la
                suppression de vos renseignements en contactant notre
                responsable de la protection des renseignements personnels
                &agrave; <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  )
}

export default Footer
