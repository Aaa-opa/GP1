import React from 'react';
import MyTitle from './MyTitle';
import Sidebar from './Sidebar';

const SysPage2 = () => {
  // 定义左侧栏的标题和内容
  const sidebarTitle: string = "海绵宝宝";

  // 定义动态菜单项数据
  const menuItems = [
    { label: "自我介绍", link: "#I" },
    { label: "我的朋友", link: "#baby" },
    { label: "我的工作", link: "#job" },
  ];

  return (
    <div
      className="h-screen flex flex-col"
      style={{
        background: 'linear-gradient(to bottom, #87CEEB, #1E90FF)',
      }}
    >
      {/* 标题区域 */}
      <MyTitle />

      {/* 内容区域 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 侧边栏 */}
        <Sidebar title={sidebarTitle} menuItems={menuItems} />

        {/* 主内容区域 */}
        <div className="flex-1 bg-gray-100 p-4 overflow-auto">


          {/* 自我介绍 */}
          <div id="I" className="mb-2">
            <h2 className="text-3xl font-bold mb-4">自我介绍</h2>
            <p className="text-4xl mb-4">Hi everyone, I'm SpongeBob!</p>
            <img src="public/海绵宝宝2.jpg" text-white h-full />

          </div>
          {/* 锚点目标 1 */}
          <div id="baby" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">我的朋友</h2>
            <p className="text-4xl mb-4">这里是关于我和朋友的图片。</p>
            <div className=' grid grid-cols-2 gap-10'>
              <img src="public/海绵宝宝1.jpg" width="450" />
              <img src="public/海绵宝宝2.jpg" width="450" />
              <img src="public/海绵宝宝3.jpg" width="450" />
              <img src="public/朋友.jpg" width="450" />

            </div>

          </div>

          {/* 锚点目标 2 */}
          <div id="job" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">我的工作</h2>
            <p className="text-4xl mb-4">这里是关于我的工作的内容。</p>
            <div className='grid grid-cols-2 gap-4'>
              <img src="public/工作2.jpg" width="450" />
              <img src="public/工作1.jpg" width="450" />
            </div>

          </div>


        </div>
      </div>
    </div>
  );
};

export default SysPage2;