import React, { useRef } from "react";
// import logo from './logo.svg';
import "./App.css";

const colors = ["red", "blue", "green", "black", "yellow"];

function App() {
  const canvasRef = useRef(null);

  return (
    <div className="App">
      <canvas
        style={{
          border: "1px solid #000",
        }}
        width={600}
        height={600}
        ref={canvasRef}
      />
      <br />
      <select>
        {colors.map((color) => (
          <option value={color}>{color}</option>
        ))}
      </select>
      <button>Clear</button>
      <br />
      <button>Download</button>
    </div>
  );
}

export default App;
