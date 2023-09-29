import { ClassNames } from '../common/types/layout.types';

export const defineClassesAttribute = (
  initialClasses: ClassNames,
  additionalClasses?: ClassNames,
): string => {
  const classes: Array<string | string[]> = [initialClasses];
  if (additionalClasses) classes.push(additionalClasses);
  return classes.flat().join(' ');
};
