import React from 'react';
import { Recipe } from '../types/recipe';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



interface RecipeProps {
  recipe: Recipe;
}

const RecipeDetail: React.FC<RecipeProps> = ({ recipe }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      {/* Recipe details */}
      <Card style={{ maxWidth: 560 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {recipe.name}
          </Typography>

          <Typography variant="h6" component="div" gutterBottom>
            Ingredients
          </Typography>
          <List>
            {recipe.ingredients.map((ingredient, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleIcon style={{ color: 'green' }} />
                </ListItemIcon>
                <ListItemText primary={ingredient} />
              </ListItem>
            ))}
          </List>

          <Typography variant="h6" component="div" gutterBottom>
            Instructions
          </Typography>
          <List >
            {recipe.instructions.map((instruction, index) => (
              <ListItem key={index}>
                <ListItemText primary={`${index + 1}. ${instruction}`} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Recipe image */}
      <Box component="img" src={recipe.image} alt={recipe.name} width="500px" height="auto" style={{ borderRadius: '10px' }} />
    </Box>
  );
};

export default RecipeDetail;
