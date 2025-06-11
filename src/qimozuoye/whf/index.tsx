import React, { useState } from 'react';

const SimpleComments = () => {
  // 初始评论数据
  const [comments, setComments] = useState([
    { id: 1, name: '张先生', text: '环境不错，交通便利！', date: '2025-06-10' },
    { id: 2, name: '陈女士', text: '服务热情，设施齐全。', date: '2025-06-11' }
  ]);

  // 表单状态
  const [form, setForm] = useState({ name: '', text: '' });

  // 提交评论
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.text) return;
    
    const newComment = {
      id: Date.now(),
      name: form.name,
      text: form.text,
      date: new Date().toLocaleDateString()
    };

    setComments([newComment, ...comments]);
    setForm({ name: '', text: '' });
  };

  return (
    <div style={containerStyle}>
      <h2>旅客评论</h2>
      
      {/* 评论列表 */}
      <div style={listStyle}>
        {comments.map(comment => (
          <div key={comment.id} style={commentStyle}>
            <div style={headerStyle}>
              <b>{comment.name}</b>
              <span style={dateStyle}>{comment.date}</span>
            </div>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>

      {/* 评论表单 */}
      <form onSubmit={handleSubmit} style={formStyle}>
        <input 
          type="text"
          placeholder="姓名"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={inputStyle}
        />
        <textarea
          placeholder="评论内容"
          value={form.text}
          onChange={(e) => setForm({ ...form, text: e.target.value })}
          style={textareaStyle}
        />
        <button type="submit" style={btnStyle}>提交</button>
      </form>
    </div>
  );
};

// 样式对象（简化版）
const containerStyle = {
  maxWidth: '800px',
  margin: '20px auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif'
};

const listStyle = {
  margin: '20px 0',
  borderTop: '1px solid #eee'
};

const commentStyle = {
  padding: '15px 0',
  borderBottom: '1px solid #eee'
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '8px',
  color: '#666'
};

const dateStyle = {
  fontSize: '0.9em',
  color: '#999'
};

const formStyle = {
  background: '#f8f9fa',
  padding: '20px',
  borderRadius: '8px'
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginBottom: '10px',
  border: '1px solid #ddd',
  borderRadius: '4px'
};

const textareaStyle = {
  ...inputStyle,
  height: '80px',
  resize: 'vertical',
  marginBottom: '15px'
};

const btnStyle = {
  background: '#007bff',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background 0.3s'
};

export default SimpleComments;
