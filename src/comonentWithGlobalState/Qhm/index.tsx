import { useState } from "react";
import useStore from "./useStore";

export default function Qhm() {
  const imageData = [
    {
      url: "/img/02.jpg",
      description: "云峰",
      location: "sky.光遇-云野",
    },
    {
      url: "/img/01.jpg",
      description: "蝴蝶平原",
      location: "sky.光遇-云野",
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
  const [showOverlay, setShowOverlay] = useState(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageData.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === imageData.length - 1 ? 0 : prev + 1));
  };

  const { isDark, toggleTheme } = useStore();

  return (
    <div
      className={`relative flex flex-col items-center gap-6 p-6 max-w-3xl mx-auto rounded-xl shadow-md ${
        isDark
          ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-r from-pink-300 to-white"
      }`}
    >
      {/* 图片容器 */}
      <div className="relative w-full h-80 overflow-hidden rounded-lg">
        <img
          src={imageData[currentIndex].url}
          alt={imageData[currentIndex].description}
          className="w-full h-full object-cover transition-opacity duration-500"
          key={currentIndex}
        />

        {/* 右上角"其他"按钮 */}
        <button
          onClick={() => setShowOverlay(true)}
          className="absolute top-4 right-4 px-3 py-1 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
        >
          简介
        </button>

        {/* 渐变遮罩简介层 */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="text-white text-xl font-bold mb-1">
            {imageData[currentIndex].location}
          </h3>
          <p className="text-white/90 mb-1">{imageData[currentIndex].description}</p>
        </div>
      </div>

      {/* 控制按钮组 */}
      <div className="flex gap-4">
        <button
          onClick={prevImage}
          className={`px-5 py-2 ${
            isDark ? "bg-gray-700" : "bg-pink-300"
          } text-white rounded-lg hover:opacity-90 transition-colors flex items-center`}
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          上一张
        </button>

        <button
          onClick={nextImage}
          className={`px-5 py-2 ${
            isDark ? "bg-gray-700" : "bg-pink-300"
          } text-white rounded-lg hover:opacity-90 transition-colors flex items-center`}
        >
          下一张
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <button
          onClick={toggleTheme}
          className={`px-5 py-2 ${
            isDark ? "bg-yellow-400" : "bg-gray-800"
          } text-white rounded-lg hover:opacity-90 transition-colors flex items-center`}
        >
          {isDark ? "切换到明亮模式" : "切换到暗黑模式"}
        </button>
      </div>

      {/* 进度指示器 */}
      <div className="flex gap-2">
        {imageData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-8 rounded-full transition-all ${
              index === currentIndex
                ? isDark
                  ? "bg-yellow-400"
                  : "bg-pink-400"
                : isDark
                ? "bg-gray-600 hover:bg-gray-500"
                : "bg-white hover:bg-pink-100"
            }`}
          />
        ))}
      </div>

      {/* 全屏遮罩层 */}
      {showOverlay && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-8">
          <div className="bg-white rounded-xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowOverlay(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="text-2xl font-bold mb-4 text-pink-500">简介</h2>
            <div className="space-y-4">
              <p>
                《光·遇》是制作人陈星汉历时七年的全新力作。
                在《光·遇》中，你将开启一段最暖心纯粹的社交冒
                险体验。清新治愈的唯美画风，不期而遇的真挚美
                好，柔美的风云间充满着温暖与感动，唤醒你心中
                最柔软的部分。这是一场拥抱自由和温暖的云端之
                旅。与你心爱的人们携手，在这座旷世的天空王国
                中翱翔，爱的力量将支持你一路前行。
              </p>

              <p className="text-gray-600">
                开发者的话：
                亲爱的旅人们:爱让人走出孤岛！光遇姆明季年度重磅联动开启。
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
    