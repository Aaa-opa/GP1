import React, { useState, useEffect } from 'react';
import { 
  Bell, MessageSquare, Mail, CheckCircle, Home, 
  Airplay, User, Circle, Settings, CreditCard, 
  Star, MapPin, Calendar, 
  CreditCard as CreditCardIcon, Gift,
} from 'react-feather';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// 消息数据类型
interface Message {
  id: number;
  type: 'system' | 'order' | 'promotion';
  title: string;
  content: string;
  time: string;
  read: boolean;
  icon: JSX.Element;
}

// 用户数据类型
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  vipLevel: '普通会员' | '黄金会员' | '白金会员';
  points: number;
  orders: number;
  coupons: number;
}

// 行程数据类型
interface Trip {
  id: number;
  name: string;
  status: '进行中' | '已完成' | '未开始';
  startDate: string;
  endDate: string;
  days: number;
  flightTo?: {
    airline: string;
    flightNumber: string;
    departure: string;
    arrival: string;
    departureTime: string;
    arrivalTime: string;
  };
  hotel?: {
    name: string;
    checkIn: string;
    checkOut: string;
  };
  flightBack?: {
    airline: string;
    flightNumber: string;
    departure: string;
    arrival: string;
    departureTime: string;
    arrivalTime: string;
  };
}

