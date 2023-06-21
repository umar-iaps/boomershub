import React, { useState } from 'react';
import { TextField, Button, Box, Select, MenuItem } from '@mui/material';

interface SearchFormProps {
  onSearch: (query: string, ) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('name');

  const handleSearch = () => {
    onSearch(`${selectedOption}=${query}`);
  };

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value as string);
  };
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      padding='16px'
      borderRadius='4px'
      boxShadow='0px 2px 4px rgba(0, 0, 0, 0.1)'
      bgcolor='#ffffff'
    >
      <div>
        <Select
          value={selectedOption}
          onChange={handleOptionChange}
          style={{
            marginRight: '16px',
            width: 120,
          }}
        >
          <MenuItem value='name'>Name</MenuItem>
          <MenuItem value='city'>City</MenuItem>
          <MenuItem value='state'>State</MenuItem>
        </Select>
        <TextField
          label={`${selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)} Value`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            marginRight: '16px',
            width: 300,
          }}
        />
        <Button variant='contained' onClick={handleSearch}>
          Search
        </Button>
      </div>
    </Box>
  );
};

export default SearchForm;
