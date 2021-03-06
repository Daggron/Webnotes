import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux'
import {Logout} from './redux/actions/action';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  Button:{
    margin : "auto",
    textAlign : "center",
    marginTop : 15,
    textDecoration : "none"
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const token = useSelector(state=>state.authenticate.login)

  const dispatch = useDispatch();

  const handleLogout = ()=>{
    dispatch(Logout());
    window.location.href="/"
  }


  const drawer =(
    
        <div className={classes.Button}>
          <Link style={{textDecoration : "none"}} to="/">
            <Button  className={classes.Button} variant="contained" color="primary">
              Home
            </Button>
          </Link>
          <Divider/>
          <Link  style={{textDecoration : "none"}} to="/editor" >
            <Button  className={classes.Button} variant="contained" color="primary">
              Write Note
            </Button>
          </Link>
          <Divider />
          <Link  style={{textDecoration : "none"}} to="/notes">
            <Button  className={classes.Button} variant="contained" color="primary">
              View Note
            </Button>
          </Link>
          <Divider/>
          <Button  className={classes.Button} variant="contained" color="primary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      )
    
  const logDrawer = (
    <div  className={classes.Button}>
      <Link  style={{textDecoration : "none"}} to="/login">
        <Button variant="contained" color="primary"  className={classes.Button}>
          Login
        </Button>
      </Link>
      <Divider />
      <Link  style={{textDecoration : "none"}} to="/register">
        <Button variant="contained" color="primary"  className={classes.Button}>
          Register
        </Button>
      </Link>
    </div>
  )
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Web Note
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {(token!==null)?drawer:logDrawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {(token!==null)?drawer:logDrawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      
      </main>
    </div>
  );
}
export default ResponsiveDrawer;
