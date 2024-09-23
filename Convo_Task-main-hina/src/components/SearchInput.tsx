// import React from 'react';
// import { TextField } from '@mui/material';

// interface SearchInputProps {
//   onSearch: (query: string) => void;
// }

// const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     onSearch(e.target.value);
//   };

//   return <TextField placeholder="Search Recipes..." onChange={handleSearch} fullWidth />;
// };

// export default SearchInput;

import React, { useState } from 'react';
import { Box, TextField, Select, MenuItem, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All Categories');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        borderRadius: 25,
        padding: '5px 10px',
        maxWidth: '600px',
        margin: '0 auto', // Center the search bar
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Category Select Dropdown */}
      <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        variant="outlined"
        sx={{
          mr: 2,
          borderRadius: '20px',
          backgroundColor: '#fff',
          paddingLeft: '10px',
          paddingRight: '10px',
          width: '150px',
        }}
      >
        <MenuItem value="All Categories">All Categories</MenuItem>
        <MenuItem value="Category1">Category 1</MenuItem>
        <MenuItem value="Category2">Category 2</MenuItem>
        {/* Add more categories as needed */}
      </Select>

      {/* Search Input */}
      <TextField
        variant="outlined"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{
          flexGrow: 1,
          backgroundColor: '#fff',
          borderRadius: '20px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '20px',
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchInput;
