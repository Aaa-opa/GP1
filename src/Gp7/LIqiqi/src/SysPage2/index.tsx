import React from 'react';
import MyTitle from './MyTitle';
import NewContent from './NewContent';
import Sidebar from './Sidebar';
const SysPage2 = () => {
  // 定义左侧栏的标题和内容
  const sidebarTitle: string = "目录";

  // 定义动态菜单项数据
  const menuItems = [
    { label: "首页", link: "#home" },
    { label: "关于我们", link: "#about" },
    { label: "服务", link: "#services" },
    { label: "联系我们", link: "#contact" },
  ];

  return (
    <div className="h-screen flex flex-col">
      <MyTitle />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar title={sidebarTitle} menuItems={menuItems} />
        <div className="flex-1 bg-gray-100 p-4 overflow-auto">

        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <img src="./img/hua.jpeg" alt="Tourist Attraction" className="w-full h-80 object-cover rounded-md" />
            <h2 className="text-xl font-bold">黄山</h2>
            <p className="text-gray-600">黄山以奇松、怪石、云海、温泉“四绝”闻名于世。</p>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-1">
                    <span className="text-yellow-500">★★★★</span>
                    <span className="text-gray-500">(4.5 分)</span>
                </div>
                <a href="#" className="text-blue-500 hover:text-blue-600">查看详情</a>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default SysPage2;


/**
 * h-screen : 让最外层占满整个屏幕
 */