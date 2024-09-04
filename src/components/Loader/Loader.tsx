import React from 'react';
import { MutatingDots } from 'react-loader-spinner';
import clsx from 'clsx';
import s from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={clsx(s.loader)}>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
