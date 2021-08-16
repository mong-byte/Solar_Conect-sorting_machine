import React from 'react';
import styled from 'styled-components';

const SubmitButton = ({ sortNumArr, error }) => {
  return (
    <SubmitBtn onClick={sortNumArr} disabled={error}>
      시작 버튼
    </SubmitBtn>
  );
};

const SubmitBtn = styled.button`
  all: unset;
  margin-top: 30px;
  padding: 10px 20px;
  color: #fff;
  background-color: #3ca0e8;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
  cursor: pointer;

  &:disabled {
    background-color: #91c5ea;
  }
`;

export default SubmitButton;
