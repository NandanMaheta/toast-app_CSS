// src/components/ToastContainer.js
import React from 'react';
import Toast from './Toast';
import styles from "../Styles/Toast.module.css"

// ToastContainer renders each toast inside a fixed container
const ToastContainer = React.memo(({ toasts, removeToast }) => {
  return (
    <div className={styles.toastContainer}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          action={toast.action}
          onRemove={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
});

export default ToastContainer;
