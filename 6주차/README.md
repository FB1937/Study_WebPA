## State 와 Life Cycle
---

### ✅ state란?

1. **정의**
    - 컴포넌트 내부에서 사용하는 **변경 가능한 데이터**
    - 사용자 입력, 이벤트 등에 따라 변할 수 있는 값
2. **특징**
    - 일반 변수(`let`, `const`)는 값이 변해도 화면(UI)이 **변하지 않음**
    - 반면 state는 값이 바뀌면 **자동으로 화면을 다시 렌더링**
3. **사용 이유**
    - 동적인 UI 구성
    - 컴포넌트의 동작 상태를 반영

---

### ✅ 일반 변수 vs state (비교 예제)

### ❌ 일반 변수 사용 (화면이 안 바뀜)

```jsx
import React from 'react';

const Counter = () => {
  let count = 0;

  const plus = () => {
    count = count + 1;
    console.log(count); // 값은 증가하지만 화면에는 안 나옴
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={plus}>+</button>
    </div>
  );
};
```

### ✅ state 사용 (화면 자동 갱신)

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // 초기값 0

  const plus = () => {
    setCount(count + 1); // 값 변경 → 화면 재렌더링
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={plus}>+</button>
    </div>
  );
};
```

---

### ✅ useState 훅 사용 방법

```jsx
const [state변수, set함수] = useState(초기값);
```

- `state변수`: 현재 상태를 저장
- `set함수`: 상태를 변경하는 함수 → 변경 시 리렌더링 발생

---

### ✅ setState는 왜 비동기일까?

- React는 성능 최적화를 위해 여러 개의 state 변경을 **batch(일괄 처리)** 한다.
- 그래서 아래와 같이 `setCount` 호출 직후 `console.log(count)`를 찍으면, 아직 반영 안 된 이전 값이 출력됨.

```jsx
setCount(count + 1);
console.log(count); // 이전 값 출력됨 (주의)
```

### ✅ 해결법: 최신 값을 기반으로 업데이트

```jsx
setCount(prev => prev + 1); // 항상 최신 값 기반

```

---

### ✅ 객체 state 다루기 (예: width, height 관리)

```jsx
import React, { useState } from 'react';

const Area = () => {
  const [size, setSize] = useState({ width: 200, height: 100 });

  return (
    <div>
      <h1>너비: {size.width}, 높이: {size.height}</h1>
      <button onClick={() => setSize({ ...size, width: size.width + 20 })}>너비 증가</button>
      <button onClick={() => setSize({ ...size, height: size.height + 10 })}>높이 증가</button>
    </div>
  );
};
```

- `...size`를 이용해 기존 값 유지 + 변경할 값만 덮어쓰기

---

### ✅ 요약

| 구분 | 설명 |
| --- | --- |
| `useState()` | 함수형 컴포넌트에서 state 사용 가능하게 해주는 Hook |
| `setState()` | state를 바꾸고 컴포넌트를 리렌더링 |
| 일반 변수 사용 | 값은 바뀌지만 UI는 안 바뀜 |
| state 사용 | 값이 바뀌면 UI도 자동으로 갱신 |
| 비동기 작동 | setState 호출 직후엔 아직 값 반영 안 됨 |
| 해결 방법 | 콜백형 setState 사용 (`setCount(prev => prev + 1)`) |

---

## ✅ React 컴포넌트 생명주기 (Lifecycle)

### 1. 생명주기란?

- 컴포넌트가 **화면에 나타나고(생성)**
    
    → **업데이트되며 변화하다가**
    
    → **사라지는** 전 과정을 의미함
    

---

### 2. Class Component의 Lifecycle 단계

### ⛰ Mounting (태어날 때)

- `constructor()`: 초기 state 설정
- `render()`: UI 구성
- `componentDidMount()`: 화면 출력 후 실행 (데이터 로딩 등)

### 🔁 Updating (변할 때)

- `shouldComponentUpdate()`: 업데이트 여부 결정 (true/false)
- `render()`: 다시 렌더링
- `componentDidUpdate()`: 렌더링 후 실행됨

### 🌄 Unmounting (사라질 때)

- `componentWillUnmount()`: 정리 작업 (타이머 제거 등)

---

### 3. 예시: 콘솔로 생명주기 확인

```jsx
componentDidMount() {
  console.log("컴포넌트 생성됨");
}

componentDidUpdate() {
  console.log("컴포넌트 업데이트됨");
}

componentWillUnmount() {
  console.log("컴포넌트 제거됨");
}
```

---

### 4. 함수형 컴포넌트에서는?

- useEffect로 Lifecycle 대체

```jsx
useEffect(() => {
  console.log("마운트됨");

  return () => {
    console.log("언마운트됨");
  };
}, []); // 빈 배열이면 마운트 + 언마운트 감지
```

---

## 🔁 전체 흐름 요약

| 단계 | 함수 (Class) | 함수형 대응 (Hook) |
| --- | --- | --- |
| Mount | `constructor`, `componentDidMount` | `useEffect(() => {}, [])` |
| Update | `shouldComponentUpdate`, `componentDidUpdate` | `useEffect(() => {...})` |
| Unmount | `componentWillUnmount` | `useEffect`의 return 콜백 함수 |

---