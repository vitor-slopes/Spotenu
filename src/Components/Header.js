import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import { useSelector } from 'react-redux'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function Header() {
  const classes = useStyles();
  // const [freeUser, setFreeUser] = React.useState("não clicado")

  const freeUser = useSelector((state) => state.header.freeUser)


  const handleDrawerToggle = () => {
    // setMobileOpen(!mobileOpen);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Hidden smUp>
            <IconButton onClick={handleDrawerToggle} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Typography variant="h6" className={classes.title}>
            SPOTENU
          </Typography>
          <Button color="inherit">{freeUser}</Button>
          {/* <Button onClick={props.vipUser} color="inherit">VipUser</Button>
            <Button onClick={props.admin} color="inherit">Admin</Button>
            <Button onClick={props.musician} color="inherit">Musician</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
