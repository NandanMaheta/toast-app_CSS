
import React,{useState,useEffect} from 'react';
import styles from "../Styles/CustomToast.module.css"
import logo from "../assests/HORIZONTAL.avif"



const CustomToast = () => {
  const [visible, setVisible] = useState(false);

  // Show the toast 1.4 seconds after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  // Hide the toast when the close  is clicked
  const handleClose = () => {
    setVisible(false);
  };

  // If not visible, don't show anything
  if (!visible) return null;

  return (
    <div className={styles.customToast}>
      <div className={styles.imageContainer}>
        <img src={logo} alt="Levich Solutions Logo" className={styles.logo} />
      </div>
      <div className={styles.content}>
        <p className={styles.message}>
          Providing Robust solutions for Home Healthcare Firms.
        </p>
        <p className={styles.subMessage}>
          Talk with our experts for tailored solutions:
        </p>
        <a 
          href="https://www.levich.co/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.button}
        >
          Contact Us
        </a>
      </div>
      <button className={styles.closeButton} onClick={handleClose}>
        &times;
      </button>
    </div>
  );
};

export default CustomToast;


