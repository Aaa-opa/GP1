// SearchWithRecommendations.tsx
import React, { useState, useEffect } from 'react';
import './index.css'; // 可选的样式文件

interface SearchHistoryItem {
  term: string;
  timestamp: number;
}

const index: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [showRecommendations, setShowRecommendations] = useState<boolean>(false);
  const LOCAL_STORAGE_KEY = 'searchHistory';

  // 从本地存储加载搜索历史
  const loadSearchHistory = (): SearchHistoryItem[] => {
    const history = localStorage.getItem(LOCAL_STORAGE_KEY);
    return history ? JSON.parse(history) : [];
  };

  // 保存搜索历史到本地存储
  const saveSearchHistory = (term: string) => {
    const history = loadSearchHistory();
    const existingItemIndex = history.findIndex(item => item.term.toLowerCase() === term.toLowerCase());
    
    if (existingItemIndex >= 0) {
      // 更新现有项的计数和时间戳
      history[existingItemIndex].timestamp = Date.now();
    } else {
      // 添加新项
      history.push({ term, timestamp: Date.now() });
    }
    
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(history));
  };

  // 获取推荐项（基于频率）
  const getRecommendations = (): string[] => {
    const history = loadSearchHistory();
    
    // 按频率排序（简单的实现：最近使用的排在前面）
    const sorted = [...history]
      .sort((a, b) => b.timestamp - a.timestamp)
      .map(item => item.term);
    
    // 去重并限制数量
    const unique = Array.from(new Set(sorted));
    return unique.slice(0, 5); // 返回前5个推荐
  };

  // 处理搜索
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      saveSearchHistory(searchTerm.trim());
      alert(`正在搜索: ${searchTerm}`); // 替换为实际的搜索逻辑
      setShowRecommendations(false);
    }
  };

  // 处理输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 0) {
      setRecommendations(getRecommendations());
      setShowRecommendations(true);
    } else {
      setShowRecommendations(false);
    }
  };

  // 选择推荐项
  const handleRecommendationClick = (term: string) => {
    setSearchTerm(term);
    saveSearchHistory(term);
    setShowRecommendations(false);
    alert(`正在搜索: ${term}`); // 替换为实际的搜索逻辑
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <div className="search-input-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="搜索..."
            className="search-input"
            aria-haspopup="listbox"
            aria-expanded={showRecommendations}
          />
          <button type="submit" className="search-button">
            搜索
          </button>
        </div>
      </form>
      
      {showRecommendations && recommendations.length > 0 && (
        <ul className="recommendations-list" role="listbox">
          {recommendations.map((term, index) => (
            <li
              key={index}
              onClick={() => handleRecommendationClick(term)}
              className="recommendation-item"
              role="option"
            >
              {term}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default index;