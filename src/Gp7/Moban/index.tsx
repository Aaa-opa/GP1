import React, { useState, useCallback, memo } from'react';
// 假设 MyTitle 和 Sidebar 组件存在且已正确引入
import MyTitle from './MyTitle';
import Sidebar from './Sidebar';

// 本地图片切换器组件
const LocalImageSwitcher = () => {
    const imageData = [
        {
            url: "/img/02.jpg",
            description: "云峰",
            location: "sky.光遇 - 云野",
        },
        {
            url: "/img/01.jpg",
            description: "蝴蝶平原",
            location: "sky.光遇 - 云野"
        },
        {
            url: "/img/03.jpg",
            description: "秘密花园",
            location: "sky.光遇 - 雨林",
        },
        {
            url: "/img/04.jpg",
            description: "霞谷冰道",
            location: "sky.光遇 - 霞谷",
        },
        {
            url: "/img/05.jpg",
            description: "石壁",
            location: "sky.光遇 - 九色鹿季",
        },
        {
            url: "/img/06.jpg",
            description: "姆明季地图",
            location: "sky.光遇 - 姆明季",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0? imageData.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === imageData.length - 1? 0 : prev + 1));
    };

    return (
        <div className="flex flex-col items-center gap-6 p-6 max-w-3xl mx-auto bg-gradient-to-r from-pink-300 to-white rounded-xl shadow-md">
            {/* 图片容器 */}
            <div className="relative w-full h-80 overflow-hidden rounded-lg">
                <img
                    src={imageData[currentIndex].url}
                    alt={imageData[currentIndex].description}
                    className="w-full h-full object-cover transition-opacity duration-500"
                    key={currentIndex}
                />

                {/* 渐变遮罩简介层 */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white text-xl font-bold mb-1">
                        {imageData[currentIndex].location}
                    </h3>
                    <p className="text-white/90 mb-1">{imageData[currentIndex].description}</p >
                </div>
            </div>

            {/* 控制按钮组 */}
            <div className="flex gap-4">
                <button
                    onClick={prevImage}
                    className="px-5 py-2 bg-pink-300 text-white rounded-lg hover:bg-pink-200 transition-colors flex items-center"
                >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    上一张
                </button>

                <button
                    onClick={nextImage}
                    className="px-5 py-2 bg-pink-300 text-white rounded-lg hover:bg-pink-200 transition-colors flex items-center"
                >
                    下一张
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* 进度指示器 */}
            <div className="flex gap-2">
                {imageData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-8 rounded-full transition-all ${
                            index === currentIndex? "bg-pink-400" : "bg-white hover:bg-pink-100"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

const moban = () => {
    const sidebarTitle = "组成员";
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

    const [selectedMember, setSelectedMember] = useState(null);
    const [gridColumns, setGridColumns] = useState("grid-cols-1 md:grid-cols-2 lg:grid-cols-3");
    const [backgroundColor, setBackgroundColor] = useState("bg-gray-100");

    const changeGridColumns = () => {
        setGridColumns("grid-cols-1 md:grid-cols-1 lg:grid-cols-1");
    };

    const changeBackgroundColor = () => {
        setBackgroundColor("bg-yellow-100");
    };

    const handleMemberClick = useCallback((member) => {
        setSelectedMember(member);
    }, []);

    return (
        <div className="h-screen flex flex-col bg-gradient-to-b from-blue-500 to-pink-200">
            {/* 标题部分 */}
            <MyTitle />

            {/* 主体内容 */}
            <div className="flex flex-1 overflow-hidden">
                {/* 侧边栏 */}
                <Sidebar 
                    title={sidebarTitle} 
                    menuItems={menuItems} 
                    onMenuItemClick={handleMemberClick}
                />

                {/* 主内容区域 */}
                <div className={`flex-1 ${backgroundColor} p-4 overflow-auto`}>
                    <div className="flex gap-4 mb-4">
                        <button
                            onClick={changeGridColumns}
                            className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            改变图片布局
                        </button>
                        <button
                            onClick={changeBackgroundColor}
                            className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                        >
                            改变背景颜色
                        </button>
                    </div>
                    <div className={`grid ${gridColumns} gap-4`}>
                        <img
                            src="./img/001.jpg"
                            alt="蜡笔小新 001"
                            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
                        />
                        <img
                            src="./img/002.jpg"
                            alt="蜡笔小新 002"
                            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
                        />
                        <img
                            src="./img/003.jpg"
                            alt="蜡笔小新 003"
                            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
                        />
                        <img
                            src="./img/004.jpg"
                            alt="蜡笔小新 004"
                            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
                        />
                    </div>

                    {selectedMember && (
                        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                            <h2 className="text-lg font-bold">成员详情</h2>
                            <p>{`你点击了 ${selectedMember.label}`}</p>
                        </div>
                    )}

                    <LocalImageSwitcher />
                </div>
            </div>
        </div>
    );
};

export default moban;
