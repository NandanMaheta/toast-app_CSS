
import React from 'react';
import Toast from './Toast';
import styles from "../Styles/Toast.module.css"
import { useContext } from 'react';
import { ToastContext } from '../Context/ToastContext';

// ToastContainer renders each toast inside a fixed container
const ToastContainer = React.memo(() => {
  const {toasts,removeToast} = useContext(ToastContext)
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
