import React, { useState, useEffect } from "react";
// 引入用于计算哈希值的工具函数，该函数应该在 hashUtil 文件中定义
import calculateHash from "./hashUtil";
// 引入全局状态管理的 hook，用于获取全局状态
import useStore from "../../globalState";

// 定义一个名为 HashMine 的函数式组件
const HashMine = () => {
    // 使用 useState 钩子来定义局部状态 hash，初始值为空字符串，用于存储当前计算得到的哈希值的前四位
    const [hash, setHash] = useState<string>("");
    // 使用 useState 钩子来定义局部状态 mined，初始值为 false，用于表示是否挖到了符合条件的哈希值（前四位为 0000）
    const [mined, setMined] = useState(false);
    // 从全局状态中获取 isDark 状态，用于判断当前是否处于暗黑模式
    const { isDark } = useStore();

    // 使用 useEffect 钩子，它会在组件挂载、更新以及卸载时执行副作用操作
    useEffect(() => {
        // 定义一个变量用于存储定时器的 ID，方便后续清除定时器
        let intervalId: any;

        // 如果当前处于暗黑模式
        if (isDark) {
            // 设置一个定时器，每隔 100 毫秒执行一次异步函数
            intervalId = setInterval(async () => {
                // 生成一个 0 到 999999 之间的随机整数
                const randomNumber = Math.floor(Math.random() * 1000000);
                // 将随机数转换为字符串，作为计算哈希值的输入
                const input = `${randomNumber}`;
                // 调用 calculateHash 函数异步计算输入的哈希值
                const newHash = await calculateHash(input);
                // 截取计算得到的哈希值的前四位
                const hashPrefix = newHash.slice(0, 4);
                // 更新 hash 状态为新的哈希前缀
                setHash(hashPrefix);
                // 判断新的哈希前缀是否为 "0000"，并更新 mined 状态
                setMined(hashPrefix === "0000");
            }, 100);
        }

        // 返回一个清理函数，在组件卸载或 isDark 状态改变时执行
        return () => {
            // 如果定时器 ID 存在，清除该定时器，避免内存泄漏
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isDark]);

    // 返回组件的 JSX 结构
    return (
        <div
            // 根据 isDark 状态动态设置组件的样式类名
            className={`w-1/5 max-w-xl text-center p-8 rounded-lg shadow-lg ${isDark ? 'bg-gray-800 text-white' : 'bg-slate-200 border'}  border-gray-700`}
        >
            {/* 显示标题，根据 isDark 状态显示不同的文本 */}
            <h1 className="text-4xl font-bold text-green-500 mb-6">
                {isDark ? "黑夜来临开始挖矿" : "白天休息停止挖矿"}
            </h1>
            {/* 显示当前的哈希前缀 */}
            <p className="text-lg mb-4">
                当前哈希前四位: <span className="text-red-700 font-semibold">{hash}</span>
            </p>
        </div>
    );
};

// 导出 HashMine 组件，以便在其他文件中使用
export default HashMine;
