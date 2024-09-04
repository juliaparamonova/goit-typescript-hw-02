import React from 'react';
import clsx from 'clsx';
import s from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <button className={clsx(s.button_load)} onClick={onLoadMore}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
