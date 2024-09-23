import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import { Recipe } from './types/recipe';
import Footer from './components/footer';
import Navbar from './components/NavBar';

const App: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = React.useState<Recipe | null>(null);

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={<RecipeList onSelectRecipe={setSelectedRecipe} />}
        />
        <Route
          path="/recipe/:id"
          element={ selectedRecipe && (<> 
          <Header></Header>
          <RecipeDetail recipe={selectedRecipe} />
          </>)}
        />
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;
