import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  // Store info as state
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Try to retrieve item to assign state
      const item = window.localStorage.getItem(key);
      // if no item is found, return initial value
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If an error occured during first get, return initial value
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      // Stringify item before storing it
      window.localStorage.setItem(key, JSON.stringify(value));
      // Update state
      setStoredValue(value);
    } catch (error) {
      // Not managed
    }
  };
  return [storedValue, setValue];
}
