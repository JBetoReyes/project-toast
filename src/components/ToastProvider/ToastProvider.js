import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const addToast = React.useCallback(({ id, message, variant }) => {
    setToasts((toasts) => [...toasts, { id, message, variant }]);
  }, []);
  const removeToast = React.useCallback((id) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  }, []);
  const cleanAllToasts = React.useCallback(() => {
    setToasts([]);
  }, []);
  const value = React.useMemo(() => ({
    toasts, addToast, removeToast, cleanAllToasts
  }), [toasts, addToast, removeToast, cleanAllToasts]);
  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
