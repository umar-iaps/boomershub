import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropertyDetails from '../components/PropertyDetails';
import ImageGallery from '../components/ImageGallery';
import PropertyMap from '../components/PropertyMap';
import { getImages, getProperty } from '../services/api';
import Loader from '../components/Loader';
import { IProperty } from '../utils/IProperty';
import { properties } from './properties';
import { log } from 'console';

const PropertyPage: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  const result = properties.find((item) => item.id == id);
  const [property, setProperty] = useState<any>(result);
  const [images, setImages]: any = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError]: any = useState<any>(null);

  const fetchProperty = async () => {
    console.log("id is ", id);
    const result = properties.find((item) => item.id == id);
    setProperty(result);
    if(!result){
      setError('No Property Found');
    }
    setLoading(false);
  };

  const fetchImages = () => {
    console.log(property.images);
    setImages(property.images);
    setLoading(false);
  };

  useEffect(() => {
    fetchProperty();
    fetchImages();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f8d7da',
          color: '#721c24',
          padding: '20px',
          fontSize: '18px',
        }}
      >
        Error: {error}
      </div>
    );
  }

  return (
    <>
      {!properties.length ? (
        <div>No property found.</div>
      ) : (
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <PropertyDetails property={property} />
          </div>
          <div style={{ flex: 1, marginLeft: '20px' }}>
            <ImageGallery images={images} />
          </div>
          {/* <PropertyMap properties={property} /> */}
        </div>
      )}
    </>
  );
};

export default PropertyPage;
