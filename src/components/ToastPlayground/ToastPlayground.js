import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [currentVariant, setVariant] = React.useState(VARIANT_OPTIONS[0]); // ['notice', 'warning', 'success', 'error'
  const [toasts, setToasts] = React.useState([]);
  const handleMessageChange = (event) => setMessage(event.target.value);
  const handleVariantChange = (event) => setVariant(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    setToasts([...toasts, {
      id: Math.round(Math.random() * 100000 + 1),
      variant: currentVariant,
      message
    }]);
    setVariant('notice');
    setMessage('');
  };
  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toasts.length > 0 && <ToastShelf toasts={toasts} onDismiss={removeToast} />}

      <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={handleMessageChange} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((variant) => (
              <label key={variant} htmlFor={`variant-${variant}`}>
                <input
                  id={`variant-${variant}`}
                  type="radio"
                  name="messageVariant"
                  checked={variant === currentVariant}
                  value={variant}
                  onChange={handleVariantChange}
                />
                {variant}
              </label>
            ))}

            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div onSubmit={handleSubmit} className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
