import React, { useRef } from "react";
// import logo from './logo.svg';
import "./App.css";

function App() {
  const canvasRef = useRef(null);

  return (
    <div className="App">
      <canvas
        style={{
          border: "1px solid #000",
        }}
        width={400}
        height={400}
        ref={canvasRef}
      />
    </div>
  );
}

export default App;
