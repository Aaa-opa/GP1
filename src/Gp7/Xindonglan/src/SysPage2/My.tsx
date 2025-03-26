
import styled from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // 引入 useNavigate 钩子

const StyledButton = styled.button`
  border: 2px solid black;
  padding: 5px;
  margin: 1px;
  border-radius: 1px;
  background-color: white;
  cursor: pointer;
  font-size: 16px
  

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #d0d0d0;
  }
`;

const My = () => {
  const navigate = useNavigate(); // 获取 navigate 函数

  const handleClick = () => {
    navigate('/image'); // 跳转到图片页面
  };

  return (
    <StyledButton onClick={handleClick}>
      <div>点击跳转到图片</div>
    </StyledButton>
  );
};

export default My;

