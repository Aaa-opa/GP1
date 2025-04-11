import React, { useState } from'react';
// 引入全局状态管理的 hook，用于获取和操作全局状态
import useStore from '../../globalState';

// 定义一个名为 Compo2G 的函数式组件
const Compo2G = () => {
    // 从全局状态存储中解构出 todos（全局待办事项列表）、addTodo（添加待办事项的函数）和 isDark（表示是否为暗黑主题的状态）
    const { todos, addTodo, isDark } = useStore();
    // 定义一个本地状态 input，用于存储输入框中的内容，setInput 是更新该状态的函数
    const [input, setInput] = useState('');

    // 定义 handleAdd 函数，用于处理添加待办事项的逻辑
    const handleAdd = () => {
        // 检查输入框中的内容是否为空字符串（去除首尾空格后）
        if (input.trim()) {
            // 如果不为空，调用全局状态中的 addTodo 函数，将输入的内容添加到待办事项列表中
            addTodo(input.trim());
            // 清空输入框的内容，即将 input 状态设置为空字符串
            setInput('');
        }
    };

    return (
        // 返回一个包含组件 UI 的 JSX 元素
        <div className={`p-4 border rounded-lg h-[200px] ${isDark? 'dark-theme' : 'light-theme'}`}>
            {/* 标题元素，显示组件的名称和功能描述 */}
            <h2 className="text-xl font-bold mb-4">组件2G</h2>
            {/* 包含输入框和按钮的容器，使用 flex 布局 */}
            <div className="flex gap-2 mb-4">
                {/* 输入框元素，绑定了 input 状态和 onChange 事件，用于实时更新输入框内容 */}
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border p-2 rounded flex-1 text-black"
                    placeholder="输入待办事项"
                />
                {/* 按钮元素，点击时调用 handleAdd 函数来添加待办事项 */}
                <button
                    className={`${
                        // 根据 isDark 的值来动态设置按钮的背景颜色类名
                        isDark? 'bg-green-400' : 'bg-green-500'
                    } text-white px-4 py-2 rounded hover:opacity-90`}
                    onClick={handleAdd}
                >
                    添加
                </button>
            </div>
            {/* 无序列表元素，用于展示待办事项列表 */}
            <ul className="list-disc list-inside">
                {/* 使用 map 方法遍历 todos 数组，为每个待办事项生成一个列表项 */}
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

// 导出 Compo2G 组件，使其可以在其他文件中被导入和使用
export default Compo2G;