import React, { useState, useCallback, memo } from 'react';
import { Home, Settings, HelpCircle } from 'lucide-react';

// 登录组件
const Login = ({ onLogin }: { onLogin: (username: string, password: string) => void }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === 'abc' && password === '123456') {
            onLogin(username, password);
        } else {
            setErrorMessage('用户名或密码错误');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">登录</h2>
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        用户名
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="请输入用户名"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        密码
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="请输入密码"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    登录
                </button>
            </form>
        </div>
    );
};

// 导航栏组件
const Navbar = memo(() => {
    return (
        <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center flex-wrap">
                <h1 className="text-white text-2xl font-bold tracking-wide font-serif">系统页面 3</h1>
                <ul className="flex space-x-4 mt-0 md:mt-0">
                    <li>
                        <a
                            href="#"
                            className="flex items-center text-white hover:text-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                        >
                            <Home className="mr-1 h-5 w-5" />
                            首页
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center text-white hover:text-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                        >
                            <Settings className="mr-1 h-5 w-5" />
                            关于
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center text-white hover:text-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                        >
                            <HelpCircle className="mr-1 h-5 w-5" />
                            联系
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
});

// 侧边栏组件
const Sidebar = memo(({ onMenuItemClick, selectedMenuItem }: { onMenuItemClick: (itemLabel: string) => void; selectedMenuItem: string | null }) => {
    const menuItems = [
        { label: "仪表盘", link: "#dashboard", icon: <Home /> },
        { label: "设置", link: "#settings", icon: <Settings /> },
        { label: "帮助", link: "#help", icon: <HelpCircle /> },
    ];

    return (
        <aside className="bg-gray-900 text-white w-64 p-4 space-y-4 md:block hidden">
            <h2 className="text-xl font-bold mb-2 tracking-wide font-serif">侧边栏</h2>
            <ul className="space-y-2">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <a
                            href={item.link}
                            className={`flex items-center block py-2 px-3 rounded-md ${selectedMenuItem === item.label ? 'bg-blue-600' : 'hover:bg-gray-800'} transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20`}
                            onClick={(e) => {
                                e.preventDefault();
                                onMenuItemClick(item.label);
                            }}
                        >
                            <span className="mr-2 text-blue-400">{item.icon}</span>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
});

// 内容区域组件
const Content = memo(({ selectedMenuItem }: { selectedMenuItem: string | null }) => {
    return (
        <main className="flex-1 p-8 bg-gray-50 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-4 tracking-wide font-serif text-gray-800">主要内容</h2>
                {selectedMenuItem ? (
                    <p className="text-gray-700">你点击了 "{selectedMenuItem}" 菜单项。</p>
                ) : (
                    <p className="text-gray-700">这里是系统页面 3 的主要内容区域。你可以在此展示各种信息和功能。</p>
                )}
            </div>
        </main>
    );
});

const SysPage3 = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);

    const handleMenuItemClick = useCallback((itemLabel: string) => {
        setSelectedMenuItem(itemLabel);
    }, []);

    const handleLogin = (username: string, password: string) => {
        setIsLoggedIn(true);
    };

    if (!isLoggedIn) {
        return <Login onLogin={handleLogin} />;
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar onMenuItemClick={handleMenuItemClick} selectedMenuItem={selectedMenuItem} />
                <Content selectedMenuItem={selectedMenuItem} />
            </div>
        </div>
    );
};

export default SysPage3;   
