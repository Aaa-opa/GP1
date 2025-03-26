import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 简单的验证
    if (!formData.username || !formData.password) {
      setError('用户名和密码不能为空');
      return;
    }
    
    // 这里可以添加实际的登录逻辑
    console.log('登录数据:', formData);
    setError('');
    alert('登录成功!');
  };
}

// 简单的样式对象
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: '15px',
  }
};

export default LoginForm;