import React, { useState, useEffect } from "react";
// 引入用于计算哈希值的函数
import calculateHash from '../HashMine'
// 引入全局状态管理的钩子函数，用于获取全局状态
import useStore from "../../globalState";

// 定义名为 HashMine 的函数式组件
const HashMine = () => {
    // 定义本地状态 hash，用于存储计算得到的哈希值前缀，初始值为空字符串
    const [hash, setHash] = useState<string>("");
    // 定义本地状态 mined，用于表示是否挖到了符合条件的哈希值，初始值为 false
    const [mined, setMined] = useState(false);
    // 从全局状态中解构出 isDark 状态，用于判断当前是否为暗黑模式
    const { isDark } = useStore();

    // useEffect 钩子函数，在组件挂载和 isDark 状态变化时执行
    useEffect(() => {
        let intervalId: any;
        // 如果当前是暗黑模式
        if (isDark) {
            // 设置一个定时器，每隔 100 毫秒执行一次挖矿操作（计算哈希值）
            intervalId = setInterval(async () => {
                // 生成一个 0 到 999999 之间的随机数
                const randomNumber = Math.floor(Math.random() * 1000000);
                // 将随机数转换为字符串作为计算哈希值的输入
                const input = `${randomNumber}`;
                // 异步计算输入的哈希值
                const newHash = await calculateHash(input);
                // 取哈希值的前四位作为哈希前缀
                const hashPrefix = newHash.slice(0, 4);
                // 更新 hash 状态为计算得到的哈希前缀
                setHash(hashPrefix);
                // 判断哈希前缀是否为 "0000"，如果是则更新 mined 状态为 true，否则为 false
                setMined(hashPrefix === "0000");
            }, 100);
        }

        // 组件卸载时的清理函数，清除定时器
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isDark]);

    return (
        // 返回一个包含组件 UI 的 JSX 元素，根据 isDark 的值动态设置组件的样式
        <div className={`w-1/5 max-w-xl text-center p-8 rounded-lg shadow-lg ${isDark? 'bg-gray-800 text-white' : 'bg-slate-200 border'}  border-gray-700`}>
            {/* 标题元素，根据 isDark 的值显示不同的文本 */}
            <h1 className="text-4xl font-bold text-green-500 mb-6">
                {isDark? "黑夜来临开始挖矿" : "白天休息停止挖矿"}
            </h1>
            {/* 段落元素，显示当前计算得到的哈希前缀 */}
            <p className="text-lg mb-4">
                当前哈希前四位: <span className="text-red-700 font-semibold">{hash}</span>
            </p>
        </div>
    );
};

// 导出 HashMine 组件，使其可以在其他文件中被导入和使用
export default HashMine;