const App: React.FC = () => {
  // 当前路径
  const location = useLocation();
  
  // 消息分类状态
  const [activeTab, setActiveTab] = useState<'all' | 'system' | 'order' | 'promotion'>('all');
  
  // 模拟消息数据
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'system',
      title: '系统通知',
      content: '您的账号已通过实名认证，现在可以享受更多会员权益',
      time: '10:30',
      read: false,
      icon: <Bell size={18} className="text-blue-500" />
    },
    {
      id: 2,
      type: 'order',
      title: '订单确认',
      content: '您预订的北京至上海航班已出票，订单号：CTRIP20230001',
      time: '昨天',
      read: false,
      icon: <CheckCircle size={18} className="text-green-500" />
    },
    {
      id: 3,
      type: 'promotion',
      title: '限时特惠',
      content: '五一假期酒店5折起，立即预订享受优惠',
      time: '4月20日',
      read: true,
      icon: <Mail size={18} className="text-orange-500" />
    },
    {
      id: 4,
      type: 'order',
      title: '行程提醒',
      content: '您明天有前往三亚的航班，请提前2小时到达机场',
      time: '4月19日',
      read: true,
      icon: <CheckCircle size={18} className="text-green-500" />
    },
    {
      id: 5,
      type: 'system',
      title: '安全提醒',
      content: '检测到您的账号在异地登录，如非本人操作请立即修改密码',
      time: '4月18日',
      read: true,
      icon: <Bell size={18} className="text-blue-500" />
    },
    {
      id: 6,
      type: 'order',
      title: '退款通知',
      content: '您的订单CTRIP20230002已成功退款，款项将在3-5个工作日内到账',
      time: '4月17日',
      read: false,
      icon: <CheckCircle size={18} className="text-green-500" />
    },
    {
      id: 7,
      type: 'promotion',
      title: '会员专享',
      content: '您已升级为黄金会员，可享受优先预订和专属客服服务',
      time: '4月15日',
      read: false,
      icon: <Mail size={18} className="text-orange-500" />
    }
  ]);

  // 模拟用户数据
  const [currentUser, setCurrentUser] = useState<User>({
    id: 1,
    name: '张三',
    email: 'zhangsan@example.com',
    phone: '13800138000',
    avatar: 'https://picsum.photos/seed/user1/200/200',
    vipLevel: '黄金会员',
    points: 2580,
    orders: 12,
    coupons: 8
  });

  // 模拟行程数据
  const [trips, setTrips] = useState<Trip[]>([
    {
      id: 1,
      name: '上海之旅',
      status: '进行中',
      startDate: '2025年6月10日',
      endDate: '2025年6月15日',
      days: 5,
      flightTo: {
        airline: '东方航空',
        flightNumber: 'MU5101',
        departure: '北京首都国际机场',
        arrival: '上海虹桥国际机场',
        departureTime: '08:30',
        arrivalTime: '10:45'
      },
      hotel: {
        name: '上海外滩华尔道夫酒店',
        checkIn: '2025年6月10日',
        checkOut: '2025年6月15日'
      },
      flightBack: {
        airline: '东方航空',
        flightNumber: 'MU5102',
        departure: '上海虹桥国际机场',
        arrival: '北京首都国际机场',
        departureTime: '16:30',
        arrivalTime: '18:45'
      }
    },
    {
      id: 2,
      name: '三亚度假',
      status: '未开始',
      startDate: '2025年7月20日',
      endDate: '2025年7月25日',
      days: 6,
      flightTo: {
        airline: '南方航空',
        flightNumber: 'CZ3952',
        departure: '北京首都国际机场',
        arrival: '三亚凤凰国际机场',
        departureTime: '10:15',
        arrivalTime: '13:45'
      },
      hotel: {
        name: '三亚亚特兰蒂斯度假酒店',
        checkIn: '2025年7月20日',
        checkOut: '2025年7月25日'
      },
      flightBack: {
        airline: '南方航空',
        flightNumber: 'CZ3953',
        departure: '三亚凤凰国际机场',
        arrival: '北京首都国际机场',
        departureTime: '15:45',
        arrivalTime: '19:15'
      }
    }
  ]);

  // 计算各分类未读消息数量
  const [unreadCounts, setUnreadCounts] = useState({
    all: 0,
    system: 0,
    order: 0,
    promotion: 0
  });

  // 计算未读消息数量
  useEffect(() => {
    const systemUnread = messages.filter(msg => msg.type === 'system' && !msg.read).length;
    const orderUnread = messages.filter(msg => msg.type === 'order' && !msg.read).length;
    const promotionUnread = messages.filter(msg => msg.type === 'promotion' && !msg.read).length;
    
    setUnreadCounts({
      all: systemUnread + orderUnread + promotionUnread,
      system: systemUnread,
      order: orderUnread,
      promotion: promotionUnread
    });
  }, [messages]);

  // 标记消息为已读
  const markAsRead = (id: number) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, read: true } : msg
    ));
  };

  // 标记全部已读
  const markAllAsRead = () => {
    if (messages.some(msg => !msg.read)) {
      setMessages(messages.map(msg => ({ ...msg, read: true })));
      alert('已将所有消息标记为已读');
    }
  };

  // 添加新消息（模拟消息推送）
  const pushNewMessage = (message: Message) => {
    setMessages([message, ...messages]);
    // 显示通知提示
    alert(`您有一条新消息: ${message.title}`);
  };

  // 模拟定时推送消息
  useEffect(() => {
    const interval = setInterval(() => {
      // 随机推送消息
      const randomType = ['system', 'order', 'promotion'][Math.floor(Math.random() * 3)];
      const newMessage: Message = {
        id: messages.length + 1,
        type: randomType as 'system' | 'order' | 'promotion',
        title: randomType === 'system' ? '系统维护通知' : 
               randomType === 'order' ? '航班延误提醒' : '限时特惠活动',
        content: randomType === 'system' ? '系统将于今晚23:00-次日01:00进行维护，期间可能无法正常使用服务' : 
                 randomType === 'order' ? '您预订的CA1234航班因天气原因延误至14:30起飞' : '限时特惠！预订三亚酒店立减300元，活动截止至本周五',
        time: '刚刚',
        read: false,
        icon: randomType === 'system' ? <Bell size={18} className="text-blue-500" /> : 
                randomType === 'order' ? <CheckCircle size={18} className="text-green-500" /> : 
                <Mail size={18} className="text-orange-500" />
      };
      pushNewMessage(newMessage);
    }, 300000); // 每5分钟推送一条消息

    return () => clearInterval(interval);
  }, [messages]);

  // 更新用户信息
  const updateUserInfo = (userInfo: Partial<User>) => {
    setCurrentUser(prevUser => ({
      ...prevUser,
      ...userInfo
    }));
    alert('用户信息更新成功');
  };

  // 过滤显示的消息
  const filteredMessages = messages.filter(msg => 
    activeTab === 'all' || msg.type === activeTab
  );

  // 当前激活的导航项
  const [activeNav, setActiveNav] = useState('message');

  // 导航切换
  const navigateTo = (route: string) => {
    setActiveNav(route);
  };

  return (
    <Router>
      <div className="w-[375px] mx-auto bg-gray-50 min-h-screen relative overflow-hidden font-sans">
        {/* 顶部标题栏 */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 sticky top-0 z-10 shadow-md">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">
              {activeNav === 'message' ? '消息中心' : 
               activeNav === 'home' ? '首页' :
               activeNav === 'flights' ? '机票预订' :
               activeNav === 'hotels' ? '酒店预订' :
               activeNav === 'trips' ? '我的行程' :
               activeNav === 'profile' ? '我的' : '未知页面'}
            </h1>
            {activeNav === 'message' && unreadCounts.all > 0 && (
              <button 
                className="text-white text-sm bg-blue-800 px-3 py-1 rounded-full transition-all hover:bg-blue-900"
                onClick={markAllAsRead}
              >
                全部已读
              </button>
            )}
          </div>
        </div>
        
        {/* 主要内容区域 */}
        <div className="min-h-[calc(100vh-88px)]">
          {/* 首页视图 */}
          {activeNav === 'home' && (
            <div className="p-4">
              {/* 欢迎信息 */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 mb-4 rounded-xl">
                <div className="flex items-center">
                  <img src={currentUser.avatar} alt="用户头像" className="w-12 h-12 rounded-full border-2 border-white" />
                  <div className="ml-3">
                    <h2 className="text-lg font-bold">{currentUser.name}</h2>
                    <div className="flex items-center mt-1">
                      <span className="text-blue-100 text-sm">{currentUser.vipLevel}</span>
                      <span className="ml-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full">
                        积分 {currentUser.points}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-blue-100 mt-3">发现世界的美好，从这里开始</p>
              </div>
              
              {/* 快捷功能区 */}
              <div className="grid grid-cols-4 gap-2 p-4 mb-4">
                <button className="flex flex-col items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" onClick={() => navigateTo('flights')}>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <Plane size={20} className="text-blue-600" />
                  </div>
                  <span className="text-xs">机票</span>
                </button>
                <button className="flex flex-col items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" onClick={() => navigateTo('hotels')}>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <Hotel size={20} className="text-blue-600" />
                  </div>
                  <span className="text-xs">酒店</span>
                </button>
                <button className="flex flex-col items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow" onClick={() => navigateTo('trips')}>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                  <span className="text-xs">行程</span>
                </button>
                <button className="flex flex-col items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <Gift size={20} className="text-blue-600" />
                  </div>
                  <span className="text-xs">特惠</span>
                </button>
              </div>
              
              {/* 热门目的地 */}
              <div className="p-4 mb-4">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-semibold text-gray-800">热门目的地</h2>
                  <a href="#" className="text-blue-600 text-sm">查看更多</a>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer">
                    <img src="https://picsum.photos/seed/shanghai/400/200" alt="上海风景" className="w-full h-24 object-cover" />
                    <div className="p-3">
                      <h3 className="font-medium">上海</h3>
                      <p className="text-xs text-gray-500">¥540起</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer">
                    <img src="https://picsum.photos/seed/guangzhou/400/200" alt="广州风景" className="w-full h-24 object-cover" />
                    <div className="p-3">
                      <h3 className="font-medium">广州</h3>
                      <p className="text-xs text-gray-500">¥850起</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer">
                    <img src="https://picsum.photos/seed/sanya/400/200" alt="三亚风景" className="w-full h-24 object-cover" />
                    <div className="p-3">
                      <h3 className="font-medium">三亚</h3>
                      <p className="text-xs text-gray-500">¥1200起</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer">
                    <img src="https://picsum.photos/seed/chengdu/400/200" alt="成都风景" className="w-full h-24 object-cover" />
                    <div className="p-3">
                      <h3 className="font-medium">成都</h3>
                      <p className="text-xs text-gray-500">¥920起</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 特价机票 */}
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-semibold text-gray-800">特价机票</h2>
                  <a href="#" className="text-blue-600 text-sm">查看更多</a>
                </div>
                
                <div className="space-y-3">
                  <div className="flex border border-gray-200 rounded-lg overflow-hidden cursor-pointer">
                    <div className="w-24 bg-blue-100 flex items-center justify-center">
                      <img src="https://picsum.photos/seed/airline1/100/100" alt="东方航空标志" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="flex-1 p-3">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium">东方航空 MU5101</p>
                          <p className="text-xs text-gray-500">空客A330</p>
                        </div>
                        <div className="text-right">
                          <p className="text-blue-600 font-semibold">¥490</p>
                          <p className="text-xs text-gray-500">经济舱</p>
                        </div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <p className="text-sm font-medium">07:30</p>
                        <div className="flex items-center">
                          <div className="w-16 h-px bg-gray-300 relative">
                            <div className="absolute -top-1 left-0 w-3 h-3 bg-blue-600 rounded-full"></div>
                            <div className="absolute -top-1 right-0 w-3 h-3 bg-gray-300 rounded-full"></div>
                          </div>
                          <p className="text-xs text-gray-500 mx-2">2h15m</p>
                        </div>
                        <p className="text-sm font-medium">09:45</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex border border-gray-200 rounded-lg overflow-hidden cursor-pointer">
                    <div className="w-24 bg-blue-100 flex items-center justify-center">
                      <img src="https://picsum.photos/seed/airline2/100/100" alt="南方航空标志" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="flex-1 p-3">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium">南方航空 CZ3952</p>
                          <p className="text-xs text-gray-500">波音737</p>
                        </div>
                        <div className="text-right">
                          <p className="text-blue-600 font-semibold">¥520</p>
                          <p className="text-xs text-gray-500">经济舱</p>
                        </div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <p className="text-sm font-medium">10:15</p>
                        <div className="flex items-center">
                          <div className="w-16 h-px bg-gray-300 relative">
                            <div className="absolute -top-1 left-0 w-3 h-3 bg-blue-600 rounded-full"></div>
                            <div className="absolute -top-1 right-0 w-3 h-3 bg-gray-300 rounded-full"></div>
                          </div>
                          <p className="text-xs text-gray-500 mx-2">2h30m</p>
                        </div>
                        <p className="text-sm font-medium">12:45</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* 消息中心视图 */}
          {activeNav === 'message' && (
            <>
              {/* 消息分类标签 */}
              <div className="flex border-b bg-white sticky top-16 z-10 shadow-sm">
                {['all', 'system', 'order', 'promotion'].map(tab => (
                  <button
                    key={tab}
                    className={`flex-1 py-3 text-center transition-all duration-300 ${
                      activeTab === tab 
                        ? 'text-blue-600 font-medium border-b-2 border-blue-600' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    <span>{tab === 'all' ? '全部' : tab === 'system' ? '系统' : tab === 'order' ? '订单' : '优惠'}</span>
                    {unreadCounts[tab as keyof typeof unreadCounts] > 0 && (
                      <span className="ml-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                        {unreadCounts[tab as keyof typeof unreadCounts]}
                      </span>
                    )}
                  </button>
                ))}
              </div>
              
              {/* 消息列表 */}
              <div 
                className="divide-y divide-gray-200 pb-20" 
                style={{ 
                  width: '375px',
                  height: 'calc(100vh - 144px)',
                  overflowY: 'auto'
                }}
              >
                {filteredMessages.length > 0 ? (
                  filteredMessages.map(message => (
                    <div 
                      key={message.id} 
                      className={`p-4 bg-white ${!message.read ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-gray-50'} transition-colors duration-200 cursor-pointer`}
                      onClick={() => markAsRead(message.id)}
                    >
                      <div className="flex items-start">
                        <div className="mr-3 mt-1 p-2 rounded-full bg-blue-100">
                          {message.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h3 className={`font-medium ${!message.read ? 'text-gray-900' : 'text-gray-600'}`}>
                              {message.title}
                              {!message.read && <span className="ml-1 inline-block w-2 h-2 bg-red-500 rounded-full"></span>}
                            </h3>
                            <span className="text-xs text-gray-400">{message.time}</span>
                          </div>
                          <p className={`mt-1 text-sm ${!message.read ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>
                            {message.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div 
                    className="p-8 text-center text-gray-500" 
                    style={{ width: '375px', height: '200px' }}
                  >
                    <MessageSquare size={48} className="mx-auto text-gray-300 mb-4" />
                    <p>暂无{activeTab === 'all' ? '' : activeTab === 'system' ? '系统' : activeTab === 'order' ? '订单' : '优惠'}消息</p>
                  </div>
                )}
              </div>
            </>
          )}
          
          {/* 机票预订视图 */}
          {activeNav === 'flights' && (
            <div className="p-4">
              {/* 搜索表单 */}
              <div className="bg-white rounded-xl shadow-md p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">机票预订</h2>
                  <div className="flex space-x-2">
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full cursor-pointer">单程</span>
                    <span className="text-xs text-gray-500 px-2 py-1 rounded-full cursor-pointer">往返</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 border-b border-gray-200 pb-2">
                    <i className="fa fa-map-marker text-blue-600"></i>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">出发城市</p>
                      <p className="font-medium">北京</p>
                    </div>
                    <button className="p-2">
                      <i className="fa fa-exchange text-gray-400"></i>
                    </button>
                    <div className="flex-1 text-right">
                      <p className="text-sm text-gray-500">目的城市</p>
                      <p className="font-medium">上海</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 border-b border-gray-200 pb-2">
                    <i className="fa fa-calendar text-blue-600"></i>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">出发日期</p>
                      <p className="font-medium">2025年6月10日 周二</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 border-b border-gray-200 pb-2">
                    <i className="fa fa-user text-blue-600"></i>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">乘客</p>
                      <p className="font-medium">1位成人, 0位儿童</p>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors duration-200">
                    搜索航班
                  </button>
                </div>
              </div>
              
              {/* 热门航线 */}
              <div className="bg-white rounded-xl shadow-md p-4 mb-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">热门航线</h2>
                <div className="grid grid-cols-2 gap-3">
                  <button className="border border-gray-200 rounded-lg p-3 hover:border-blue-600 transition-colors" onClick={() => navigateTo('flights')}>
                    <div className="flex justify-between">
                      <span className="font-medium">北京 → 上海</span>
                      <span className="text-blue-600 font-semibold">¥540</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">约2小时15分钟</p>
                  </button>
                  <button className="border border-gray-200 rounded-lg p-3 hover:border-blue-600 transition-colors">
                    <div className="flex justify-between">
                      <span className="font-medium">北京 → 广州</span>
                      <span className="text-blue-600 font-semibold">¥850</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">约3小时20分钟</p>
                  </button>
                  <button className="border border-gray-200 rounded-lg p-3 hover:border-blue-600 transition-colors">
                    <div className="flex justify-between">
                      <span className="font-medium">上海 → 深圳</span>
                      <span className="text-blue-600 font-semibold">¥780</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">约2小时40分钟</p>
                  </button>
                  <button className="border border-gray-200 rounded-lg p-3 hover:border-blue-600 transition-colors">
                    <div className="flex justify-between">
                      <span className="font-medium">上海 → 成都</span>
                      <span className="text-blue-600 font-semibold">¥820</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">约3小时10分钟</p>
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* 酒店预订视图 */}
          {activeNav === 'hotels' && (
            <div className="p-4">
              {/* 搜索表单 */}
              <div className="bg-white rounded-xl shadow-md p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">酒店预订</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 border-b border-gray-200 pb-2">
                    <i className="fa fa-map-marker text-blue-600"></i>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">目的地</p>
                      <p className="font-medium">上海</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 border-b border-gray-200 pb-2">
                    <i className="fa fa-calendar text-blue-600"></i>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">入住日期</p>
                      <p className="font-medium">2025年6月10日 - 2025年6月15日</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 border-b border-gray-200 pb-2">
                    <i className="fa fa-user text-blue-600"></i>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">客人和房间</p>
                      <p className="font-medium">2位成人, 1间房</p>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors duration-200">
                    搜索酒店
                  </button>
                </div>
              </div>
              
              {/* 推荐酒店 */}
              <div className="bg-white rounded-xl shadow-md p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">上海热门酒店</h2>
                
                <div className="space-y-3">
                  <div className="rounded-lg overflow-hidden shadow-sm cursor-pointer">
                    <img src="https://picsum.photos/seed/hotel1/400/200" alt="上海外滩华尔道夫酒店" className="w-full h-36 object-cover" />
                    <div className="p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">上海外滩华尔道夫酒店</h3>
                          <div className="flex items-center mt-1">
                            <i className="fa fa-star text-yellow-400 text-xs"></i>
                            <i className="fa fa-star text-yellow-400 text-xs"></i>
                            <i className="fa fa-star text-yellow-400 text-xs"></i>
                            <i className="fa fa-star text-yellow-400 text-xs"></i>
                            <i className="fa fa-star text-yellow-400 text-xs"></i>
                            <span className="text-xs text-gray-500 ml-1">4.9 (1284条评价)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-blue-600 font-semibold">¥1580</p>
                          <p className="text-xs text-gray-500">起/晚</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">上海市黄浦区中山东一路2号</p>
                      <div className="flex mt-2 space-x-2">
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">含早餐</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">可免费取消</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden shadow-sm cursor-pointer">
                    <img src="https://picsum.photos/seed/hotel2/400/200" alt="上海浦东丽思卡尔顿酒店" className="w-full h-36 object-cover" />
                    <div className="p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">上海浦东丽思卡尔顿酒店</h3>
                          <div className="flex items-center mt-1">
                            <i className="fa fa-star text-yellow-400 text-xs"></i>
                            <i className="fa fa-star text-yellow-400 text-xs"></i>
                            <i className="fa fa-star text-yellow-400 text-xs"></i>
                            <i className="fa fa-star text-yellow-400 text-xs"></i>
                            <i className="fa fa-star text-yellow-400 text-xs"></i>
                            <span className="text-xs text-gray-500 ml-1">4.8 (965条评价)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-blue-600 font-semibold">¥1680</p>
                          <p className="text-xs text-gray-500">起/晚</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">上海市浦东新区陆家嘴环路168号</p>
                      <div className="flex mt-2 space-x-2">
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">含早餐</span>
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">免费Wi-Fi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* 行程管理视图 */}
          {activeNav === 'trips' && (
            <div className="p-4">
              <div className="bg-white rounded-xl shadow-md p-4 mb-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">我的行程</h2>
                
                <div className="space-y-3">
                  {trips.map(trip => (
                    <div className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer" key={trip.id}>
                      <div className={`bg-${trip.status === '进行中' ? 'blue-50' : trip.status === '未开始' ? 'gray-50' : 'green-50'} p-3 border-b border-gray-200`}>
                        <div className="flex justify-between">
                          <span className="font-medium">{trip.name}</span>
                          <span className={`text-xs bg-${trip.status === '进行中' ? 'blue-100 text-blue-800' : trip.status === '未开始' ? 'gray-200 text-gray-600' : 'green-100 text-green-800'} px-2 py-0.5 rounded-full`}>{trip.status}</span>
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="flex justify-between items-center mb-3">
                          <div>
                            <p className="text-sm font-medium">{trip.startDate} - {trip.endDate}</p>
                            <p className="text-xs text-gray-500">{trip.days}天{trip.days - 1}晚</p>
                          </div>
                          <button className="text-blue-600 text-sm">查看详情</button>
                        </div>
                        
                        {trip.flightTo && (
                          <div className="bg-gray-50 p-3 rounded-lg mb-3">
                            <div className="flex items-center">
                              <Plane size={18} className="text-blue-600 mr-2" />
                              <div>
                                <p className="text-sm font-medium">{trip.flightTo.airline} {trip.flightTo.flightNumber}</p>
                                <div className="flex justify-between mt-1">
                                  <div>
                                    <p className="text-sm font-medium">{trip.flightTo.departureTime}</p>
                                    <p className="text-xs text-gray-500">{trip.flightTo.departure}</p>
                                  </div>
                                  <div className="flex items-center">
                                    <div className="w-16 h-px bg-gray-300 relative">
                                      <div className="absolute -top-1 left-0 w-3 h-3 bg-blue-600 rounded-full"></div>
                                      <div className="absolute -top-1 right-0 w-3 h-3 bg-gray-300 rounded-full"></div>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-sm font-medium">{trip.flightTo.arrivalTime}</p>
                                    <p className="text-xs text-gray-500">{trip.flightTo.arrival}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {trip.hotel && (
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex items-center">
                              <Hotel size={18} className="text-blue-600 mr-2" />
                              <div>
                                <p className="text-sm font-medium">{trip.hotel.name}</p>
                                <p className="text-xs text-gray-500">入住: {trip.hotel.checkIn} - 退房: {trip.hotel.checkOut}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* 我的模块视图 */}
          {activeNav === 'profile' && (
            <div className="bg-gray-50">
              {/* 用户信息卡片 */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <div className="flex items-center">
                  <img src={currentUser.avatar} alt="用户头像" className="w-16 h-16 rounded-full border-2 border-white" />
                  <div className="ml-4">
                    <h2 className="text-xl font-bold">{currentUser.name}</h2>
                    <div className="flex items-center mt-1">
                      <span className="text-blue-100 text-sm">{currentUser.vipLevel}</span>
                      <span className="ml-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full">
                        积分 {currentUser.points}
                      </span>
                    </div>
                  </div>
                  <button className="ml-auto" onClick={() => alert('编辑个人信息')}>
                    <Settings size={20} className="text-white" />
                  </button>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mt-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold">{currentUser.orders}</p>
                    <p className="text-xs text-blue-100 mt-1">我的订单</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold">{currentUser.coupons}</p>
                    <p className="text-xs text-blue-100 mt-1">我的优惠券</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold">{currentUser.points}</p>
                    <p className="text-xs text-blue-100 mt-1">积分</p>
                  </div>
                </div>
              </div>
              
              {/* 会员特权 */}
              <div className="bg-white p-4 mb-3">
                <h3 className="font-medium mb-3">会员特权</h3>
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  <div className="bg-blue-50 rounded-lg p-3 flex-shrink-0 w-40">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <Star size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">优先预订</p>
                        <p className="text-xs text-gray-500">享受更快预订服务</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 flex-shrink-0 w-40">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <Gift size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">会员专享</p>
                        <p className="text-xs text-gray-500">专属优惠活动</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 flex-shrink-0 w-40">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <CreditCardIcon size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">积分加倍</p>
                        <p className="text-xs text-gray-500">消费获得更多积分</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 flex-shrink-0 w-40">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <Ticket size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">专属客服</p>
                        <p className="text-xs text-gray-500">7*24小时专属服务</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 功能列表 */}
              <div className="bg-white">
                <div className="border-b border-gray-100">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                      <i className="fa fa-ticket text-blue-600 mr-3"></i>
                      <span>我的订单</span>
                    </div>
                    <i className="fa fa-angle-right text-gray-400"></i>
                  </div>
                </div>
                <div className="border-b border-gray-100">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                      <i className="fa fa-heart text-blue-600 mr-3"></i>
                      <span>我的收藏</span>
                    </div>
                    <i className="fa fa-angle-right text-gray-400"></i>
                  </div>
                </div>
                <div className="border-b border-gray-100">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                      <i className="fa fa-gift text-blue-600 mr-3"></i>
                      <span>优惠券</span>
                    </div>
                    <i className="fa fa-angle-right text-gray-400"></i>
                  </div>
                </div>
                <div className="border-b border-gray-100">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                      <i className="fa fa-star text-blue-600 mr-3"></i>
                      <span>积分商城</span>
                    </div>
                    <i className="fa fa-angle-right text-gray-400"></i>
                  </div>
                </div>
                <div className="border-b border-gray-100">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                      <i className="fa fa-user-circle text-blue-600 mr-3"></i>
                      <span>个人信息</span>
                    </div>
                    <i className="fa fa-angle-right text-gray-400"></i>
                  </div>
                </div>
                <div className="border-b border-gray-100">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                      <i className="fa fa-cog text-blue-600 mr-3"></i>
                      <span>设置</span>
                    </div>
                    <i className="fa fa-angle-right text-gray-400"></i>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <i className="fa fa-question-circle text-blue-600 mr-3"></i>
                      <span>帮助与反馈</span>
                    </div>
                    <i className="fa fa-angle-right text-gray-400"></i>
                  </div>
                </div>
              </div>
              
              {/* 退出登录 */}
              <div className="mt-6 p-4">
                <button className="w-full bg-white border border-gray-200 text-gray-600 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-50">
                  退出登录
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* 底部导航栏 */}
        <div 
          className="fixed bottom-0 bg-white border-t border-gray-200 flex justify-around py-2 px-1 shadow-lg" 
          style={{ width: '375px' }}
        >
          <button className="text-center flex flex-col items-center px-4 py-1 transition-colors" onClick={() => navigateTo('home')}>
            <Home size={22} className={`mb-1 ${activeNav === 'home' ? 'text-blue-600' : 'text-gray-500'}`} />
            <span className={`text-xs ${activeNav === 'home' ? 'text-blue-600' : 'text-gray-500'}`}>首页</span>
          </button>
          <button className="text-center flex flex-col items-center px-4 py-1 transition-colors" onClick={() => navigateTo('trips')}>
            <Airplay size={22} className={`mb-1 ${activeNav === 'trips' ? 'text-blue-600' : 'text-gray-500'}`} />
            <span className={`text-xs ${activeNav === 'trips' ? 'text-blue-600' : 'text-gray-500'}`}>行程</span>
          </button>
          <button className="text-center flex flex-col items-center px-4 py-1 transition-colors" onClick={() => navigateTo('message')}>
            <MessageSquare size={22} className={`mb-1 ${activeNav === 'message' ? 'text-blue-600' : 'text-gray-500'} relative`} />
            {unreadCounts.all > 0 && (
              <Circle size={12} className="absolute -top-1 -right-1 text-red-500" />
            )}
            <span className={`text-xs ${activeNav === 'message' ? 'text-blue-600' : 'text-gray-500'}`}>消息</span>
          </button>
          <button className="text-center flex flex-col items-center px-4 py-1 transition-colors" onClick={() => navigateTo('profile')}>
            <User size={22} className={`mb-1 ${activeNav === 'profile' ? 'text-blue-600' : 'text-gray-500'}`} />
            <span className={`text-xs ${activeNav === 'profile' ? 'text-blue-600' : 'text-gray-500'}`}>我的</span>
          </button>
        </div>
      </div>
    </Router>
  );
};

export default App; 
