import React, { useState, useEffect } from 'react';
import './ImageGallery.css'; // 确保CSS文件存在且路径正确

const ImageGallery = () => {
  // 图片数据（请确认图片路径是否正确）
  const images = [
    { src: "/img/h1.jpg", desc: "落日" },
    { src: "/img/h4.jpg", desc: "落日" },
    { src: "/img/h3.jpg", desc: "晚霞" },
    { src: "/img/h2.jpg", desc: "我叫汤圆" },
    { src: "/img/h5.jpg", desc: "我叫乖乖" },
    { src: "/img/h6.jpg", desc: "遇到一只三花猫" },
  ];

  // 状态管理：当前放大的图片
  const [zoomedImage, setZoomedImage] = useState<any>(null);

  // ESC键关闭放大视图
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setZoomedImage(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">🖼️ 治愈系瞬间</h2>
      
      {/* 图片网格布局 */}
      <div className="image-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="image-card"
            // 点击图片进入放大模式
            onClick={() => setZoomedImage(img)}
          >
            <img
              src={img.src}
              alt={img.desc}
              className="gallery-image"
            
            />
            <div className="image-caption">
              <p>{img.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 放大视图 */}
      {zoomedImage && (
        <div
          className="zoom-overlay"
          // 点击任意位置关闭
          onClick={() => setZoomedImage(null)}
        >
          <img
            src={zoomedImage.src}
            alt={zoomedImage.desc}
            className="zoom-image"
          />
          {/* 可选：添加描述文字 */}
          {/* <p className="zoom-desc">{zoomedImage.desc}</p> */}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;