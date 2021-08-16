import { DIFF_TIME, DATE_OPTIONS } from 'utils/constants';

export const createKRdate = area => {
  const date = new Date();
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const krCurrentTime = new Date(utcTime + DIFF_TIME.kr);
  return krCurrentTime.toLocaleDateString(area, DATE_OPTIONS);
};
