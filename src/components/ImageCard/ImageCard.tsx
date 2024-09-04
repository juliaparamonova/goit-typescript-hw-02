import React from 'react';
import clsx from 'clsx';
import s from './ImageCard.module.css';

interface ImageCardProps {
  smallImage: string;
  regularImage: string;
  alt: string;
  handleModalOpen: (data: { url: string; alt: string }) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  smallImage,
  regularImage,
  alt,
  handleModalOpen,
}) => {
  return (
    <div
      className={clsx(s.card)}
      onClick={() => handleModalOpen({ url: regularImage, alt })}
    >
      <img src={smallImage} alt={alt} />
    </div>
  );
};

export default ImageCard;
