import React, { useState } from 'react';

const TravelReview = ({ attractionImage }) => {
  // 点赞状态
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  
  // 评论状态
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // 处理点赞
  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  // 提交评论
  const handleSubmitComment = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    const comment = {
      id: Date.now(),
      text: newComment,
      date: new Date().toLocaleDateString()
    };
    
    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      {/* 景点照片展示 */}
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <img 
          src={attractionImage || '/.public/img/11.jpg'} 
          alt="景点照片" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        />
        <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#666' }}>
          {attractionImage ? '景点实拍照片' : '暂无景点照片'}
        </p>
      </div>

      {/* 点赞部分 */}
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={handleLike}
          style={{
            background: isLiked ? '#ff4757' : '#f1f1f1',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          {isLiked ? '已赞 👍' : '点赞'}
        </button>
        <span>点赞数: {likes}</span>
      </div>

      {/* 评论部分 */}
      <div>
        <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px' }}>游客评论 ({comments.length})</h3>
        
        {/* 评论表单 */}
        <form onSubmit={handleSubmitComment} style={{ marginBottom: '20px' }}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="分享你的旅行体验..."
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              minHeight: '80px'
            }}
          />
          <button 
            type="submit"
            style={{
              background: '#3498db',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            发布评论
          </button>
        </form>

        {/* 评论列表 */}
        <div>
          {comments.length === 0 ? (
            <p style={{ color: '#777' }}>暂无评论，快来分享你的看法吧！</p>
          ) : (
            comments.map(comment => (
              <div 
                key={comment.id} 
                style={{
                  padding: '10px',
                  borderBottom: '1px solid #eee',
                  marginBottom: '10px'
                }}
              >
                <p style={{ margin: '0 0 5px 0' }}>{comment.text}</p>
                <small style={{ color: '#777' }}>{comment.date}</small>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelReview;
