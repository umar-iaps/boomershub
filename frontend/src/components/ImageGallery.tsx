import React from 'react';
import { Button } from '@mui/material';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }: any) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevImage) => {
      if (prevImage + 1 === images.length) return 0;
      else return prevImage + 1;
    });
  };

  if (images.length === 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>No Image Available</span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '10px' }}>
        <img
          src={images[currentImage]}
          alt='Property'
          style={{ maxWidth: '100%' }}
        />
      </div>
      <Button variant='contained' onClick={handleNextImage}>
        Next Image
      </Button>
    </div>
  );
};

export default ImageGallery;
