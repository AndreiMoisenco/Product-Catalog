import React, { use } from 'react'
import { useState, useEffect } from 'react';

export default function UseLocalStorage<T>(key:string, initialValue: T | (() => T)) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key);
        if (jsonValue != null) {
            return JSON.parse(jsonValue);
        } else if (typeof initialValue === 'function') {
            return (initialValue as () => T)();
        } else {
            return initialValue;
        }
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]); 
  return [storedValue, setStoredValue] as [typeof storedValue, typeof setStoredValue];
}
