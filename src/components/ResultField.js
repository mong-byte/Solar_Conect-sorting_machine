import React from 'react';
import styled from 'styled-components';

const ResultField = ({ isLoading, sortedData }) => {
  return (
    <Container>
      {isLoading && <div>로딩중임</div>}
      <ResultString>{sortedData}</ResultString>
    </Container>
  );
};

export default ResultField;

const Container = styled.div`
  word-break: break-all;
  overflow-y: auto;
  border: 1px solid black;
  margin: 30px auto;
`;

const ResultString = styled.p`
  padding: 5px;
`;
