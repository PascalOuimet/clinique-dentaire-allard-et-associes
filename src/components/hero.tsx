import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"
import Logo from "../images/svg/logo.svg"

const Hero = () => {
  const smoothScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Grid container spacing={3} style={{ minHeight: 500 }}>
      <Hidden smUp>
        <Logo style={{ width: "65%", margin: "15px auto 0" }} />
      </Hidden>
      <Grid
        item={true}
        xs={12}
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ paddingLeft: 40, paddingRight: 40, paddingBottom:40 }}
      >

        <Typography variant="subtitle1" style={{ marginBottom: 30 }}>
          La clinique dentaire Allard et Associés est un centre dentaire familial et multidisciplinaire. Elle vous offre une gamme de soins dentaires adaptés et personnalisés aux besoins de toute votre famille. Notre équipe met tout en œuvre pour vous accueillir de manière courtoise et chaleureuse, assurer votre confort et votre bien-être et vous prodiguer des soins de qualité.
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={() => smoothScroll("contactTitle")}>
          Prendre rendez-vous
        </Button>
      </Grid>
      <Hidden xsDown>
        <Grid
          item={true}
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ padding: 10 }}
        >
          <div style={{ width: "100%" }}>
            <Image alt="Virtual Healthcare for you" filename="hero-image.png" />
          </div>
        </Grid>
      </Hidden>
    </Grid>
  )
}
export default Hero
