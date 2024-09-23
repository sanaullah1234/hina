import React, { useEffect, useState } from 'react';
import { Recipe } from '../types/recipe';
import RecipeCard from './RecipeCard';
import { fetchRecipes } from '../utils/api';
import { Box, Grid, Container } from '@mui/material';
import SearchInput from './SearchInput';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

interface RecipeListProps {
  onSelectRecipe: (recipe: Recipe) => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ onSelectRecipe }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipes().then(setRecipes);
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (recipe: Recipe) => {
    onSelectRecipe(recipe);
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <Box>
      {/* Sticky Search Section */}
      <Container
        sx={{
          position: 'sticky',   // Makes the search bar sticky
          top: 0,               // Stick it to the top of the screen
          zIndex: 1000,         // Ensure it stays above the content
          backgroundColor: 'transparent',  
          paddingTop: '16px',
          paddingBottom: 2,
          mb: 4,
          mt: 2,
          
          
        }}
      >
        <SearchInput onSearch={setSearchQuery} />
      </Container>
      {/* Header Section */}
      <Header />

      

      {/* Navigation Links (Home, Explore, Help, Profile) */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 4,
          mb: 4,
          '& a': {
            textDecoration: 'none',
            color: 'green',
            fontSize: '18px',
            fontWeight: 'bold',
            mx: 2,
          },
        }}
      >
        <a href="/home">Home</a>
        <a href="/explore">Explore</a>
        <a href="/help">Help</a>
        <a href="/profile">Profile</a>
      </Box>

      {/* Recipes Grid */}
      <Container>
        <Grid container spacing={3}>
          {filteredRecipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
              <RecipeCard
                recipe={recipe}
                onClick={() => handleCardClick(recipe)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default RecipeList;
