import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SearchResult {
  name: string;
  type: string;
  location: string;
}

const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 模拟搜索结果
    const mockResults: SearchResult[] = [
      { name: '巴厘岛', type: '目的地', location: '印度尼西亚' },
      { name: '巴黎', type: '目的地', location: '法国' },
      { name: '东京', type: '目的地', location: '日本' },
      { name: '希尔顿酒店', type: '酒店', location: '巴厘岛' },
      { name: '埃菲尔铁塔', type: '景点', location: '巴黎' },
    ].filter(result => 
      result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(mockResults);
    setShowResults(true);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://ts1.tc.mm.bing.net/th/id/R-C.61493cebddb4a302201083cc55eb3feb?rik=m2CoJy%2fk2HoDRQ&riu=http%3a%2f%2fpic5.bbzhi.com%2ffengjingbizhi%2fshanshuifengjingbizhi%2fshanshuifengjingbizhi_435593_12.jpg&ehk=7wnl68zYBJW%2bWiVMWIlgb%2b7NLmfImHtU%2bCVGqmSPD0M%3d&risl=&pid=ImgRaw&r=0"
          alt="壮丽的山脉风景"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white mb-6 leading-tight"
        >
          探索世界的每一个角落
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[clamp(1rem,2vw,1.25rem)] text-white/90 mb-8 max-w-2xl mx-auto"
        >
          与我们一起踏上难忘的旅程，发现令人惊叹的目的地，创造珍贵的回忆
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto relative"
        >
          <form onSubmit={handleSearch} className="bg-white rounded-full shadow-xl p-2 flex">
            <input
              type="text"
              placeholder="搜索目的地、酒店或景点..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value.length > 0) {
                  setShowResults(true);
                } else {
                  setShowResults(false);
                }
              }}
              className="flex-grow px-6 py-4 rounded-full focus:outline-none text-gray-800"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-full transition-colors duration-300"
            >
              搜索
            </button>
          </form>
          
          {showResults && searchQuery.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {searchResults.length > 0 ? (
                <div className="p-2">
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                    >
                      <h4 className="font-medium text-gray-800">{result.name}</h4>
                      <p className="text-sm text-gray-500">{result.type} · {result.location}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center">
                  <p className="text-gray-500">没有找到相关结果</p>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-10 left-0 right-0"
        >
          <a href="#destinations" className="text-white animate-bounce inline-block">
            <i className="fa fa-chevron-down text-3xl"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;  