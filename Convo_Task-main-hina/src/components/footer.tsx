import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  footer: {
    position: 'relative',
    backgroundImage: 'url("/src/assets/Rectangle 48.png")', // Replace with the correct image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    padding: '20px',
    textAlign: 'left',
    height: '150px',
    width: '100%',
  },
  logo: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    width: '120px',
  },
  copyright: {
    marginTop: 'auto',
    bottom: '20px',
    left: '120px',
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      {/* Footer Logo */}
      <Box>
        <img src="src\assets\CP-Logo.png" alt="Cookpal Logo" className={classes.logo} />
      </Box>

      {/* Footer Copyright */}
      <Box className={classes.copyright}>
        <Typography variant="body2">© 2024 Cookpal. All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
