import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: 'flex',
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
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  avatar: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    margin: 'auto',
  },
  sidebarInfoBox: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(3)
  },
  sidebarPointBox: {
    padding: theme.spacing(1),
    textAlign: 'center',
    marginBottom: theme.spacing(3)
  },
  sidebarNav: {
    padding: theme.spacing(3),
  }
});

const Profile = (props) => {
  const { classes, theme } = props;

  const handleLogOut = () => {
    props.logout();
  }

  return (
    <div className={classes.root}>
        <Grid container className={classes.sidebarInfoBox}>
          <Grid item xs={12}>
            <Avatar alt='' src={props.current_user.image_url} className={classes.avatar} />
            <Grid item xs={12} container justify="center">
            <div style={{display:"inline-block"}}>
              <Typography className="text-center">
                {props.current_user.name}
              </Typography>
              <Typography variant='caption'>
                @{props.current_user.email}
              </Typography>
            </div>
            </Grid>

            <Divider />
            <List className={classes.sidebarNav}>
              <ListItem button>
                <ListItemIcon><Icon>subdirectory_arrow_right</Icon></ListItemIcon>
                <ListItemText onClick={handleLogOut}>
                  <Typography>
                    Logout
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
        </Grid>
      </Grid>
    </div>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Profile);
