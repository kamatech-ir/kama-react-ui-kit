const removeNonNumeric = (value: string | number): string => {
  return (value || '').toString().replace(/[^0-9.]/g, '');
};

export default {
  removeNonNumeric,
};
