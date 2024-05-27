export const get = (key) => {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
};

export const set = (key, value) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(key, value);
  }
};

export const remove = (key) => {
  if (typeof localStorage !== "undefined") {
    localStorage.removeItem(key);
  }
};

export const clear = () => {
  if (typeof localStorage !== "undefined") {
    localStorage.clear();
  }
};
