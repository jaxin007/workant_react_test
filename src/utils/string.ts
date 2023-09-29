export const fullName = (firstName: string, lastName: string) =>
  `${firstName} ${lastName}`;

export const strNoLongerThen = (str: string, length: number): string => {
  const result = str;
  if (result.length <= length) return result;
  return `${result.slice(0, length)}...`;
};
