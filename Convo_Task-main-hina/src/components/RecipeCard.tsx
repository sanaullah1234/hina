import React from 'react';
import { Recipe } from '../types/recipe';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => (
  
  <Card 
    onClick={onClick} 
    sx={{ 
      cursor: 'pointer', 
      margin: 2, 
      width: 300,         // Adjust the card width as needed
      boxShadow: 3        // Add some shadow for a raised effect
    }}
  >
    <CardMedia
      component="img"
      height="140"
      image={recipe.image}
      alt={recipe.name}
    />
    <CardContent>
      {/* Recipe Name */}
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {recipe.name}
      </Typography>
      
      {/* Prep Time */}
      <Box display="flex" alignItems="center" mb={1}>
        <AccessTimeIcon fontSize="small" />
        <Typography variant="body2" color="textSecondary" ml={1}>
          {recipe.prepTimeMinutes} minutes
        </Typography>
      </Box>

      {/* Meal Type */}
      <Typography variant="body2" color="textSecondary">
        {recipe.mealType}
      </Typography>
      
      <Box display="flex" alignItems="center" mt={1}>
        {Array.from({ length: 5 }).map((_, index) => {
          const starValue = index + 1;
          if (starValue <= Math.floor(recipe.rating)) {
            // Full stars
            return <StarIcon key={index} fontSize="small" color="primary" />;
          } else if (starValue === Math.ceil(recipe.rating) && recipe.rating % 1 !== 0) {
            // Half star for fractional ratings
            return <StarHalfIcon key={index} fontSize="small" color="primary" />;
          } else {
            // Empty stars
            return <StarOutlineIcon key={index} fontSize="small" color="primary" />;
          }
        })}
    </Box>
      
      {/* Tags */}
      <Typography variant="body2" color="textSecondary" mt={1}>
        {recipe.tags.join(', ')}
      </Typography>
      
      {/* Reviews - placeholder or actual reviews */}
      <Box mt={2}>
        <Typography variant="body2" sx={{ backgroundColor: 'limegreen', padding: '4px 8px', borderRadius: '4px', color: 'white', display: 'inline-block' }}>
          Reviews: 26
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default RecipeCard;

