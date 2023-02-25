import React from 'react'
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SubjectIcon from '@mui/icons-material/Subject';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useHistory} from "react-router-dom";
import {useLocation} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {format} from 'date-fns'
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {

    page: {
      background: '#f9f9f9',
      width: '100%',
      padding : theme.spacing(3)
    },
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: '#bdbdbd' + '!important'
    },
    title : {
      padding : theme.spacing(2)
    },
    appbar:{
      width : `calc(100% - ${drawerWidth}px)`  + '!important'
    },
    toolbar: theme.mixins.toolbar,
    date:{
      flexGrow :1
    },
    avatar:{
      // marginLeft: '2px'
      marginLeft: theme.spacing(2)
    }
  }
})

export default function Layout({ children }) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    { 
      text: 'My Notes', 
      icon: <SubjectIcon color="secondary" />, 
      path: '/' 
    },
    { 
      text: 'Create Note', 
      icon: <AddCircleIcon color="secondary" />, 
      path: '/create' 
    },
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}
        <AppBar
        className = {classes.appbar}
        elevation = {0}
        >
          <Toolbar>
            <Typography className = {classes.date}>
              {/* {Date().toString()} */}
              Today is the {format(new Date(), 'do MMMM Y')}
            </Typography>
            <Typography>
              Apurv
            </Typography>
            <Avatar src = "/Avatar.jpg" className = {classes.avatar}/>
          </Toolbar>

          </AppBar>
      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Note-It!
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}/>
            </ListItem>
          ))}
        </List>
        
      </Drawer>

      {/* main content */}
      <div className={classes.page}>
      <div className={classes.toolbar}></div>
        { children }
      </div>
    </div>
  )
}