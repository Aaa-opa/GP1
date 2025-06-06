import { useState, useEffect } from 'react';
import useStore from '../../globalState';

const Wxj = () => {
    // 从全局状态管理中获取音量值、减小音量函数和增大音量函数
    const { volume, decreaseVolume, increaseVolume } = useStore();
    // 用于存储当前显示的音量值，初始为从全局状态获取的音量值
    const [displayVolume, setDisplayVolume] = useState(volume);

    // 副作用函数，当 volume 变化时，确保音量值在 1 到 100 之间，并更新显示的音量值
    useEffect(() => {
        const validVolume = Math.min(Math.max(volume, 1), 100);
        setDisplayVolume(validVolume);
    }, [volume]);

    // 增大音量的函数，调用全局状态中的增大音量函数
    const handleIncreaseVolume = () => {
        increaseVolume();
    };

    // 减小音量的函数，调用全局状态中的减小音量函数
    const handleDecreaseVolume = () => {
        decreaseVolume();
    };

    return (
        <div className={`p-4 border rounded-lg bg-green-100`}>
            <h2 className="text-xl font-bold mb-4">组件 - 全局音量调节</h2>
            <p className="mb-2">当前音量: {displayVolume}</p>
            <button
                className={`bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:opacity-90`}
                onClick={handleIncreaseVolume}
            >
                增大音量
            </button>
            <button
                className={`bg-pink-500 text-white px-4 py-2 rounded hover:opacity-90`}
                onClick={handleDecreaseVolume}
            >
                减小音量
            
            </button>
        </div>
    );
};

export default Wxj;      