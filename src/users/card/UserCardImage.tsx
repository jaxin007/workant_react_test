import React from 'react';
import './styles/user-card-image.css';
import { defineClassesAttribute } from '../../utils/array';
import { ClassNames } from '../../common/types/layout.types';

export const UserCardImage = ({
  url,
  classNames,
}: {
  url?: string;
  classNames?: ClassNames;
}) => {
  if (!url) return <></>;
  return (
    <div
      className={defineClassesAttribute('user-card-image', classNames)}
      style={{
        backgroundImage: `url(${url})`,
      }}
    />
  );
};
