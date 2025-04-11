import React from'react';
import MyTitle from '../comonentWithGlobalState/MyTitle/MyTitle';
import Sidebar from '../comonentWithGlobalState/Sidebar/Sidebar';
import ComponentWithGlobalState from '../ComponentWithGlobalState/ComponentWithGlobalState';

const Hhh = () => {
    // 定义左侧栏的标题和内容
    const sidebarTitle: string = "组成员";

    // 定义动态菜单项数据
    const menuItems = [
        { label: "韦小婧", link: "name 1" },
        { label: "黄佳敏", link: "name 2" },
        { label: "邢冬兰", link: "name 3" },
        { label: "伍慧芳", link: "name 4" },
        { label: "李琪琪", link: "name 5" },
        { label: "黄华静", link: "name 6" },
        { label: "叶嘉梦", link: "name 7" },
        { label: "覃慧敏", link: "name 8" },
    ];

    return (
        <div className="h-screen flex flex-col bg-gradient-to-b from-blue-500 to-pink-200">
            {/* 标题部分 */}
            <MyTitle />

            {/* 主体内容 */}
            <div className="flex flex-1 overflow-hidden">
                {/* 侧边栏 */}
                <Sidebar title={sidebarTitle} menuItems={menuItems} />

                {/* 主内容区域 */}
                <div className="flex-1 bg-gray-100 p-4 overflow-auto">
                    <ComponentWithGlobalState />
                </div>
            </div>
        </div>
    );
};

export default Hhh;