import React, { useState, useEffect } from 'react';
import './index.css';

interface SearchHistoryItem {
  term: string;
  timestamp: number;
}

// 按首字母分类的旅游景点数据
const POPULAR_TOURIST_SPOTS = [
  "北京故宫", "八达岭长城", "北海公园", "北戴河",
  "长城", "承德避暑山庄", "成都锦里", "重庆洪崖洞",
  "大理古城", "敦煌莫高窟", "大连老虎滩", "丹霞山",
  "峨眉山", "洱海", "恩施大峡谷", "二连浩特",
  "凤凰古城", "夫子庙", "福建土楼", "富春江",
  "故宫", "鼓浪屿", "桂林山水", "广州塔",
  "杭州西湖", "黄山", "华山", "衡山",
  "九寨沟", "井冈山", "景德镇", "镜泊湖",
  "喀纳斯湖", "昆明石林", "开封清明上河园", "崆峒山",
  "丽江古城", "庐山", "龙虎山", "漓江",
  "莫高窟", "漠河北极村", "明孝陵", "麦积山",
  "南京中山陵", "南浔古镇", "宁夏沙坡头", "南岳衡山",
  "平遥古城", "普陀山", "蓬莱阁", "盘山",
  "青岛崂山", "千岛湖", "秦皇岛北戴河", "青海湖",
  "日月潭", "热海温泉", "若尔盖草原", "瑞金",
  "三亚亚龙湾", "上海外滩", "苏州园林", "少林寺",
  "泰山", "天坛", "腾冲热海", "天柱山",
  "乌镇", "武夷山", "五台山", "武当山",
  "西安兵马俑", "西双版纳", "香格里拉", "雪乡",
  "阳朔西街", "云冈石窟", "玉龙雪山", "雁荡山",
  "张家界", "珠海长隆", "周庄古镇", "扎龙自然保护区"
];

const Index: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [showRecommendations, setShowRecommendations] = useState<boolean>(false);
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const LOCAL_STORAGE_KEY = 'searchHistory';

  // 初始化时加载历史记录
  useEffect(() => {
    const history = loadSearchHistory();
    setSearchHistory(history);
  }, []);

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
      // 更新现有项的时间戳
      history[existingItemIndex].timestamp = Date.now();
    } else {
      // 添加新项
      history.push({ term, timestamp: Date.now() });
    }
    
    // 按时间戳降序排序，保留最新的10条记录
    const sortedHistory = history.sort((a, b) => b.timestamp - a.timestamp).slice(0, 10);
    
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(sortedHistory));
    setSearchHistory(sortedHistory);
  };

  // 清除历史记录
  const clearSearchHistory = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setSearchHistory([]);
    setShowHistory(false);
  };

  // 获取首字匹配的推荐景点
  const getFirstCharRecommendations = (char: string): string[] => {
    return POPULAR_TOURIST_SPOTS.filter(spot => 
      spot[0] === char
    ).slice(0, 10);
  };

  // 处理搜索
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      saveSearchHistory(searchTerm.trim());
      alert(`正在搜索景点: ${searchTerm}`);
      setShowRecommendations(false);
      setShowHistory(false);
    }
  };

  // 处理输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.length === 0) {
      setShowRecommendations(false);
      return;
    }
    
    if (value.length === 1) {
      setRecommendations(getFirstCharRecommendations(value));
      setShowRecommendations(true);
    } else {
      const matchedSpots = POPULAR_TOURIST_SPOTS.filter(spot =>
        spot.includes(value)
      );
      setRecommendations(matchedSpots.slice(0, 8));
      setShowRecommendations(true);
    }
  };

  // 显示/隐藏历史记录
  const toggleHistory = () => {
    setShowHistory(!showHistory);
    setShowRecommendations(false);
  };

  // 从历史记录中选择
  const selectFromHistory = (term: string) => {
    setSearchTerm(term);
    setShowHistory(false);
  };

  return (
    <div className="search-container">
      <h2>旅游景点搜索</h2>
      <p className="search-tip">输入景点名称首字即可获得推荐</p>
      
      <form onSubmit={handleSearch}>
        <div className="search-input-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => searchTerm.length === 0 && setShowHistory(true)}
            placeholder="输入景点名称首字..."
            className="search-input"
            aria-haspopup="listbox"
            aria-expanded={showRecommendations || showHistory}
          />
          <button type="submit" className="search-button">
            搜索
          </button>
        </div>
      </form>
      
      <div className="history-controls">
        <button 
          onClick={toggleHistory}
          className="history-button"
        >
          {showHistory ? '隐藏历史' : '显示历史'}
        </button>
        {searchHistory.length > 0 && (
          <button 
            onClick={clearSearchHistory}
            className="clear-history-button"
          >
            清除历史
          </button>
        )}
      </div>
      
      {/* 历史记录面板 */}
      {showHistory && searchHistory.length > 0 && (
        <div className="history-panel">
          <h3>搜索历史</h3>
          <ul className="history-list">
            {searchHistory.map((item, index) => (
              <li
                key={index}
                onClick={() => selectFromHistory(item.term)}
                className="history-item"
              >
                {item.term}
                <span className="history-time">
                  {new Date(item.timestamp).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* 推荐列表 */}
      {showRecommendations && recommendations.length > 0 && (
        <ul className="recommendations-list" role="listbox">
          {recommendations.map((term, index) => (
            <li
              key={index}
              onClick={() => {
                setSearchTerm(term);
                saveSearchHistory(term);
                setShowRecommendations(false);
                alert(`正在搜索景点: ${term}`);
              }}
              className="recommendation-item"
              role="option"
            >
              {term}
              {POPULAR_TOURIST_SPOTS.includes(term) && (
                <span className="popular-tag">热门</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Index;