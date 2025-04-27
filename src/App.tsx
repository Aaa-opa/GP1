import React, { useState } from 'react';
import Lqq from './comonentWithGlobalState/Lqq';
import Qhm from './comonentWithGlobalState/Qhm';
import Whf from './comonentWithGlobalState/Whf';
import Wxj from './comonentWithGlobalState/Wxj';
import Yjm from './comonentWithGlobalState/Yjm';
import Hhh from './Hhh/hhh';

// 主应用组件
const App: React.FC = () => {
    // 用于存储当前主题模式，true 表示深色模式，false 表示浅色模式
    const [isDarkMode, setIsDarkMode] = useState(false);

    // 切换主题模式的函数
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`app ${isDarkMode? 'dark-mode' : ''}`}>
           
            <Hhh></Hhh>
            {/* 颜色按钮组件，点击改变按钮颜色 */}

            
        </div>
    );
};

export default App;