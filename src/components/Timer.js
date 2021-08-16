import React from 'react';
import { createKRdate } from 'utils/dateCreator';
import styled from 'styled-components';

const Timer = ({ location }) => {
  return <Wrapper>{createKRdate(location)}</Wrapper>;
};

export default Timer;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 5px;
  margin: 20px 0px;
  border-radius: 10px;
  background-color: #3ca0e8;
  color: #fff;
  font-size: 25px;
`;
