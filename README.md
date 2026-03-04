# use-online-checking

A lightweight React hook to detect internet connection status (online/offline) in real-time.

This hook helps React developers easily track browser network status changes.

---

## ✨ Features

- 🚀 Lightweight and dependency-free
- ⚡ Real-time network status detection
- 🔄 Automatic event listener cleanup
- 🧠 Easy to use in any React project
- ✅ TypeScript support included

---

## 📦 Installation

```bash
npm install use-online-checking
```

---

## 📥 Import

```js
import useOnline from "use-online-checking";
```

---

## 🚀 Usage

```jsx
import useOnline from "use-online-checking";

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

## 📌 API

### `useOnline(): boolean`

Returns:

| Name     | Type    | Description                          |
|----------|---------|--------------------------------------|
| isOnline | boolean | Current internet connection status   |

---

## 📁 Package Structure

```
use-online-checking/
│
├── src/
│   └── useOnline.js
│
├── index.js
├── index.d.ts
├── package.json
├── README.md
└── LICENSE
```

---

## 🛠 Requirements

- React 16.8 or higher (Hooks support)

---

## 🤝 Contributing

Contributions are welcome.  
Feel free to open issues or submit pull requests.

---

## 📄 License

MIT