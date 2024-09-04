import React from 'react';
import clsx from 'clsx';
import s from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

interface ImageGalleryProps {
  images: {
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
    id: string;
  }[];
  handleModalOpen: (data: { url: string; alt: string }) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  handleModalOpen,
}) => {
  return (
    <ul className={clsx(s.gallery)}>
      {images.map(({ urls: { small, regular }, alt_description, id }) => (
        <li key={id}>
          <ImageCard
            smallImage={small}
            regularImage={regular}
            alt={alt_description}
            handleModalOpen={handleModalOpen}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
