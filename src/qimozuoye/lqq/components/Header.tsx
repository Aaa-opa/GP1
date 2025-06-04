import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface NavLink {
  text: string;
  href: string;
}

const links: NavLink[] = [
  { text: '首页', href: '#' },
  { text: '目的地', href: '#destinations' },
  { text: '服务', href: '#services' },
  { text: '评价', href: '#testimonials' },
  { text: '联系我们', href: '#contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-200 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          <i className="fa fa-paper-plane mr-10"></i>欢迎光临旅游网站
          <br/>Welcome to the travel website

        </a>
        
        {/* 桌面导航 */}
        <nav className="hidden md:flex space-x-8">
          {links.map(link => (
            <a
              key={link.text}
              href={link.href}
              className={`text-white hover:text-primary transition-colors ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {link.text}
            </a>
          ))}
        </nav>
        
        {/* 移动端菜单按钮 */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
        </button>
      </div>
      
      {/* 移动端导航菜单 */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {links.map(link => (
              <a
                key={link.text}
                href={link.href}
                className="text-gray-800 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;  