import { useEffect } from "react";
import "./Alert.css";

function Alert({ show, setShow, type, message }) {
  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div
      className={`alert-popup ${type === "success" ? "success" : "error"}`}
      role="alert"
    >
      <span className="alert-type">{type}!</span>
      <span className="alert_message">{message}</span>
      <button onClick={() => setShow(false)} className="alert-close-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="alert-close-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default Alert;
