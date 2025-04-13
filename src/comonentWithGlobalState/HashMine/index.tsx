import React, { useState, useEffect } from "react";
import calculateHash from "./hashUtil";
import useStore from "../../globalState";

const HashMine = () => {
  const [hash, setHash] = useState<string>("");
  const [mined, setMined] = useState(false);
  const { isDark } = useStore();

  useEffect(() => {
    let intervalId: any;
    if (isDark) {
      intervalId = setInterval(async () => {
        const randomNumber = Math.floor(Math.random() * 1000000);
        const input = `${randomNumber}`;
        const newHash = await calculateHash(input);
        const hashPrefix = newHash.slice(0, 4);
        setHash(hashPrefix);
        setMined(hashPrefix === "0000");
      }, 100); 
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isDark]);

  return (
    <div className={`w-1/5 max-w-xl text-center p-8 rounded-lg shadow-lg ${isDark ? 'bg-gray-800 text-white' : 'bg-slate-200 border'}  border-gray-700`}>
      <h1 className="text-4xl font-bold text-green-500 mb-6">
        {isDark ? "黑夜来临开始挖矿" : "白天休息停止挖矿"}
      </h1>
      <p className="text-lg mb-4">
        当前哈希前四位: <span className="text-red-700 font-semibold">{hash}</span>
      </p>
    </div>
  );
};

export default HashMine;
