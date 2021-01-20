import React, { useState } from 'react';
// import './scss/App.scss';

function getRandomColor() {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box_color') || 'deeppink';
    console.log(initColor);
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('box_color', newColor);
  }

  return (
    <div className="ColorBox">
      <h2> Click để đổi màu (useState Hook) </h2>
      <div
        className="color-box"
        style={{ backgroundColor: color }}
        onClick={handleBoxClick}
      ></div>
    </div>
  );
}

export default ColorBox;
