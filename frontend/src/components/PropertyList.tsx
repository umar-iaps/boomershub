import React, { useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { IProperty } from '../utils/IProperty';




// interface PropertyListProps {
//   properties: IProperty[];
// }

const PropertyList: React.FC<any> = ({ properties }) => {

  return (
    <TableContainer component={Card} style={{ marginInline: 'auto',marginBlock:'10px'  }}>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: '#f1f1f1' }}>
            <TableCell>
              <strong>Provider</strong>
            </TableCell>
            {/* <TableCell>
              <strong>Address</strong>
            </TableCell> */}
            <TableCell>
              <strong>Country</strong>
            </TableCell> <TableCell>
              <strong>State</strong>
            </TableCell>
            <TableCell>
              <strong>City</strong>
            </TableCell>
            <TableCell>
              <strong>Zip Code</strong>
            </TableCell>
            <TableCell>
              <strong>Phone</strong>
            </TableCell>
            <TableCell>
              <strong>Type</strong>
            </TableCell>
            <TableCell>
              <strong>Capacity</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log('properties', properties)}
          {properties.map((property: any) => (
            <TableRow key={property.id}>
              <TableCell>
                <Link to={`/property/${property.id}`} style={{ textDecoration: 'none' }}>
                  {property.name}
                </Link>
              </TableCell>
              {/* <TableCell>{property.address}</TableCell> */}
              <TableCell>{property.country}</TableCell>
              <TableCell>{property.state}</TableCell>

              <TableCell>{property.city}</TableCell>
              <TableCell>{property.zip_code}</TableCell>
              <TableCell>{property.phone}</TableCell>
              <TableCell>{property.type}</TableCell>
              <TableCell>{property.capacity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PropertyList;
