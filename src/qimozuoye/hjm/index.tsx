import React, { useState } from 'react';
import './App.css';

// 类型定义
interface User {
  id: string;
  name: string;
  avatar: string;
}

interface Comment {
  id: string;
  userId: string;
  text: string;
  createdAt: string;
}

interface Design {
  id: string;
  title: string;
  image: string;
  description: string;
  authorId: string;
  likes: number;
  likedBy: string[];
  comments: Comment[];
}

interface DesignWithAuthor extends Design {
  author: User;
}

// 模拟数据
const mockUsers: User[] = [
  { id: '1', name: '旅行家小明', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: '2', name: '摄影爱好者小红', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
];

const mockDesigns: Design[] = [
  {
    id: '1',
    title: '海岛度假风情',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: '马尔代夫水屋设计，与大海零距离接触',
    authorId: '1',
    likes: 24,
    likedBy: ['2'],
    comments: [
      { id: '1', userId: '2', text: '太美了！这就是我梦想中的度假屋！', createdAt: '2023-05-10' },
    ]
  },
  {
    id: '2',
    title: '山间禅意民宿',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: '日式风格的山间小屋，享受宁静时光',
    authorId: '2',
    likes: 18,
    likedBy: ['1'],
    comments: []
  },
];

function App() {
  // 注意这里：我们使用 [designs, setDesigns] 来解构 useState 的返回值
  const [designs, setDesigns] = useState<Design[]>(mockDesigns);
  const [currentUser] = useState<User>(mockUsers[0]);
  const [newComment, setNewComment] = useState<string>('');
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  // 获取当前设计（包含作者信息）
  const getCurrentDesign = (): DesignWithAuthor | null => {
    if (!selectedDesign) return null;
    
    const author = mockUsers.find(u => u.id === selectedDesign.authorId);
    if (!author) return null;
    
    return {
      ...selectedDesign,
      author: author
    };
  };

  const currentDesign = getCurrentDesign();

  // 处理点赞
  const handleLike = (designId: string) => {
    setDesigns(prevDesigns => 
      prevDesigns.map(design => {
        if (design.id === designId) {
          const liked = design.likedBy.includes(currentUser.id);
          return {
            ...design,
            likes: liked ? design.likes - 1 : design.likes + 1,
            likedBy: liked 
              ? design.likedBy.filter(id => id !== currentUser.id)
              : [...design.likedBy, currentUser.id]
          };
        }
        return design;
      })
    );
  };

  // 提交评论
  const submitComment = (designId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      userId: currentUser.id,
      text: newComment,
      createdAt: new Date().toISOString()
    };

    setDesigns(prevDesigns => 
      prevDesigns.map(design => {
        if (design.id === designId) {
          return {
            ...design,
            comments: [...design.comments, comment]
          };
        }
        return design;
      })
    );

    setNewComment('');
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>携程旅游设计社区</h1>
        <div className="user-info">
          <span>当前用户: {currentUser.name}</span>
          <img 
            src={currentUser.avatar} 
            alt={currentUser.name} 
            className="user-avatar"
          />
        </div>
      </header>

      <main className="design-gallery">
        {designs.map(design => (
          <div key={design.id} className="design-card">
            
            <div className="design-content">
              <h3>{design.title}</h3>
              <p>{design.description}</p>
              <div className="design-footer">
                <span>❤️ {design.likes}</span>
                <span>💬 {design.comments.length}</span>
              </div>
            </div>
          </div>
        ))}
      </main>

      {currentDesign && (
        <div className="design-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelectedDesign(null)}>×</button>
            <div className="design-detail">
              
              <div className="detail-content">
                <h2>{currentDesign.title}</h2>
                <p>{currentDesign.description}</p>
                <div className="author-info">
                  <img 
                    src={currentDesign.author.avatar} 
                    alt="作者头像" 
                    className="author-avatar"
                  />
                  <span>发布者: {currentDesign.author.name}</span>
                </div>
                <button 
                  className={`like-btn ${currentDesign.likedBy.includes(currentUser.id) ? 'liked' : ''}`}
                  onClick={() => handleLike(currentDesign.id)}
                >
                  ❤️ {currentDesign.likes} 喜欢
                </button>
              </div>
            </div>
            
            <div className="comments-section">
              <h3>用户评论 ({currentDesign.comments.length})</h3>
              <form onSubmit={(e) => submitComment(currentDesign.id, e)} className="comment-form">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="写下你的旅行设计感想..."
                  rows={3}  
                />
                <button type="submit">发布评论</button>
              </form>
              
              <div className="comments-list">
                {currentDesign.comments.map(comment => {
                  const commentUser = mockUsers.find(u => u.id === comment.userId);
                  return (
                    <div key={comment.id} className="comment">
                      <img 
                        src={commentUser?.avatar || ''} 
                        alt={commentUser?.name || ''} 
                        className="comment-avatar"
                      />
                      <div className="comment-content">
                        <div className="comment-header">
                          <span className="comment-author">{commentUser?.name || '匿名用户'}</span>
                          <span className="comment-time">{new Date(comment.createdAt).toLocaleDateString()}</span>
                        </div>
                        <p>{comment.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;