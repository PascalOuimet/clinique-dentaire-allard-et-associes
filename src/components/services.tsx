import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Bar from "./bar"
import BulletImage from "./bulletImage"

const Services = () => {
  return (
    <Grid container spacing={3} style={{ paddingTop: "60px" }}>
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h5" id="servicesTitle">Services</Typography>
        <Bar />

        <Typography variant="subtitle1" >Nous offrons des soins dentaires de plusieurs catégories.</Typography>

      </Grid>

      <Grid
        item
        xs={12}
        container
        direction="column"
      >

        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "50px", paddingRight: "10px" }} valign="top"><BulletImage alt="Prévention" filename="prevent.png" /></td>
              <td><Typography variant="h6"> Prévention : </Typography>
                <ul>
                  <li>Examen complet de la bouche (gencives, langue, tissus mous) et des dents</li>
                  <li>Radiographies intraorales et panoramiques</li>
                  <li>Détartrage et polissage </li>
                  <li>Dépistage de problèmes orthodontiques</li>
                  <li>Scellants</li>
                  <li>Protecteur buccal</li>
                  <li>Application de fluor</li>
                </ul></td>
            </tr>
          </tbody>
        </table>



      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="column"
      >
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "50px", paddingRight: "10px" }} valign="top"><BulletImage alt="Restauration" filename="restore.png" /></td>
              <td>
                <Typography variant="h6" >Restauration</Typography>
                <ul>
                  <li>Obturations en composite (blanc) ou en amalgame (gris)</li>
                  <li>Traitements de canal</li>
                  <li>Couronnes</li>
                </ul></td>
            </tr>
          </tbody>
        </table></Grid>
      <Grid
        item
        xs={12}
        container
        direction="column"
      >
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "50px", paddingRight: "10px" }} valign="top"><BulletImage alt="Esthétique" filename="aesthetic.png" /></td>
              <td>
                <Typography variant="h6" >Esthétique</Typography>
                <ul>
                  <li>Facettes </li>
                  <li>Blanchiment </li>
                  <li>Invisalign</li>
                </ul></td>
            </tr>
          </tbody>
        </table>
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="column"
      >
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "50px", paddingRight: "10px" }} valign="top"><BulletImage alt="Fonctionnel" filename="functional.png" /></td>
              <td>
                <Typography variant="h6" >Fonctionnel</Typography>
                <ul>
                  <li>Remplacement de dents manquantes fixe ou amovible</li>
                  <li>Appareil d’expansion palatine</li>
                  <li>Implants</li>
                </ul></td>
            </tr>
          </tbody>
        </table>
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="column"
      >
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "50px", paddingRight: "10px" }} valign="top"><BulletImage alt="Chirurgical" filename="chirurgical.png" /></td>
              <td>
                <Typography variant="h6" >Chirurgical</Typography>
                <ul>
                  <li>Frénectomie</li>
                  <li>Extractions</li>
                  <li>Chirurgies mineures</li>
                </ul></td>
            </tr>
          </tbody>
        </table>
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="column"
      >
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "50px", paddingRight: "10px" }} valign="top"><BulletImage alt="Parodontie" filename="periodontics.png" /></td>
              <td>
                <Typography variant="h6" >Parodontie</Typography>
                <ul>
                  <li>Surfaçage</li>
                  <li>Curetage gingival</li>
                  <li>Greffes de gencives</li>
                </ul></td>
            </tr>
          </tbody>
        </table></Grid>
      <Grid
        item
        xs={12}
        container
        direction="column"
      >
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "50px", paddingRight: "10px" }} valign="top"><BulletImage alt="Urgence" filename="emergency.png" /></td>
              <td>
                <Typography variant="h6" >Urgence</Typography>
                <ul>
                  <li>Examen et radiographies d’urgence</li>
                  <li>Soulagement de douleurs</li>
                  <li>Restaurations de dents cassées ou obturations tombées</li>
                </ul></td>
            </tr>
          </tbody>
        </table>
      </Grid>
    </Grid>
  )
}
export default Services
