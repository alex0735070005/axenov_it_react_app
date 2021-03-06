export const getItem = key => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const setItem = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};
