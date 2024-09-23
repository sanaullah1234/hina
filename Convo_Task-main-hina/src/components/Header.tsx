import React from 'react';
import { Box, Typography } from '@mui/material';
import banner from '../assets/banner.jpeg';

const Header: React.FC = () => (
  <Box sx={{ 
      backgroundImage: `url("${banner}")`, 
      height: 300, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      display: 'flex', 
      justifyContent: 'flex-start',  // Align text to the left
      alignItems: 'center',
      paddingLeft: 20,  // Add some padding to the left for spacing
    }}
  >
    <Typography 
      variant="h3"  // Adjust the size to match the look
      color="white"
      sx={{
        fontWeight: 400, // Adjust the font weight if needed
        // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: add a transparent background for better readability
        padding: '10px 20px', // Add some padding for better appearance
        borderRadius: 5,  // Optional: add border radius for smoother edges
      }}
    >
      Food Diary
    </Typography>
  </Box>
);

export default Header;
