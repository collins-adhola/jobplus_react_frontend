import { AppBar, Badge, Box, IconButton, Tab, Tabs, Toolbar, Typography, MenuIcon } from '@material-ui/core'
import React from 'react'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/styles';



import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import MenuIcon from "@material-ui/icons/Menu";


const useStyles = makeStyles((theme) => ({
  container: {
    width: '900px',
    margin: '0 auto',
    // border: '1px yellow dotted'
    },
  iconWrap: {
    marginLeft: 'auto',
    // border: '1px red dotted',
    '& .MuiButtonBase-root': {
      marginLeft: '13px'
    },
    '& .MuiSvgIcon-root' : {
      fontSize: '27px'
    }
  },
  tabs: {
    '& .MuiTab-root': {
      minWidth: 10,
      marginLeft: '10px'
    }
    
  }
}));



export default function Navbar() {
  const classes = useStyles();
  return (
   <Box>
    <AppBar position='static'>
      <Toolbar className={classes.container}>
        
          {/* < MenuIcon /> */}
        

      <Typography component='h6'> JOBPLUS </Typography>
        <Tabs value={1} className={classes.tabs}>
          <Tab
            key={0}
            label={'Home'}
            component={Link}
            to = {'/'}
          />
          <Tab
            key={1}
            label={'Job Listings'}
            component={Link}
            to = {'/job-listings'}
          />
          <Tab
            key={2}
            label={'Job Applications'}
            component={Link}
            to = {'/job-applications'}
          />
        </Tabs>

        <Box className={classes.iconWrap}>
          <IconButton size="small" component={Link} to={'/search'} color={'inherit'}>
            <SearchIcon />         
          </IconButton>

          <IconButton size="small" component={Link} to={'/notifications'} color={'inherit'}>
            <Badge color='error' overlap="circular" variant="dot"> 
              <NotificationsNoneIcon />  
            </Badge>
          </IconButton>

          <IconButton size="small" component={Link} to={'/saved-jobs'} color='inherit' edge={'start'}>
            <Badge badgeContent={2}> 
              <StarBorderIcon />
            </Badge>
          </IconButton>

          <IconButton size="small" component={Link} to={'/search'} color={'inherit'}>
            <PersonOutlineIcon />         
          </IconButton>

          <IconButton size="small" component={Link} to={'/search'} color={'inherit'}>
            <ExitToAppIcon />         
          </IconButton>

        </Box>
      </Toolbar>
          
    </AppBar>
   </Box>
  )
}
