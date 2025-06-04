import React from 'react';
import ReactDOM from 'react-dom/client';


const yjm = () => {



    // 定义动态导航菜单项数据
    const menuItems = [
        { label: "首页", link: "#home-page" },
        { label: "消息", link: "#message" },
        { label: "社区", link: "#community" },
        { label: "我的", link: "#profile" },
    ];

    return (
        <div
            className="h-screen flex flex-col"
            style={{
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            }}
        >
            {/* 标题区域 */}
            <header className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 shadow-lg">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                        万游旅游管理系统
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 text-center mt-2">
                        您有万游，万事无忧！
                    </p>
                </div>
            </header>

            {/* 导航菜单 */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <ul className="flex justify-center space-x-2 md:space-x-6 py-3">
                        {menuItems.map((item, index) => (
                            <li key={index} className="group">
                                <a
                                    href={item.link}
                                    className="px-3 py-2 md:px-4 md:py-3 text-sm md:text-base font-medium text-gray-600 hover:text-blue-600 transition-all duration-300 relative"
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* 主内容区域 */}
            <main className="flex-1 bg-gray-50 py-6">
                <div className="container mx-auto px-4">
                    {/* 首页内容 */}
                    <section id="home-page" className="mb-12 md:mb-16">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <img
                                src="https://ts2.tc.mm.bing.net/th/id/OIP-C.CvRqiJYD8X5HrtgIdXDSHgAAAA?r=0&rs=1&pid=ImgDetMain"
                                alt="旅游首页"
                                className="w-full h-64 md:h-96 object-cover"
                            />
                            <div className="p-6 md:p-8">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                                    欢迎来到万游旅游管理系统
                                </h2>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                                    我们提供全方位的旅游管理解决方案，从行程规划到客户管理，一切尽在掌握。
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                                        开始使用
                                    </button>
                                    <button className="px-6 py-2 bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-medium rounded-lg transition-colors">
                                        了解更多
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 消息内容 */}
                    <section id="message" className="mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 flex items-center">
                            <span className="mr-3">📨</span> 消息中心
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                                    <img
                                        src={`https://p3-search.byteimg.com/img/labis/ee365e6b61d7ab61baa325932c9d862f~480x480.JPEG`}
                                        alt="消息"
                                        className="w-full h-48 object-cover"

                                    />
                                    <div className="p-4 md:p-6">
                                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                            系统消息 {item}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            这里是消息内容的简要描述，您可以在这里查看最新的系统通知和更新。
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-500">2025-05-15</span>
                                            <button className="text-blue-600 hover:text-blue-800 transition-colors">
                                                查看详情 →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 社区内容 */}
                    <section id="community" className="mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 flex items-center">
                            <span className="mr-3">🌍</span> 旅游社区
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                                    <img
                                        src={`https://ts1.tc.mm.bing.net/th/id/R-C.21ce452231ab21c586fe17905a9f9753?rik=b98i4omDdNNk8A&riu=http%3a%2f%2fpic.qianye88.com%2f4kfengjing7d4f6439-6548-3602-9ced-fec0dc38dfcd.jpg&ehk=CsSWlUUvXKeGvRb5bo3X8OS1cFXALqxAf95iF9kcvEE%3d&risl=&pid=ImgRaw&r=0${item}`}
                                        alt="社区活动"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4 md:p-6">
                                        <div className="flex items-center mb-3">
                                            <img
                                                src="https://imgs.699pic.com/images/600/553/180.jpg!list1x.v2"
                                                alt="用户头像"
                                                className="w-10 h-10 rounded-full mr-3"
                                            />
                                            <div>
                                                <h3 className="text-lg font-semibold">旅行者{item}</h3>
                                                <p className="text-sm text-gray-500">2023-06-15</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mb-4">
                                            分享我的最新旅行经历，这次去了一个美丽的小岛...
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="text-sm text-gray-500 mr-2">💬 12</span>
                                                <span className="text-sm text-gray-500">❤️ 36</span>
                                            </div>
                                            <button className="text-blue-600 hover:text-blue-800 transition-colors">
                                                阅读更多 →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 个人资料内容 */}
                    <section id="profile" className="mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 flex items-center">
                            <span className="mr-3">👤</span> 个人中心
                        </h2>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row items-center md:items-start">
                                    <img
                                        src="https://ts1.tc.mm.bing.net/th/id/R-C.d21a392096fbc1b0dd56ab3d46e91a02?rik=ociJb1OHN0Kgkg&riu=http%3a%2f%2fpic.qianye88.com%2fpic%2f6a4e46b24cd62c9869330f3f1221ae18.jpg&ehk=YQpQMKApTq5uRx3gdgoPRLEAF0pu8ztmOoPVmbZzg74%3d&risl=&pid=ImgRaw&r=0"
                                        alt="用户头像"
                                        className="w-24 h-24 rounded-full mb-6 md:mb-0 md:mr-8"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-2">小夕</h3>
                                        <p className="text-gray-600 mb-4">高级旅游顾问</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                                                <p className="text-gray-500 text-sm">行程数量</p>
                                                <p className="text-2xl font-bold text-blue-600">128</p>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                                                <p className="text-gray-500 text-sm">客户数量</p>
                                                <p className="text-2xl font-bold text-blue-600">56</p>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                                                <p className="text-gray-500 text-sm">本月收入</p>
                                                <p className="text-2xl font-bold text-blue-600">¥28,560</p>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                                                <p className="text-gray-500 text-sm">满意度</p>
                                                <p className="text-2xl font-bold text-blue-600">98%</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-4">
                                            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                                                编辑资料
                                            </button>
                                            <button className="px-6 py-2 bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-medium rounded-lg transition-colors">
                                                查看统计
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* 页脚 */}
            <footer className="bg-gray-800 py-6 text-white">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm">
                        © 2025 万游旅游管理系统. 保留所有权利.
                    </p>
                </div>
            </footer>
        </div>
    );
};


export default yjm;
