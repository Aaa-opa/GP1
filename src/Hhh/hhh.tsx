import React, { useState } from'react';
import MyTitle from '../comonentWithGlobalState/MyTitle/MyTitle';
import Sidebar from '../comonentWithGlobalState/Sidebar/Sidebar';
import ComponentWithGlobalState from '../ComponentWithGlobalState/ComponentWithGlobalState';

const Hhh = () => {
    // 定义左侧栏的标题和内容
    const sidebarTitle: string = "组成员";

    // 定义动态菜单项数据
    const menuItems = [
        { label: "韦小婧", link: "name 1" },
        { label: "黄佳敏", link: "name 2" },
        { label: "邢冬兰", link: "name 3" },
        { label: "伍慧芳", link: "name 4" },
        { label: "李琪琪", link: "name 5" },
        { label: "黄华静", link: "name 6" },
        { label: "叶嘉梦", link: "name 7" },
        { label: "覃慧敏", link: "name 8" },
    ];

    // 定义状态来记录当前背景颜色的索引，初始为 0
    const [colorIndex, setColorIndex] = useState(0);
    // 定义状态来记录按钮背景颜色的索引，初始为 0
    const [buttonColorIndex, setButtonColorIndex] = useState(0);

    // 定义四种渐变颜色的数组
    const gradientColors = [
        "linear-gradient(to bottom, #ffb6c1, #ff69b4)", // 渐变粉
        "linear-gradient(to bottom, #ff9933, #ffcc66)", // 渐变橙
        "linear-gradient(to bottom, #888888, #cccccc)", // 渐变灰
        "linear-gradient(to bottom, #9933ff, #cc66ff)"   // 渐变紫
    ];


    // 切换背景颜色的函数
    const toggleBackgroundColor = () => {
        setColorIndex((prevIndex) => (prevIndex + 1) % gradientColors.length);
        // 同时切换按钮的颜色
        setButtonColorIndex((prevIndex) => (prevIndex + 1) % gradientColors.length);
    };

    // 根据索引获取当前背景颜色样式
    const backgroundStyle = {
        background: gradientColors[colorIndex]
    };
    // 根据按钮颜色索引获取按钮的背景颜色样式
    const buttonBackgroundStyle = {
        background: gradientColors[buttonColorIndex],
        position: 'fixed',
        top: '4px',
        right: '4px',
        padding: '2px',
        color: '#ff69b4',
        borderRadius: '5px',
        cursor: 'pointer'
    };

    return (
        <div className="h-screen flex flex-col" style={backgroundStyle}>
            {/* 全局控制按钮 */}
            <button
                style={buttonBackgroundStyle}
                onClick={toggleBackgroundColor}
            >
                切换背景颜色
            </button>
            {/* 标题部分 */}
            <MyTitle />

            {/* 主体内容 */}
            <div className="flex flex-1 overflow-hidden">
                {/* 侧边栏 */}
                <Sidebar title={sidebarTitle} menuItems={menuItems} />

                {/* 主内容区域 */}
                
                    <ComponentWithGlobalState />
                </div>
            </div>
        
    );
};

export default Hhh;