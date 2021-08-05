import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TeamMember from "./team-member"
import Bar from "./bar"

const Team = () => {
  let services = [
    {
      id: 1,
      image: "tracking-icon.png",
      title: "Dr Bruno Allard",
      description:
        "chirurgien-dentiste ",
    },
    {
      id: 2,
      image: "tracking-icon.png",
      title: "Dre Marie-Andrée Leduc",
      description:
        "chirurgienne-dentiste ",
    },
    {
      id: 3,
      image: "tracking-icon.png",
      title: "France Tourigny",
      description:
        "hygiéniste dentaire",
    },
    {
      id: 4,
      image: "tracking-icon.png",
      title: "Cynthia Borris",
      description:
        "hygiéniste dentaire",
    },
    {
      id: 5,
      image: "tracking-icon.png",
      title: "Carolane Gagné",
      description:
        "hygiéniste dentaire",
    },
    {
      id: 6,
      image: "tracking-icon.png",
      title: "Marie Caza",
      description: "hygiéniste dentaire",
    },
    {
      id: 6,
      image: "tracking-icon.png",
      title: "Émilie Robert",
      description: "assistante dentaire",
    },
    {
      id: 6,
      image: "tracking-icon.png",
      title: "Karolyne Pâquet",
      description: "assistante dentaire",
    },
    {
      id: 6,
      image: "tracking-icon.png",
      title: "Josée-Anne Leboeuf",
      description: "assistante dentaire",
    },
    {
      id: 6,
      image: "tracking-icon.png",
      title: "Nathalie Brunet",
      description: "secrétaire dentaire",
    },
    {
      id: 6,
      image: "tracking-icon.png",
      title: "Rebecca Miclette",
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
