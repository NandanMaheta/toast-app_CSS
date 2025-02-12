// src/components/Toast.js
import React from 'react';
import styles from "../Styles/Toast.module.css"

// Using React.memo to prevent unnecessary re-renders if props don't change
const Toast = React.memo(({ message, type, action, onRemove }) => {
  // Returns an icon based on toast type
  const getIcon = () => {
    switch (type) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '✨';
    }
  };

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <span className={styles.toastIcon}>{getIcon()}</span> {/* Icon */}
      <p className={styles.toastMessage}>{message}</p> {/* Message */}
      {action && (
        <button
          className={styles.toastAction}
          onClick={() => {
            // Trigger action and then remove the toast 
            
            action.onClick();
            onRemove();
          }}
        >
          {action.label}
        </button>
      )}
      <div className={styles.progressBar} /> {/* Progress bar */}
    </div>
  );
});

export default Toast;

