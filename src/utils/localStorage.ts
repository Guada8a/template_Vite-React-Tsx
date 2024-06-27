const existLocalStorage = (name: string): boolean => {
    return localStorage.getItem(name) !== null;
  };
  
  const saveLocalStorage = (name: string, data: string): void => {
    localStorage.setItem(name, data);
  };
  
  const getLocalStorage = (name: string): string | null => {
    return localStorage.getItem(name);
  };
  
  const removeLocalStorage = (name: string): void => {
    localStorage.removeItem(name);
  };
  
  export { existLocalStorage, saveLocalStorage, getLocalStorage, removeLocalStorage };
  