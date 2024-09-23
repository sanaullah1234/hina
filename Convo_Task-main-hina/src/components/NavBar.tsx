import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navButtons: {
    marginLeft: 'auto',
  },
  toolbar: {
    backgroundColor: 'black', // Set background to black
    color: 'white', // Set text to white
  },
  logo: {
    flexGrow: 1,
    fontSize: '24px',
    fontWeight: 'bold',
  },
  button: {
    color: 'green', // Set button color to green
  },
});

const Navbar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logo}>
          Cookpal
        </Typography>
        <Button color="inherit">Community</Button>
        <Button color="inherit">Books</Button>
        <Button color="inherit">Recipe Index</Button>
        <Button color="inherit">Popular</Button>
        <Box className={classes.navButtons}>
          <Button className={classes.button}>Register</Button>
          <Button className={classes.button}>Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;