import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    setLoading(true);
    
    // 模拟API请求
    setTimeout(() => {
      setSubscribed(true);
      setLoading(false);
      setEmail('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <i className="fa fa-paper-plane-o text-9xl absolute top-10 left-10 text-white/20"></i>
          <i className="fa fa-compass text-7xl absolute bottom-20 right-20 text-white/20"></i>
          <i className="fa fa-map-o text-8xl absolute top-40 right-40 text-white/20"></i>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white mb-6"
          >
            订阅我们的旅行资讯
          </motion.h2>
          
          {!subscribed ? (
            <>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/80 mb-8 text-lg"
              >
                获取最新的旅行优惠、目的地指南和独家促销信息
              </motion.p>
              
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  placeholder="输入您的邮箱地址"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
                
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-8 py-4 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    loading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-primary mr-2"></div>
                      订阅中...
                    </div>
                  ) : (
                    '立即订阅'
                  )}
                </button>
              </motion.form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa fa-check text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">订阅成功！</h3>
              <p className="text-white/80 mb-6">
                感谢您的订阅，我们已向您的邮箱发送了确认邮件。
              </p>
              <button
                onClick={() => setSubscribed(false)}
                className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-medium rounded-lg transition-all duration-300"
              >
                返回
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;  