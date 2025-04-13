import React, { useState, useEffect } from'react';
// 引入全局状态管理的 hook，用于获取和操作全局状态
import useStore from '../../globalState';

// 定义名为 Compo3G 的函数式组件
const Compo3G = () => {
    // 从全局状态存储中解构出 isDark（表示当前主题是否为暗黑模式的状态）、
    // toggleTheme（用于切换主题的函数）、count（全局计数）、todos（全局待办事项列表）
    const { isDark, toggleTheme, count, todos } = useStore();

    return (
        // 返回一个包含组件 UI 的 JSX 元素，根据 isDark 的值动态设置组件的样式类名
        <div className={`p-4 border rounded-lg ${isDark? 'dark-theme' : 'light-theme'}`}>
            {/* 标题元素，显示该组件的名称和主要功能描述 */}
            <h2 className="text-xl font-bold mb-4">总工程</h2>
            {/* 段落元素，显示当前的全局计数值 */}
            <p className="mb-2">共计数: {count}</p>
            {/* 段落元素，显示全局待办事项的数量 */}
            <p className="mb-2">待完成事件: {todos.length}</p>
            {/* 按钮元素，点击时调用 toggleTheme 函数来切换全局主题 */}
            <button
                // 根据 isDark 的值动态设置按钮的背景颜色和文本颜色相关的样式类名
                className={`${
                    isDark? 'bg-yellow-400' : 'bg-gray-800 text-white'
                } px-4 py-2 rounded hover:opacity-90`}
                onClick={toggleTheme}
            >
                全主题
            </button>
        </div>
    );
};

// 导出 Compo3G 组件，以便在其他文件中可以导入和使用该组件
export default Compo3G;
