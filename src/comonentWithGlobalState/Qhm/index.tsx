import React, { useState, useEffect } from 'react';

// 组件的 props 类型定义，isDark 表示是否为深色模式，默认为 false
interface Qhm {
    isDark?: boolean;
}

const Qhm: React.FC<Qhm> = ({ isDark = false }) => {
    // 用于存储当前的亮度值，初始为 1.0（即正常亮度）
    const [brightness, setBrightness] = useState(1.0);
    // 用于控制亮度控制面板的显示和隐藏，初始为 false
    const [showControl, setShowControl] = useState(false);

    // 副作用函数，当 brightness 变化时，更新页面的亮度滤镜效果
    useEffect(() => {
        const appElement = document.getElementById('root') || document.body;
        appElement.style.filter = `brightness(${brightness})`;
        appElement.style.transition = 'filter 0.3s ease';

        return () => {
            appElement.style.filter = '';
            appElement.style.transition = '';
        };
    }, [brightness]);

    return (
        <div className="relative">
            {/* 主控制按钮，点击时切换亮度控制面板的显示和隐藏 */}
            <button
                onClick={() => setShowControl(!showControl)}
                className={`p-2 rounded-full ${
                    isDark? 'bg-white hover:bg-pink-300' : 'bg-orange-300 hover:bg-white'
                }`}
                aria-label="亮度控制"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            </button>
            {/* 亮度控制面板，根据 showControl 的值决定是否显示 */}
            {showControl && (
                <div className={`absolute top-full right-0 mt-2 p-4 rounded-lg shadow-xl z-50 ${
                    isDark? 'bg-gray-800' : 'bg-white'
                }`}
                style={{ width: '200px' }}
                >
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">亮度</span>
                        <span className="text-sm font-medium">{Math.round(brightness * 100)}%</span>
                    </div>
                    <input
                        type="range"
                        min="0.1"
                        max="1.0"
                        step="0.05"
                        value={brightness}
                        onChange={(e) => setBrightness(parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        style={{
                            background: `linear-gradient(to right, #888 0%, #888 ${
                                ((brightness - 0.1) / 0.9) * 100
                            }%, #ccc ${((brightness - 0.1) / 0.9) * 100}%, #ccc 100%)`
                        }}
                    />
                    <div className="flex justify-between text-xs mt-1">
                        <span>10%</span>
                        <span>100%</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Qhm;