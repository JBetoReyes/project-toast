import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [currentVariant, setVariant] = React.useState(VARIANT_OPTIONS[0]); // ['notice', 'warning', 'success', 'error'
  const [showToast, setShowToast] = React.useState(false); // [true, false
  const handleMessageChange = (event) => setMessage(event.target.value);
  const handleVariantChange = (event) => setVariant(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowToast(true);
  };
  const handleDismissToast = () => setShowToast(false);
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {showToast && <Toast variant={currentVariant} message={message} dismissToast={handleDismissToast} />}

      <div className={styles.controlsWrapper}>
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

        <form onSubmit={handleSubmit} className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
