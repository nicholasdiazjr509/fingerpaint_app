import React, {useRef, useState, useEffect, useCallback} from 'react';
// import logo from './logo.svg';
// import "./App.css";

const colors = ['red', 'blue', 'green', 'black', 'yellow'];

function App() {
  const canvasRef = useRef(null);
  const ctx = useRef(null);

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [mouseDown, setMouseDown] = useState(false);
  const [lastPosition, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const draw = useCallback(
    (x, y) => {
      if (mouseDown) {
        ctx.current.beginPath();
        ctx.current.strokeStyle = selectedColor;
        ctx.current.lineWidth = 10;
        ctx.current.lineJoin = 'round';
        ctx.current.moveTo(lastPosition.x, lastPosition.y);
        ctx.current.lineTo(x, y);
        ctx.current.closePath();
        ctx.current.stroke();

        setPosition({
          x,
          y,
        });
      }
    },
    [lastPosition, mouseDown, selectedColor, setPosition],
  );

  const download = async () => {
    const image = canvasRef.current.toDataURL('image/png');
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = 'image.png';
    link.click();
  };

  const onMouseDown = e => {
    setPosition({
      x: e.pageX,
      y: e.pageY,
    });
    setMouseDown(true);
  };
  const onMouseUp = e => {
    setMouseDown(false);
  };
  const onMouseMove = e => {
    draw(e.pageX, e.pageY);
  };
  const clear = () => {
    ctx.current.clearRect(
      0,
      0,
      ctx.current.canvas.width,
      ctx.current.canvas.height,
    );
  };

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
    }
  }, []);

  return (
    <div className="App">
      <canvas
        style={{
          border: '1px solid #000',
        }}
        width={400}
        height={400}
        ref={canvasRef}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseUp}
      />
      <br />
      <select
        value={selectedColor}
        onChange={e => setSelectedColor(e.target.value)}>
        {colors.map(color => (
          <option value={color}>{color}</option>
        ))}
      </select>
      <button onClick={clear}>Clear</button>
      <br />
      <button onClick={download}>Download</button>
    </div>
  );
}

export default App;
