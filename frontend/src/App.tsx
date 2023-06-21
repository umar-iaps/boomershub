import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index';
import PropertyPage from './pages/Property';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/property/:id' element={<PropertyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
