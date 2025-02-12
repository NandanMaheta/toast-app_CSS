// src/context/ToastContext.js
import React, { createContext, useState, useCallback } from 'react';

// Create a context for toast notifications
export const ToastContext = createContext();

// ToastProvider wraps the app and provides toast functions
export const ToastProvider = ({ children }) => {
  // Array to hold our active toasts
  const [toasts, setToasts] = useState([]);

  // Remove a toast by its id; memoized to avoid re-creating the function every time
  const removeToast = useCallback((id) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }, []);

  // Add a new toast notification
  // NOTE: the id generation here is simple and might conflict in very rare cases :)
  const addToast = useCallback((message, type = 'info', duration = 3000, action) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { id, message, type, duration, action };
    // Add new toast to the state
    setToasts(prevToasts => [...prevToasts, newToast]);

    // Auto-remove toast after "duration" ms
    // (Minor quirk: if manually removed before timer, timer still fires)
    setTimeout(() => {
      removeToast(id);
    }, duration);
  }, [removeToast]);

  // Provide the state and functions to the app
  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};
