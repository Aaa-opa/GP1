import React from 'react';

const Photo = () => {
    const images = [
        { src: "/img/11.webp", desc: "橘子" },
        { src: "/img/12.webp", desc: "草莓" },
        { src: "/img/13.webp", desc: "桃子" },
        { src: "/img/14.webp", desc: "西梅" },
        { src: "/img/15.webp", desc: "芒果" },
        { src: "/img/16.webp", desc: "西瓜" },
    ];

    return (
        <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px',
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
        }}>
            {images.map((item) => (
                <div key={item.src} style={{ textAlign: 'center' }}>
                    <img 
                        src={item.src}
                        alt={item.desc}  // 使用描述作为alt文本
                        loading="lazy"
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            aspectRatio: '16/9', // 固定宽高比
                            objectFit: 'cover', // 防止图片变形
                             transition: 'transform 0.3s ease', // 悬停效果
                             cursor: 'pointer',
                        }}
                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <p style={{
                         margin: '10px  ', // 上下边距 
                         color: '#111' ,  
                         fontSize: '25px',  // 大小
                         textAlign: 'center' // 居中
                         }}>{item.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default Photo;
