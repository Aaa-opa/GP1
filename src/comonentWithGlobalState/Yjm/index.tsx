import React, { useState } from 'react';

function TextSize() {
  // 定义文字大小状态，默认16px
  const [fontSize, setFontSize] = useState(16);
  
  return (
    <div style={{ padding: '20px' }}>
      {/* 文本框显示，使用动态字体大小 */}
      <div 
        style={{ 
          fontSize: `${fontSize}px`,
          border: '1px solid #ccc',
          padding: '10px',
          margin: '10px 0',
          minHeight: '50px'
        }}
      >
        这段文字的大小是 {fontSize}px
      </div>
      
      {/* 控制按钮 */}
      <button onClick={() => setFontSize(fontSize + 2)}>增大文字</button>
      <button 
        onClick={() => setFontSize(Math.max(10, fontSize - 2))} 
        style={{ marginLeft: '10px' }}
      >
        减小文字
      </button>
      
      {/* 直接输入大小 */}
      <div style={{ marginTop: '10px' }}>
        <input 
          type="number" 
          value={fontSize} 
          onChange={(e) => setFontSize(Math.max(10, parseInt(e.target.value) || 16))}
          style={{ width: '60px', marginRight: '10px' }}
        />
        <span>px</span>
      </div>
    </div>
  );
}

export default TextSize;
