const stringValidator = str => {
  const numArr = str
    .split(',')
    .filter(num => {
      return num.trim() !== '';
    })
    .map(num => Number(num.trim()));
  // NaN이 섞여 있는 경우가 있으므로 컴포넌트 레벨에서 filter 필요
  return numArr;
};

export default stringValidator;
