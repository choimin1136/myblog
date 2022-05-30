# HTML Dev update to React
 2022.04.11 [update]
  - 기존의 HTML(Boot Strap) Blog를 React로 변환 중
  - state를 이용한 변수 가공
  - json 파일 형태의 테스트 데이터 제작
  - 컴포넌트 별로 구역 구분
  - props를 이용한 컴포넌트 간의 state 교류
  - state.map((a,i)=>{ })을 이용한 반복 코딩 최소화
 
 2022.04.12 [update]
  - nav index.html 고정등록
  - state를 활용한 service section


 2022.05.30 [local, session]
  - localStorage와 sessionStorage 두가지 방법 모두 애플리케이션 전역에 접근 가능하다는 공통점
  - 사용 시 주의해야 할 점은 Storage에 저장된 데이터는 모두 문자열만 사용 가능하기 때문에 다른 타입의 데이터를 사용할때 JSON형태로 읽고 써야한다.
  - 차이점은 저장되는 데이터의 범위가 다르다는 점
  - localStorage : 동일한 PC안에서 동일한 브라우저를 사용했을 때에 사용 = 데이터를 직접 삭제하지 않는 한 브라우저를 닫아도 저장된 데이터를 불러올 수 있음
  - sessionStorage는 브라우저 창이 닫히면 세션이 종료되면서 storage에 저장된 데이터도 소멸
 
 localStorage and sessionStorage API
  - localStorage와 sessionStorage 모두 setItem(key, value)형태로 데이터를 sotre에 저장하고, getItem(key)를 사용하여 저장된 데이터르 store에서 가져올 수 있다.
