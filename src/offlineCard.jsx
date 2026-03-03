import React from "react";

const OfflineCard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>📡❌</div>

        <h2 style={styles.title}>You are Offline</h2>

        <p style={styles.text}>
          Please check your internet connection and try again.
        </p>

        <button
          style={styles.button}
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh",
  },
  card: {
    maxWidth: "400px",
    textAlign: "center",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    backgroundColor: "#fff",
  },
  icon: {
    fontSize: "60px",
    marginBottom: "15px",
  },
  title: {
    marginBottom: "10px",
  },
  text: {
    color: "#555",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#d떤34",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default OfflineCard;