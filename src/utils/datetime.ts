import { InvalidDate, minutesInHour } from '../common/constants/time.constants';
import { numberStartWithZero } from './number';

export const countTimeByMinutes = (minutes: number) => {
  const hours = Math.floor(minutes / minutesInHour);
  const leftMinutes = Math.floor(minutes % minutesInHour);
  const hoursStr = hours ? `${hours}h` : '';
  const minutesStr = leftMinutes ? `${leftMinutes}min` : '';
  return `${hoursStr}${hoursStr.length ? ' ' : ''}${minutesStr}`;
};

export const getTimeStr = (date: Date | string) => {
  const currentDate = new Date(date);
  if (currentDate.toString() === InvalidDate) return '';

  return `${numberStartWithZero(currentDate.getHours())}:${numberStartWithZero(
    currentDate.getMinutes(),
  )}`;
};

export const getDateStr = (date: Date | string) => {
  const currentDate = new Date(date);
  if (currentDate.toString() === InvalidDate) return '';

  return `${currentDate.toLocaleString('default', {
    weekday: 'short',
  })} ${numberStartWithZero(currentDate.getDate())}.${numberStartWithZero(
    currentDate.getMonth() + 1,
  )}.${currentDate.getFullYear()}`;
};

export const getMonthYearStr = (date: Date | string): string => {
  const currentDate = new Date(date);
  if (currentDate.toString() === InvalidDate) return '';

  return `${currentDate.toLocaleString('default', {
    month: 'long',
  })} ${currentDate.getFullYear()}`;
};

export const getMonthNumberByName = (
  prevMonth: string | number,
  prevYear: string | number,
) =>
  new Date(`${prevMonth} 01 ${prevYear}`).toLocaleDateString(`en`, {
    month: `numeric`,
  });

export const dateByMonthAndYear = (month: number, year: number) =>
  new Date(new Date().setFullYear(year, month, 1));
