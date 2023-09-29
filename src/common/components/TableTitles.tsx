import React from 'react';
import { ClassNames } from '../types/layout.types';
import { defineClassesAttribute } from '../../utils/array';

export const TableTitles = ({
  titles,
  classNames,
}: {
  titles: string[];
  classNames?: ClassNames;
}) => {
  return (
    <thead>
      <tr className={defineClassesAttribute(classNames ?? '')}>
        {titles.map((title) => (
          <th key={title}>{title}</th>
        ))}
      </tr>
    </thead>
  );
};
