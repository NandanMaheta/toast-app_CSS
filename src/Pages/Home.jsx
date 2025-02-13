
import React, { useContext } from 'react';
import { ToastContext } from "../Context/ToastContext"
import styles from "../Styles/Home.module.css"
import confetti from 'canvas-confetti';

const showSparkles = () => {
  confetti({
    particleCount: 30,
    spread: 30,
    origin: { y: 0.6 }
  });
}
const Home = () => {
  const { addToast } = useContext(ToastContext);

  // Handlers for various toast types
  const showSuccessToast = () => {
    
    addToast('Operation was successful!', 'success');
    showSparkles();
  };

  const showErrorToast = () => {
    addToast('Something went wrong.', 'error');
  };

  const showWarningToast = () => {
    addToast('Warning: Please check your input!', 'warning');
  };

  const showInfoToast = () => {
    addToast('FYI: Here is some info.', 'info');
  };

  const showActionableToast = () => {
    addToast('Actionable toast example!', 'info', 5000, {
      label: 'Undo',
      onClick: () => {
        console.log('Undo acton triggered!');
      }
    });
  };

  // Form submission handler to demo toast notifications
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    if (!username || !password) {
      addToast('Please fill all fields!', 'error');
    } else {
      addToast('Form submitted successfully!', 'success')
      ;
      confetti({
        particleCount: 100,
        spread: 2000,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <div className={styles.home}>
      <h1 className={styles.heading}>Toast Notification System Demo</h1>
      <div className={styles.buttonGroup}>
        <button onClick={showSuccessToast}>Show Success</button>
        <button onClick={showErrorToast}>Show Error</button>
        <button onClick={showWarningToast}>Show Warning</button>
        <button onClick={showInfoToast}>Show Info</button>
        <button onClick={showActionableToast}>Show Actionable</button>
      </div>
      <form onSubmit={handleFormSubmit} className={styles.demoForm}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
