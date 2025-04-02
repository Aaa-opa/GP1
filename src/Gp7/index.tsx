import { useState } from "react";

function BoxGenerator() {
  const [count, setCount] = useState(0);
  const [activeBox, setActiveBox] = useState(null);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-8 px-4">
      {/* 美化后的按钮 */}
        <button
        type="button"
        className="px-6 py-3 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-300"
        onClick={() => setCount(count + 1)}
      >
        <span className="inline-flex items-center space-x-2">
          <svg className="w-10 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 4v16m8-8h-2.5v-1.5a1.5 1.5 0 00-3 0V12H10V9.5a1.5 1.5 0 00-3 0V12H6V9.5a1.5 1.5 0 00-3 0V12H4V4h16z"/>
          </svg>
          <span>添加方块</span>
        </span>
      </button>

      {/* 美化后的方块容器 */}
      <div className="flex flex-wrap gap-4 mt-8 max-w-4xl w-full">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`w-16 h-16 relative cursor-pointer transition-transform duration-300 ease-in-out transform ${
              activeBox === index ? 'scale-110' : ''
            }`}
            onClick={() => setActiveBox(index)}
            style={{
              animation: `boxFloat ${Math.random() * 2 + 1}s ease-in-out infinite`,
              background: `linear-gradient(45deg, #ff6b6b, #4ecdc4)`
            }}
          >
            {/* 添加序号显示 */}
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
              {index + 1}
            </span>

            {/* 添加点击反馈光环 */}
            <div className={`absolute inset-0 rounded-xl ${
              activeBox === index ? 'border-4 border-purple-400' : ''
            }`} />
          </div>
        ))}
      </div>

      {/* 添加浮动动画 */}
      <style>{`
        @keyframes boxFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-4px) scale(1.02); }
        }
      `}</style>
    </div>
  );
}

export default BoxGenerator;
