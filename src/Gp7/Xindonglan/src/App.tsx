import React from 'react';
import MyTitle from './SysPage2/MyTitle';
import NewContent from './SysPage2/NewContent';
import Sidebar from './SysPage2/Sidebar';
//=========================这块我的代码=========================================
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import My from './SysPage2/My';
import ImagePage from './SysPage2/ImagePage'; // 假设你已经创建了 ImagePage 组件
//================================================================

const SysPage2 = () => {
  // 定义左侧栏的标题和内容
  const sidebarTitle: string = "左侧栏标题";

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
            <NewContent></NewContent>


{/* 这块是我的代码 */}
            <Router>
      <Routes>
        <Route path="/" element={<My />} />
        <Route path="/image" element={<ImagePage />} />
      </Routes>
    </Router>



        </div>
      </div>
    </div>
  );
}

export default SysPage2;


/**
 * h-screen : 让最外层占满整个屏幕
 */