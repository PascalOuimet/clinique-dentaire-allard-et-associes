import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Hidden from "@material-ui/core/Hidden"

const Footer = () => {
  return (
    <React.Fragment>
      <Box className="footer">
        <Grid
          container
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            minHeight: 250,
            color: "#FFF",
          }}
        >
          <Grid
            xs={12}
            sm={6}
            item
            container
            direction="column"
            justify="space-evenly"
            style={{ padding: 10 }}
          >
            <Typography variant="h4" color="inherit" id="contactTitle">
              Contact
            </Typography>
            <Typography variant="body2" color="inherit">
              85 Notre-Dame suite 1, Salaberry-de-Valleyfield, J6S1E7
            </Typography>
            <Typography variant="body2" color="inherit">
              Téléphone <a href="tel:4503717571" style={{ color: "white" }}>450 371-7571</a>
            </Typography>
            <Typography variant="body2" color="inherit">
              Fax 450 371 8122
            </Typography>
            <Typography variant="body2" color="inherit">
              <a href="mailto:info@cliniqueallardleduc.com" style={{ color: "white" }}>info@cliniqueallardleduc.com</a>
            </Typography>
          </Grid>

          <Hidden xsDown>
            <Grid
              item
              xs={12}
              sm={6}
              container
              direction="column"
              justify="space-evenly"
            >
              <Typography variant="h5">
                Heures d'ouverture
              </Typography>
              <ul style={{margin:0, padding:0, listStyleType:"none"}}>
                <li style={{marginBottom: "10px"}}>Lundi : 7 h30 à 17h30</li>
                <li style={{marginBottom: "10px"}}>Mardi : 7 h30 à 17h30</li>
                <li style={{marginBottom: "10px"}}>Mercredi : 7 h30 à 17h30 </li>
                <li style={{marginBottom: "10px"}}>Jeudi : 11h00 à 19h</li>
                <li>Vendredi : 7 h30 à 15h30</li>
              </ul>
            </Grid>
          </Hidden>
        </Grid>
      </Box>
      <Box className="attribution">
        <Grid
          container
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            color: "#FFF",
            paddingLeft: 5,
            paddingRight: 5,
          }}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="inherit">
            Ordre des dentistes du Québec{" "}
            <a
              href="https://www.maboucheensante.com/"
              target="_blank"
              style={{ color: "#FFF" }}
            >
              ODQ
            </a>
          </Typography>
          <Typography variant="body2" color="inherit">
            Ordre des hygiénistes dentaires du Québec{" "}
            <a
              href="https://ohdq.com/public/lordre/"
              target="_blank"
              style={{ color: "#FFF", margin: 5 }}
            >
              OHDQ
            </a>
          </Typography>
        </Grid>
      </Box>
    </React.Fragment >
  )
}
export default Footer
