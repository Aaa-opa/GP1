import React from'react';
// 引入全局状态管理的 hook，用于获取和操作全局状态
import useStore from '../../globalState';

// 定义一个名为 Compo1G 的函数式组件
const Compo1G = () => {
    // 从全局状态存储中解构出 count（全局计数）、increaseCount（增加计数的函数）和 isDark（表示是否为暗黑主题的状态）
    const { count, increaseCount, isDark } = useStore();

    return (
        // 返回一个包含组件 UI 的 JSX 元素
        <div className={`p-4 border rounded-lg h-[200px] ${isDark? 'dark-theme' : 'light-theme'}`}>
            {/* 标题元素，显示组件的名称和功能描述 */}
            <h2 className="text-xl font-bold mb-4">组件1G</h2>
            {/* 段落元素，显示当前的全局计数值 */}
            <p className="mb-2">全局计数: {count}</p>
            {/* 按钮元素，点击时调用 increaseCount 函数来增加全局计数 */}
            <button
                className={`${
                    // 根据 isDark 的值来动态设置按钮的背景颜色类名
                    isDark? 'bg-blue-400' : 'bg-blue-500'
                } text-white px-4 py-2 rounded hover:opacity-90`}
                onClick={increaseCount}
            >
                增加
            </button>
        </div>
    );
};

// 导出 Compo1G 组件，使其可以在其他文件中被导入和使用
export default Compo1G;