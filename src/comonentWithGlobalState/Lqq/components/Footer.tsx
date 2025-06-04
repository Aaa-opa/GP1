import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Travel</h3>
            <p className="text-gray-400 mb-6">
              我们致力于为您提供最优质的旅行体验，探索世界各地的美丽风景。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">快速链接</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">首页</a>
              </li>
              <li>
                <a href="#destinations" className="text-gray-400 hover:text-white transition-colors">目的地</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">服务</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">评价</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">联系我们</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">热门目的地</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">重庆，重庆</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">广州，广东</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">三亚，海南</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">成都，四川</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">杭州，浙江</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa fa-map-marker mt-1 mr-3 text-gray-400"></i>
                <span className="text-gray-400">广西民族大学相思湖学院</span>
              </li>
              <li className="flex items-center">
                <i className="fa fa-phone mr-3 text-gray-400"></i>
                <span className="text-gray-400">+86 10 8888 8888</span>
              </li>
              <li className="flex items-center">
                <i className="fa fa-envelope mr-3 text-gray-400"></i>
                <span className="text-gray-400">info@travel.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; 2025 Travel. 保留所有权利。
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">隐私政策</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">服务条款</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie政策</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  