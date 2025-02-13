
import React from 'react';
import { ToastProvider } from "./Context/ToastContext"
import ToastContainer from "./Components/ToastContainer"
import Home from "./Pages/Home"
import CustomToast from './Components/customToast';
import logo from "./assests/HORIZONTAL.avif"

// Separate component to render ToastContainer so it can use context


function App() {
  return (
    <ToastProvider>
      <Home />
      <ToastContainer />
      <CustomToast logo={logo} message="Providing Robust solutions for Home Healthcare Firms." link="https://www.levich.co/"/>
    </ToastProvider>
  );
}

export default App;
