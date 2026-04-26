import React from "react"
import TeamMember from "./team-member"
import Bar from "./bar"

const members = [
  {
    id: 1,
    image: "staff/bruno.jpg",
    title: "Dr Bruno Allard",
    description: "chirurgien-dentiste ",
  },
  {
    id: 2,
    image: "staff/marie_andree.jpg",
    title: "Dre Marie-Andrée Leduc",
    description: "chirurgienne-dentiste ",
  },
  {
    id: 3,
    image: "staff/france.jpg",
    title: "France Tourigny",
    description: "hygiéniste dentaire",
  },
  {
    id: 4,
    image: "staff/cynthia.jpg",
    title: "Cynthia Borris",
    description: "hygiéniste dentaire",
  },
  {
    id: 5,
    image: "staff/carolane.jpg",
    title: "Carolane Gagné",
    description: "hygiéniste dentaire",
  },
  {
    id: 6,
    image: "staff/marie_caza.jpg",
    title: "Marie Caza",
    description: "hygiéniste dentaire",
  },
  {
    id: 7,
    image: "tracking-icon.png",
    title: "Karolyne Pâquet",
    description: "assistante dentaire",
  },
  {
    id: 8,
    image: "staff/josee_anne.jpg",
    title: "Josée-Anne Leboeuf",
    description: "assistante dentaire",
  },
  {
    id: 9,
    image: "staff/nathalie.jpg",
    title: "Nathalie Brunet",
    description: "secrétaire dentaire",
  },
  {
    id: 10,
    image: "tracking-icon.png",
    title: "Audrey Desaulniers",
    description: "secrétaire dentaire",
  },
]

const Team = () => (
  <section className="section teamSection" aria-labelledby="teamTitle">
    <div className="sectionHeader">
      <h2 id="teamTitle">Notre équipe</h2>
      <Bar />
    </div>

    <div className="teamGrid">
      {members.map(member => (
        <TeamMember member={member} key={member.id} />
      ))}
    </div>
  </section>
)

export default Team
