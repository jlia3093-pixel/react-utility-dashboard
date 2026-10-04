import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="dashboard">

      <header className="header">
        <span>SMART TOOLS</span>
        <h1>Utility Dashboard</h1>
        <p>Your simple tools, all in one place.</p>
      </header>

      <main className="tools-grid">

        <section className="tool-card">
          <h2>Counter App</h2>
          <div className="number-display">{count}</div>

          <p>
            {count === 0
              ? "Minimum limit reached"
              : "You're doing great!"}
          </p>

          <button onClick={() => setCount(count + 1)}>
            + Increment
          </button>

          <button onClick={() => setCount(Math.max(0, count - 1))}>
            - Decrement
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>
        </section>

        <section className="tool-card">
          <h2>Random Number Generator</h2>

          <div className="number-display">
            {number === null ? "?" : number}
          </div>

          <p>
            {number === null
              ? "No number generated yet"
              : "Your lucky number is ready!"}
          </p>

          <button onClick={generateNumber}>
            Generate Number
          </button>
        </section>

      </main>

      <footer>Designed with React & useState</footer>

    </div>
  );
}

export default App;