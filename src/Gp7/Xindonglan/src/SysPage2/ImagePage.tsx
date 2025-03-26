import React from 'react';
import { useNavigate } from 'react-router-dom';

const ImagePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // 返回主页
  };

  return (
    <div>
      <h1>这是我的图片</h1>
      <img
        src="/image.png" // 图片路径，确保图片放在 public 目录下
        alt="我的图片"
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
      />
      <br />
      <button onClick={handleBack}>返回</button>
    </div>
  );
};

export default ImagePage;