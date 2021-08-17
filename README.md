# Solar_Connect-sorting_machine
## [💙 과제 배포 링크](https://loving-mclean-bf35fd.netlify.app)
## 과제 기능 구현 목록
  - 타이머 기능 구현
  - 숫자를 입력 받아 Sorting기능 구현
  - 숫자 혹은 문자(,.)를 제외한 문자 입력시 예외처리 구현
  - 데이터의 오름차순, 내림차순 구현
  - 내림차순 데이터의 시간차 출력 구현
  - 추가기능 구현
    - 로딩중일때 애니메이션 구현
    - 초기화기능 구현
## Test
- [TEST링크](https://github.com/mong-byte/Solar_Conect-sorting_machine/blob/main/src/SortingMachine.test.js)<br/>
 ![TEST결과](https://user-images.githubusercontent.com/55486644/129573276-463c396c-6902-4ee9-be2c-0ec577d346a4.png)
  1. 오름차순, 내림차순에 대한 test 실행
    - `mergeSort`에 대하여 각각의 배열에 대한 오름차순 정렬, 내림차순 정렬의 test
    - 소수에 대한 정렬 구현
    - 음수에 대한 정렬 
  2. 숫자, 혹은 허용 문자(,.) 이외의 문자에 대한 예외처리
    - 문자의 입력시 NaN의 출력을 확인
    - 공백이 입력 되었을때 배열에 추가 시키지 않는 기능 동작확인
    - 허용문자(,)만 연속으로 입력 되었을때의 기능 동작 확인
## 설치 및 시작 방법
  1. repo `git clone`
  2. `npm install`
  3. `npm start`
## 참고자료
- [getTimezoneOffset](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)
- [Merge Sort](https://stackabuse.com/merge-sort-in-javascript/)
- [toLocaleDateString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)
