import React from "react"
import Bar from "./bar"
import BulletImage from "./bulletImage"

const services = [
  {
    image: "prevent.png",
    title: "Prévention :",
    alt: "Prévention",
    items: [
      "Examen complet de la bouche (gencives, langue, tissus mous) et des dents",
      "Radiographies intraorales et panoramiques",
      "Détartrage et polissage ",
      "Dépistage de problèmes orthodontiques",
      "Scellants",
      "Protecteur buccal",
      "Application de fluor",
    ],
  },
  {
    image: "restore.png",
    title: "Restauration",
    alt: "Restauration",
    items: [
      "Obturations en composite (blanc) ou en amalgame (gris)",
      "Traitements de canal",
      "Couronnes",
    ],
  },
  {
    image: "aesthetic.png",
    title: "Esthétique",
    alt: "Esthétique",
    items: ["Facettes ", "Blanchiment ", "Invisalign"],
  },
  {
    image: "functional.png",
    title: "Fonctionnel",
    alt: "Fonctionnel",
    items: [
      "Remplacement de dents manquantes fixe ou amovible",
      "Appareil d’expansion palatine",
      "Implants",
    ],
  },
  {
    image: "chirurgical.png",
    title: "Chirurgical",
    alt: "Chirurgical",
    items: ["Frénectomie", "Extractions", "Chirurgies mineures"],
  },
  {
    image: "periodontics.png",
    title: "Parodontie",
    alt: "Parodontie",
    items: ["Surfaçage", "Curetage gingival", "Greffes de gencives"],
  },
  {
    image: "emergency.png",
    title: "Urgence",
    alt: "Urgence",
    items: [
      "Examen et radiographies d’urgence",
      "Soulagement de douleurs",
      "Restaurations de dents cassées ou obturations tombées",
    ],
  },
]

const Services = () => (
  <section className="section servicesSection" aria-labelledby="servicesTitle">
    <div className="sectionHeader">
      <h2 id="servicesTitle">Services</h2>
      <Bar />
      <p className="sectionIntro">
        Nous offrons des soins dentaires de plusieurs catégories.
      </p>
    </div>

    <div className="serviceGrid">
      {services.map(service => (
        <article className="serviceCard" key={service.title}>
          <div className="serviceIcon">
            <BulletImage alt={service.alt} filename={service.image} />
          </div>
          <div>
            <h3 className="serviceTitle">{service.title}</h3>
            <ul>
              {service.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default Services
