import { useState, useEffect, useRef } from 'react';
import useStore from '../../globalState';

const Wxj = () => {
    const { volume, increaseVolume, decreaseVolume } = useStore();
    const [displayVolume, setDisplayVolume] = useState(volume);

    useEffect(() => {
        // 确保音量值在 1 - 100 范围内
        const validVolume = Math.min(Math.max(volume, 1), 100);
        setDisplayVolume(validVolume);
    }, [volume]);

    const handleIncreaseVolume = () => {
        increaseVolume();
    };

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
                className={`bg-red-500 text-white px-4 py-2 rounded hover:opacity-90`}
                onClick={handleDecreaseVolume}
            >
                减小音量
            </button>
        </div>
    );
};

export default Wxj;  