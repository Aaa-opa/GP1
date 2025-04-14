import React, { useState } from 'react';

function ColorButton() {
    const colors = ['#FFCCCC', '#99CC00', '#66CCCC', '#6699CC', '#996699'];
    const [currentIndex, setCurrentIndex] = useState(0);

    const gbys = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    return (
        <button
            style={{
                padding: '70px 50px',
                fontSize: '30px',
                backgroundColor: colors[currentIndex],
                color: 'BLACK',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
            }}
            onClick={gbys}
        >
            点击改变颜色
        </button>
    );
}

export default ColorButton;
