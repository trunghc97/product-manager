import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SignUp from './SignUp'
import SignIn from './SignIn'
import Profile from './Profile'

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  iconMenu: {
    position: 'fixed',
    right: '5px',
    top: '5px',
  },
}));

export default function SideBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [sidebar, setSideBar] = React.useState(0);
  let sideBar;

  const loggedIn = () => {
    if(props.current_user == '') {
      return;
    }
    setSideBar(3);
  }

  function handleDrawerOpen() {
    loggedIn();
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const handleClickSignUp = () => {
    setSideBar(1);
  }

  const handleClickSignIn =  () => {
    setSideBar(0);
  }

  if(sidebar == 0){
    sideBar = <SignIn
                handleClickSignUp = {handleClickSignUp}
                handleSignIn = {props.handleSignIn}/>
  } else if (sidebar == 1) {
    sideBar = <SignUp
                handleClickSignIn = {handleClickSignIn}
                handleSignUp = {props.handleSignUp} />
  } else {
    sideBar = <Profile
                current_user = {props.current_user}
                logout = {props.logout} />
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.iconMenu}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          className={clsx(open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        {sideBar}
      </Drawer>
    </div>
  );
}
