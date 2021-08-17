import React from 'react';
import styled from 'styled-components';

const ResultField = ({ isLoading, sortedData }) => {
  return (
    <Container>
      {isLoading && <Spinner className="spinner" />}
      <ResultString>{sortedData}</ResultString>
    </Container>
  );
};

const Spinner = styled.div`
  &.spinner {
    position: absolute;
    top: calc(50% - 24px);
    left: calc(50% - 24px);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 3px solid rgba(60, 160, 232, 0.2);
    border-top: 3px solid rgba(60, 160, 232, 1);
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Container = styled.div`
  position: relative;
  word-break: break-all;
  overflow-y: auto;
  border: 1px solid black;
  margin: 30px auto;
`;

const ResultString = styled.p`
  padding: 5px;
`;

export default React.memo(ResultField);
