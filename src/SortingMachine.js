import React, { useState } from 'react';
import styled from 'styled-components';
import { stringValidator, mergeSort } from 'utils';
import { Timer, ResultField, SubmitButton, TextArea } from 'components';
import { ORDER } from 'utils/constants';

function SortingMachine() {
  const [checkedNumArr, setCheckedNumArr] = useState([]);
  const [inputError, setInputError] = useState(false);
  const [sortedData, setSortedData] = useState({
    asc: [],
    desc: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const { ASC, DESC } = ORDER;

  const checkString = event => {
    setInputError(false);
    const {
      target: { value },
    } = event;
    const checkedInput = stringValidator(value);
    if (checkedInput.includes(NaN)) return setInputError(true);
    setCheckedNumArr(checkedInput);
  };

  const sortNumArr = () => {
    setIsLoading(true);
    setSortedData({
      asc: mergeSort(checkedNumArr, ASC).join(', '),
    });
    setTimeout(() => {
      setSortedData(prev => ({
        ...prev,
        desc: mergeSort(checkedNumArr, DESC).join(', '),
      }));
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Container>
      <Timer location="ko-KR" />
      <TextArea checkString={checkString} error={inputError} />
      <SubmitButton sortNumArr={sortNumArr} error={inputError} />
      <ResultField sortedData={sortedData.asc} />
      <ResultField isLoading={isLoading} sortedData={sortedData.desc} />
      <Timer location="en-US" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & div,
  textarea {
    width: 500px;
    height: 200px;
  }
`;

export default SortingMachine;
