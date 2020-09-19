export const API_TYPE = (action: string) => ({
  STARTED: `${action}_STARTED`,
  FULLFILLED: `${action}_FULLFILLED`,
  REJECTED: `${action}_REJECTED`
});

const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const getDate = (date: Date | string | null) => {
  if (!date) return '-';
  let d = new Date(date);
  if (typeof date === 'string') d = new Date(date);
  return `${d.getDate()} ${shortMonths[d.getMonth()]} ${d.getUTCFullYear()}`;
};

export const isDate = (date: Date | string) => {
  return !isNaN(new Date(date).valueOf());
};
