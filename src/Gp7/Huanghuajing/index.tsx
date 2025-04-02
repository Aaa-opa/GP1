import React from 'react';

const Photo = () => {
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <img 
        src="/11.jpg"   
        alt="我的图片"
        style={{ 
          maxWidth: '70%',
          height: 'auto',

          borderRadius: '4px'
        }}
      />
    </div>
  );
};

export default Photo;
