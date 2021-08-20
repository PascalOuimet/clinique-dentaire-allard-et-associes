import PropTypes from "prop-types"
import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import List from "@material-ui/core/List"
import Logo from "../images/svg/logo.svg"

const useStyles = makeStyles(() => ({
  appBar: {
    color: "#233348",
    backgroundColor: "#FFF",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  toolbarTitleXs: {
    flexGrow: 1,
    fontSize:"1rem"
  },
  drawerList: {
    width: 250,
  },
  drawerToggle: {
    padding: 20,
  },
}))

const Header = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const smoothScroll = (id:string) => {    
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { displayText: "Notre équipe", link: "teamTitle" },
    { displayText: "Services", link: "servicesTitle" },
    { displayText: "Contact", link: "contactTitle" }
  ]

  return (
    <React.Fragment>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Hidden smUp>
            <IconButton
              className={classes.drawerToggle}
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden xsDown>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.toolbarTitle}
          >
            Clinique Dentaire Allard et Associés <Logo style={{width:"20px"}}/>
          </Typography>
          </Hidden>

          <Hidden smUp>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.toolbarTitleXs}
          >
            Clinique Dentaire Allard et Associés
          </Typography>
          </Hidden>

          <Hidden xsDown>
            {navLinks.map(item => (
              <Button color="inherit" key={item.displayText} onClick={() => smoothScroll(item.link)}>
                {item.displayText}
              </Button>
            ))}
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onEscapeKeyDown={handleDrawerClose}
        onBackdropClick={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <List className={classes.drawerList}>
          {navLinks.map((item) => (
            <ListItem button key={item.displayText} onClick={() => {setOpen(false); setTimeout(() => smoothScroll(item.link), 50);}}>
              <ListItemText primary={item.displayText} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  )
}

Header.propTypes = {
  companyName: PropTypes.string,
}

Header.defaultProps = {
  companyName: `Clinique Dentaire Allard et Associés`,
}

export default Header
