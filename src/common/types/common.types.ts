import React from 'react';

export type SetStateFn<T> = React.Dispatch<React.SetStateAction<T>>;

export type Nullable<T> = T | null;
