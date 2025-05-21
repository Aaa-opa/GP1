import React, { useState } from 'react';
import { Bell, MessageSquare, Mail, CheckCircle, Home } from 'react-feather';

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

const CtripMessagePage: React.FC = () => {
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
    }
  ]);

  // 标记消息为已读
  const markAsRead = (id: number) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, read: true } : msg
    ));
  };

  // 过滤显示的消息
  const filteredMessages = messages.filter(msg => 
    activeTab === 'all' || msg.type === activeTab
  );

  return (
    <div className="w-[375px] mx-auto bg-gray-50 min-h-screen relative overflow-hidden">
      {/* 顶部标题栏 */}
      <div className="bg-blue-600 text-white p-4 sticky top-0 z-10">
        <h1 className="text-xl font-bold text-center">消息中心</h1>
      </div>
      
      {/* 消息分类标签 - 固定宽度布局 */}
      <div className="flex border-b bg-white" style={{ width: '375px' }}>
        <button
          className={`w-1/4 py-3 text-center ${activeTab === 'all' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('all')}
        >
          全部
        </button>
        <button
          className={`w-1/4 py-3 text-center ${activeTab === 'system' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('system')}
        >
          系统
        </button>
        <button
          className={`w-1/4 py-3 text-center ${activeTab === 'order' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('order')}
        >
          订单
        </button>
        <button
          className={`w-1/4 py-3 text-center ${activeTab === 'promotion' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('promotion')}
        >
          优惠
        </button>
      </div>
      
      {/* 消息列表 - 固定宽度 */}
      <div 
        className="divide-y divide-gray-200 pb-16" 
        style={{ 
          width: '375px',
          height: 'calc(100vh - 112px)',
          overflowY: 'auto'
        }}
      >
        {filteredMessages.length > 0 ? (
          filteredMessages.map(message => (
            <div 
              key={message.id} 
              className={`p-4 bg-white ${!message.read ? 'bg-blue-50' : ''}`}
              style={{ width: '375px' }}
              onClick={() => markAsRead(message.id)}
            >
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  {message.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className={`font-medium ${!message.read ? 'text-gray-900' : 'text-gray-600'}`}>
                      {message.title}
                    </h3>
                    <span className="text-xs text-gray-400">{message.time}</span>
                  </div>
                  <p className={`mt-1 text-sm ${!message.read ? 'text-gray-800' : 'text-gray-500'}`}>
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
      
      {/* 底部导航栏 - 固定宽度 */}
      <div 
        className="fixed bottom-0 bg-white border-t flex justify-center py-3" 
        style={{ width: '375px' }}
      >
        <button className="text-center text-blue-600 flex flex-col items-center px-8">
          <Home size={20} className="mb-1" />
          <span className="text-xs">消息</span>
        </button>
      </div>
    </div>
  );
};

export default CtripMessagePage;
