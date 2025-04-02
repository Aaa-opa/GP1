import { useState } from "react";

export default function LocalImageSwitcher() {
  // 本地图片数据数组（路径相对于public文件夹）
  const imageData = [
    {
      url: "/img/02.jpg", // 直接使用public下的路径
      description: "云峰",
      location: "sky.光遇-云野",
      
    },
    {
      url: "/img/01.jpg",
      description: "蝴蝶平原",
      location: "sky.光遇-云野"
      
    },
    {
      url: "/img/03.jpg",
      description: "秘密花园",
      location: "sky.光遇-雨林",
      
    },
    {
      url: "/img/04.jpg",
      description: "霞谷冰道",
      location: "sky.光遇-霞谷",
      
    },
    {
      url: "/img/05.jpg",
      description: "石壁",
      location: "sky.光遇-九色鹿季",
      
    },
    {
      url: "/img/06.jpg",
      description: "姆明季地图",
      location: "sky.光遇-姆明季",
      
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 切换逻辑
  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageData.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === imageData.length - 1 ? 0 : prev + 1));
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
              index === currentIndex ? "bg-pink-400" : "bg-white hover:bg-pink-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
