import React from 'react';
import { Typography } from '@mui/material';
import { IProperty } from '../utils/IProperty';



interface PropertyMapProps {
  properties: IProperty[];
}

const PropertyMap: React.FC<PropertyMapProps> = ({ properties }) => {
  return (
    <div>
      {properties.map((property) => (
        <Typography key={property.id}>{property.name}</Typography>
      ))}
    </div>
  );
};

export default PropertyMap;
