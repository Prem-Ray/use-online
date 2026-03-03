import useOnline from "./useOnline";
import "./App.css";

function App() {
  const isOnline = useOnline();

  return (
    <div className="container">
      <div className={`card ${isOnline ? "online" : "offline"}`}>
        <div className="status-icon">
          {isOnline ? "🟢" : "🔴"}
        </div>

        <h1 className="title">
          {isOnline ? "You Are Online" : "You Are Offline"}
        </h1>

        <p className="description">
          {isOnline
            ? "Your internet connection is stable and working properly."
            : "Your internet connection is lost. Please check your network."}
        </p>

        {!isOnline && (
          <button
            className="retry-btn"
            onClick={() => window.location.reload()}
          >
            Retry Connection
          </button>
        )}
      </div>
    </div>
  );
}

export default App;