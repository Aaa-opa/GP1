import React from 'react';  
  
const SimpleButton: React.FC = () => {  
 
  const handleClick = () => {  
    console.log('按钮被点击了!');  
  };  
  
  return (  
    <button onClick={handleClick} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>  
      点击我  
    </button>  
  );  
};  
  
export default SimpleButton;
