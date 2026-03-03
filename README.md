# useOnline

A simple and lightweight custom React hook to detect browser online and offline status in real-time.

---

## ✨ Features

- 🚀 Lightweight and dependency-free
- ⚡ Real-time network status detection
- 🔄 Automatic event listener cleanup
- 🧠 Easy to use in any React project

---

## 📦 Installation

If published to npm:

```bash
npm install use-online
```

Or clone the repository:

```bash
git clone https://github.com/your-username/use-online.git
```

---

## 🚀 Usage

```jsx
import useOnline from "use-online";

function App() {
  const isOnline = useOnline();

  return (
    <div>
      {isOnline ? (
        <h2>✅ You are Online</h2>
      ) : (
        <h2>❌ You are Offline</h2>
      )}
    </div>
  );
}

export default App;
```

---

## 🧠 How It Works

The hook listens to browser events:

- `window.addEventListener("online")`
- `window.addEventListener("offline")`

When the network status changes, the state updates automatically.

---

## 🔧 Hook Implementation

```js
import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const checkOnline = () => {
      setIsOnline(true);
    };

    const checkOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", checkOnline);
    window.addEventListener("offline", checkOffline);

    return () => {
      window.removeEventListener("online", checkOnline);
      window.removeEventListener("offline", checkOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
```

---

## 📌 API

### `useOnline()`

Returns:

| Name      | Type    | Description                     |
|-----------|---------|---------------------------------|
| isOnline  | boolean | Current internet connection status |

---

## 📁 Project Structure

```
use-online/
│
├── src/
│   ├── useOnline.js
│   ├── App.jsx
│   ├── main.jsx
│
├── package.json
├── README.md
└── vite.config.js
```

---

## 🤝 Contributing

Contributions are welcome.  
Feel free to open issues or submit pull requests.

---

## 📄 License

MIT