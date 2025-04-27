import React, { useState } from 'react';

function Whf() {
    // 定义一个图片地址数组，包含多张图片的地址
    const photos = [
        'https://picsum.photos/300/200?random=1',
        'https://picsum.photos/300/200?random=2',
        'https://picsum.photos/300/200?random=3',
        'https://picsum.photos/300/200?random=4'
    ];
    // 用于存储当前显示图片的索引，初始为 0
    const [index, setIndex] = useState(0);

    // 显示上一张图片的函数，当索引为 0 时切换到最后一张图片
    const showPrevious = () => {
        setIndex((prevIndex) => (prevIndex === 0? photos.length - 1 : prevIndex - 1));
    };

    // 显示下一张图片的函数，当索引为最后一张图片的索引时切换到第一张图片
    const showNext = () => {
        setIndex((prevIndex) => (prevIndex === photos.length - 1? 0 : prevIndex + 1));
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flexStart',
            height: '100vh',
            boxSizing: 'border-box',
            paddingTop: '50px',
        }}>
            <h1 style={{ marginBottom: '20px' }}>简单图片切换</h1>
            <img
                src={photos[index]}
                alt="展示图片"
                style={{ width: '300px', height: '200px', marginBottom: '20px' }}
            />
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={showPrevious} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>上一张</button>
                <button onClick={showNext} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>下一张</button>
            </div>
        </div>
    );
}

export default Whf;
