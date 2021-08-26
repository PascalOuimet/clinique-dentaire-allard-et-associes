import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Bar from "./bar"
import TeethICon from "../images/svg/teeth.svg"
import RestIcon from "../images/svg/rest.svg"
import ShineIcon from "../images/svg/shine.svg"
import FuncIcon from "../images/svg/func.svg"
import ChirIcon from "../images/svg/chir.svg"
import TTeethIcon from "../images/svg/tteeth.svg"
import EmergencyIcon from "../images/svg/emergency.svg"

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

        <div className="table">
          <div className="content">
            <Typography variant="h6">Prévention</Typography>
            <ul>
              <li>Examen complet de la bouche (gencives, langue, tissus mous) et des dents</li>
              <li>Radiographies intraorales et panoramiques</li>
              <li>Détartrage et polissage </li>
              <li>Dépistage de problèmes orthodontiques</li>
              <li>Scellants</li>
              <li>Protecteur buccal</li>
              <li>Application de fluor</li>
            </ul>
            <div className="svg">
              <TeethICon style={{ height: "100%", width: "100%" }} />
            </div>
          </div>
        </div>

        <div className="table">
          <div className="content">
            <Typography variant="h6">Restauration</Typography>
            <ul>
              <li>Obturations en composite (blanc) ou en amalgame (gris)</li>
              <li>Traitements de canal</li>
              <li>Couronnes</li>
            </ul>
            <div className="svg">
              <RestIcon style={{ height: "100%", width: "100%" }} />
            </div>
          </div>
        </div>

        <div className="table">
          <div className="content">
            <Typography variant="h6">Esthétique</Typography>
            <ul>
              <li>Facettes</li>
              <li>Blanchiment</li>
              <li>Invisalign</li>
            </ul>
            <div className="svg">
              <ShineIcon style={{ height: "100%", width: "100%" }} />
            </div>
          </div>
        </div>

        <div className="table">
          <div className="content">
            <Typography variant="h6">Fonctionnel</Typography>
            <ul>
              <li>Remplacement de dents manquantes fixe ou amovible</li>
              <li>Appareil d’expansion palatine</li>
              <li>Implants</li>
            </ul>
            <div className="svg">
              <FuncIcon style={{ height: "100%", width: "100%" }} />
            </div>
          </div>
        </div>

        <div className="table">
          <div className="content">
            <Typography variant="h6">Chirurgical</Typography>
            <ul>
              <li>Frénectomie</li>
              <li>Extractions</li>
              <li>Chirurgies mineures</li>
            </ul>
            <div className="svg" style={{top:"5%"}}>
              <ChirIcon style={{ height: "90%", width: "90%" }} />
            </div>
          </div>
        </div>

        <div className="table">
          <div className="content">
            <Typography variant="h6">Parodontie</Typography>
            <ul>
              <li>Surfaçage</li>
              <li>Curetage gingival</li>
              <li>Greffes de gencives</li>
            </ul>
            <div className="svg">
              <TTeethIcon style={{ height: "100%", width: "100%" }} />
            </div>
          </div>
        </div>

        <div className="table">
          <div className="content">
            <Typography variant="h6">Urgence</Typography>
            <ul>
              <li>Examen et radiographies d’urgence</li>
              <li>Soulagement de douleurs</li>
              <li>Restaurations de dents cassées ou obturations tombées</li>
            </ul>
            <div className="svg">
              <EmergencyIcon style={{ height: "100%", width: "100%" }} />
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}
export default Services
