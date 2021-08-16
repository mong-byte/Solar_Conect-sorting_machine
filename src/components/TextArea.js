import React from 'react';
import styled from 'styled-components';

const TextArea = ({ checkString, error }) => {
  return (
    <TextContainer>
      <InputArea onChange={checkString} error={error} />
      {error && <ErrorMessage>형식을 맞춰주세요</ErrorMessage>}
    </TextContainer>
  );
};

const TextContainer = styled.div`
  position: relative;
`;

const InputArea = styled.textarea`
  border: none;
  outline: solid 1px ${props => (props.error ? '#E54B5D' : '#3ca0e8')};
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: #e54b5d;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
`;

export default TextArea;
