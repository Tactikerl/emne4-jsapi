export const saveTask = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  //sessionStorage.setItem(key, JSON.stringify(value));
};
