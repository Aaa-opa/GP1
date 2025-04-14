import React, { useState } from 'react';

function ImageSwitcher() {
  const photos = [
    'https://picsum.photos/300/200?random=1',
    'https://picsum.photos/300/200?random=2',
    'https://picsum.photos/300/200?random=3',
    'https://picsum.photos/300/200?random=4'
  ];

  const [index, setIndex] = useState(0);

  const showPrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const showNext = () => {
    setIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>简单图片切换</h1>
      <img 
        src={photos[index]} 
        alt="展示图片" 
        style={styles.image}
      />
      <div style={styles.buttonContainer}>
        <button onClick={showPrevious} style={styles.button}>上一张</button>
        <button onClick={showNext} style={styles.button}>下一张</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flexStart', // 修正为 camelCase
    height: '100vh',
    boxSizing: 'border-box',
    paddingTop: '50px' // 确保 paddingTop 正确
  },
  title: {
    marginBottom: '20px' // 修正为 camelCase
  },
  image: {
    width: '300px',
    height: '200px',
    marginBottom: '20px' // 修正为 camelCase
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px' // 如果需要兼容性，可以用 margin 替代 gap（旧版浏览器不支持 gap）
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default ImageSwitcher;
