import React from "react"
import Image from "./image"
import { useMapsUrl } from "../utils/maps"

const Hero = () => {
  const mapsUrl = useMapsUrl()

  const smoothScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="heroSection" id="top">
      <div>
        <p className="heroKicker">
          Centre dentaire familial et multidisciplinaire
        </p>
        <h1 className="heroTitle">Clinique Dentaire Allard et Associés</h1>
        <p className="heroLead">
          La clinique dentaire Allard et Associés est un centre dentaire
          familial et multidisciplinaire. Elle vous offre une gamme de soins
          dentaires adaptés et personnalisés aux besoins de toute votre famille.
          Notre équipe met tout en œuvre pour vous accueillir de manière
          courtoise et chaleureuse, assurer votre confort et votre bien-être et
          vous prodiguer des soins de qualité.
        </p>
        <div className="heroActions">
          <button
            className="buttonLike buttonLike--primary"
            type="button"
            onClick={() => smoothScroll("contactTitle")}
          >
            Prendre rendez-vous
          </button>
          <a
            className="buttonLike buttonLike--outline heroPhone"
            href="tel:4503717571"
          >
            450 371-7571
          </a>
        </div>
      </div>
      <div className="heroVisual">
        <Image
          alt="Salle de soins de la Clinique Dentaire Allard et Associés"
          className="heroImage"
          filename="hero-clinique-allard.jpg"
          loading="eager"
          objectFit="cover"
          objectPosition="center center"
          variant="hero"
        />
        <a
          className="heroBadge heroBadgeLink"
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Salaberry-de-Valleyfield</span>
          <strong>85 Notre-Dame suite 1, J6S1E7</strong>
        </a>
      </div>
    </section>
  )
}

export default Hero
