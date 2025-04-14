import React, { useState } from 'react';

const NumberZoom = () => {
  // 使用 useState 钩子来管理数字的大小比例
  const [scale, setScale] = useState(1.0); // 初始缩放比例为 1.0（原始大小）
  const [number, setNumber] = useState(10); // 初始数字为 10

  // 放大数字的函数
  const handleIncreaseScale = () => {
    setScale((prevScale) => Math.min(prevScale + 0.1, 3.0)); // 最大放大到 3 倍
  };

  // 缩小数字的函数
  const handleDecreaseScale = () => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.5)); // 最小缩小到 0.5 倍
  };

  // 增加数字的函数（可选，增加功能多样性）
  const handleIncreaseNumber = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  // 减少数字的函数（可选，增加功能多样性）
  const handleDecreaseNumber = () => {
    setNumber((prevNumber) => Math.max(prevNumber - 1, 0)); // 最小为 0
  };

  return (
    <div style={{
      textAlign: 'center',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#fff8dc', // 奶黄色背景
      border: '1px solid #ccc', // 可选：添加边框
      borderRadius: '8px', // 可选：添加圆角
      width: '300px', // 可选：设置固定宽度
    }}>
      <h1>数字放大缩小示例</h1>
      <div
        style={{
          display: 'inline-block',
          fontSize: '24px',
          transform: `scale(${scale})`,
          transition: 'transform 0.3s ease', // 平滑过渡效果
          margin: '20px 0',
        }}
      >
        {number}
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleDecreaseScale}>缩小</button>
        <button onClick={handleIncreaseScale} style={{ margin: '0 10px' }}>
          放大
        </button>
        <button onClick={handleDecreaseNumber} style={{ marginRight: '10px' }}>
          数字减一
        </button>
        <button onClick={handleIncreaseNumber}>数字加一</button>
      </div>
    </div>
  );
};

export default NumberZoom;