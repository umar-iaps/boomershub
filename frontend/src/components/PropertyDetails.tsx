import React from 'react';
import { Typography, Box } from '@mui/material';
import { IProperty } from '../utils/IProperty';

interface PropertyDetailsProps {
  property: IProperty;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {
  console.log(property);
  return (
    <Box p={2} bgcolor='#f5f5f5' borderRadius={4}>
      <Typography variant='h2' component='h2' mb={2}>
        {property.name}
      </Typography>
      <Typography variant='body1' component='p' mb={1}>
        Address: {property.address}
      </Typography>
      <Typography variant='body1' component='p' mb={1}>
        City: {property.city}
      </Typography>
      <Typography variant='body1' component='p' mb={1}>
        State: kdfjadjflk{property.state}
      </Typography>
      <Typography variant='body1' component='p' mb={1}>
        Country: {property.country}
      </Typography>
      <Typography variant='body1' component='p' mb={1}>
        Zip Code: {property.zip_code}
      </Typography>
      <Typography variant='body1' component='p' mb={1}>
        Phone: {property.phone}
      </Typography>
      <Typography variant='body1' component='p' mb={1}>
        Type: {property.type}
      </Typography>
      <Typography variant='body1' component='p'>
        Capacity: {property.capacity}
      </Typography>
      {/* <img src={`http://localhost:4000/s3/image/${property.url}`} alt="Property" /> */}
    </Box>
  );
};

export default PropertyDetails;
