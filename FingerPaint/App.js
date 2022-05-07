import React, {useLayoutEffect, useState} from 'react';
// import {View, Switch, Text, Stylesheet} from 'react-native';
import rough from 'roughjs/bundled/rough.esm';
// import styles from './styles';

const generator = rough.generator();

const App = () => {
  const [elements, setElements] = useState([]);

  useLayoutEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const roughCanvas = rough.canvas(canvas);
    const rect = generator.rectangle(10, 10, 100, 100);
    const line = generator.line(10, 10, 110, 100);
    roughCanvas.draw(rect);
    roughCanvas.draw(line);
  });

  return (
    <canvas id="canvas" width={window.innerWidth} height={window.innerHeight} >
      Canvas
    </canvas>
  );
};

export default App;
