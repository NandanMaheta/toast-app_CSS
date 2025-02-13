
import React from 'react';
import { ToastProvider } from "./Context/ToastContext"
import ToastContainer from "./Components/ToastContainer"
import Home from "./Pages/Home"

// Separate component to render ToastContainer so it can use context


function App() {
  return (
    <ToastProvider>
      <Home />
      <ToastContainer />
    </ToastProvider>
  );
}

export default App;
