import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TeamMember from "./team-member"
import Bar from "./bar"

const Team = () => {
  let services = [
    {
      id: 1,
      image: "staff/bruno.jpg",
      title: "Dr Bruno Allard",
      description:
        "chirurgien-dentiste ",
    },
    {
      id: 2,
      image: "staff/marie_andree.jpg",
      title: "Dre Marie-Andrée Leduc",
      description:
        "chirurgienne-dentiste ",
    },
    {
      id: 3,
      image: "staff/france.jpg",
      title: "France Tourigny",
      description:
        "hygiéniste dentaire",
    },
    {
      id: 4,
      image: "staff/cynthia.jpg",
      title: "Cynthia Borris",
      description:
        "hygiéniste dentaire",
    },
    {
      id: 5,
      image: "staff/carolane.jpg",
      title: "Carolane Gagné",
      description:
        "hygiéniste dentaire",
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
    }
  ]

  return (
    <Grid
      container
      spacing={3}
      style={{
        textAlign: "center",
        minHeight: 200,
        padding: 10,
      }}
    >
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h5" id="teamTitle">Notre équipe</Typography>
        <Bar />
      </Grid>

      {services.map(service => (
        <Grid item xs={12} sm={4} key={service.id}>
          <TeamMember member={service} />
        </Grid>
      ))}
    </Grid>
  )
}
export default Team
