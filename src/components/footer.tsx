import React from "react"
import { useMapsUrl } from "../utils/maps"

const Footer = () => {
  const mapsUrl = useMapsUrl()

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
                Téléphone 450 371-7571
              </a>
              <a className="footerLink" href="mailto:info@dentisteallard.com">
                info@dentisteallard.com
              </a>
              <span className="footerLink">Fax 450 371-8122</span>
            </div>
          </section>

          <section>
            <h2 className="footerTitle footerSubtitle">Heures d'ouverture</h2>
            <ul className="openHours">
              <li>
                <span>Lundi</span>
                <strong>7h30 à 17h00</strong>
              </li>
              <li>
                <span>Mardi</span>
                <strong>7h30 à 17h00</strong>
              </li>
              <li>
                <span>Mercredi</span>
                <strong>7h30 à 17h00</strong>
              </li>
              <li>
                <span>Jeudi</span>
                <strong>7h30 à 15h00</strong>
              </li>
              <li>
                <span>Vendredi</span>
                <strong>7h30 à 14h00</strong>
              </li>
            </ul>
          </section>
        </div>
      </footer>
      <div className="attribution">
        <div className="attributionInner">
          <p>
            Ordre des dentistes du Québec{" "}
            <a
              href="https://www.odq.qc.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ODQ
            </a>
          </p>
          <p>
            Ordre des hygiénistes dentaires du Québec{" "}
            <a
              href="https://ohdq.com/public/lordre/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OHDQ
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer
