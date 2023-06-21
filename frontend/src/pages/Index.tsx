import React, { useEffect, useState } from 'react';
import PropertyList from '../components/PropertyList';
import SearchForm from '../components/SearchForm';
import { getScrapData, searchProperties } from '../services/api';
import {properties} from './properties'

const IndexPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState(properties);
  const handleSearch = (query: string) => {
    const option = query.split('=')[0];
    const value = query.split('=')[1];

const result = properties.filter((item: any) => item[option] == value);    
    setSearchResults(result);

    if(!result.length){
      setSearchResults(properties);
    }
  };
  const getScrapedData = () => {
      setSearchResults(properties)
  };

  useEffect(() => {
    getScrapedData();
  }, []);

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <PropertyList properties={searchResults} />
    </div>
  );
};

export default IndexPage;
