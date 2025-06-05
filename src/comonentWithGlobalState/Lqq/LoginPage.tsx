import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 模拟登录验证
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } else {
      setShowError(true);
      // 3秒后隐藏错误提示
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://pic1.zhimg.com/v2-6ee447f50c1439dca6c31242107ee6f6_r.jpg?source=1940ef5c)' }}>
 
      <div className="flex justify-center items-center h-full relative z-10">
        <motion.form
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleLogin}
          className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl w-96 space-y-6 transform hover:scale-[1.02] transition-all duration-300"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">欢迎回来</h2>
            <p className="text-gray-600">请登录您的账户继续浏览</p>
          </div>
          
          {/* 错误提示 */}
          {showError && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
            >
              <div className="flex items-center">
                <i className="fa fa-exclamation-circle mr-2"></i>
                <p className="text-sm">用户名或密码错误</p>
              </div>
            </motion.div>
          )}
          
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                用户名
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <i className="fa fa-user"></i>
                </span>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="请输入用户名"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                密码
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <i className="fa fa-lock"></i>
                </span>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="请输入密码"
                  required
                />
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all duration-300"
          >
            登录
          </button>
          
          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" />
              <span className="ml-2 text-sm text-gray-600">记住我</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">忘记密码?</a>
          </div>
          
          <div className="text-center text-sm text-gray-600">
            还没有账户? <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">立即注册</a>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default LoginPage;