// src/App.js
import React, { useContext } from 'react';
import { ToastProvider, ToastContext } from "./Context/ToastContext"
import ToastContainer from "./Components/ToastContainer"
import Home from "./Pages/Home"
import './App.css'; // global app styles

// Separate component to render ToastContainer so it can use context
const ToastContainerWrapper = () => {
  const { toasts, removeToast } = useContext(ToastContext);
  return <ToastContainer toasts={toasts} removeToast={removeToast} />;
};

function App() {
  return (
    <ToastProvider>
      <Home />
      <ToastContainerWrapper />
    </ToastProvider>
  );
}

export default App;
