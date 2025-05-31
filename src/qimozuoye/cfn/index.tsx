import React, { useState, useEffect } from 'react';
import { 
  Bell, MessageSquare, Mail, CheckCircle, Home, 
  Airplay, User, Circle 
} from 'react-feather';

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

const Cfn: React.FC = () => {
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
      // 添加标记全部已读的成功提示
      alert('已将所有消息标记为已读');
    }
  };

  // 过滤显示的消息
  const filteredMessages = messages.filter(msg => 
    activeTab === 'all' || msg.type === activeTab
  );

  return (
    <div className="w-[375px] mx-auto bg-gray-50 min-h-screen relative overflow-hidden font-sans">
      {/* 顶部标题栏 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">消息中心</h1>
          {unreadCounts.all > 0 && (
            <button 
              className="text-white text-sm bg-blue-800 px-3 py-1 rounded-full transition-all hover:bg-blue-900"
              onClick={markAllAsRead}
            >
              全部已读
            </button>
          )}
        </div>
      </div>
      
      {/* 消息分类标签 - 优化布局 */}
      <div className="flex border-b bg-white sticky top-16 z-10 shadow-sm">
        {['all', 'system', 'order', 'promotion'].map(tab => (
          <button
            key={tab}
            className={`flex-1 py-3 text-center transition-all duration-300 ${
              activeTab === tab 
                ? 'text-blue-600 font-medium border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
            
          >
             <span>{tab === 'all' ? '全部' : tab === 'system' ? '系统' : tab === 'order' ? '订单' : '优惠'}</span>
             {unreadCounts[tab as keyof typeof unreadCounts] > 0 && ( // 添加类型断言
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
              className={`p-4 bg-white ${!message.read ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-gray-50'} transition-colors duration-200`}
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
      
      {/* 底部导航栏 */}
      <div 
        className="fixed bottom-0 bg-white border-t border-gray-200 flex justify-around py-2 px-1 shadow-lg" 
        style={{ width: '375px' }}
      >
        <button className="text-center text-blue-600 flex flex-col items-center px-4 py-1">
          <Home size={22} className="mb-1" />
          <span className="text-xs">首页</span>
        </button>
        <button className="text-center text-gray-500 flex flex-col items-center px-4 py-1 hover:text-gray-700 transition-colors">
          <Airplay size={22} className="mb-1" />
          <span className="text-xs">行程</span>
        </button>
        <button className="text-center text-gray-500 flex flex-col items-center px-4 py-1 hover:text-gray-700 transition-colors">
          <MessageSquare size={22} className="mb-1 relative">
            {unreadCounts.all > 0 && (
              <Circle size={12} className="absolute -top-1 -right-1 text-red-500" />
            )}
          </MessageSquare>
          <span className="text-xs">消息</span>
        </button>
        <button className="text-center text-gray-500 flex flex-col items-center px-4 py-1 hover:text-gray-700 transition-colors">
          <User size={22} className="mb-1" />
          <span className="text-xs">我的</span>
        </button>
      </div>
    </div>
  );
};

export default Cfn;  