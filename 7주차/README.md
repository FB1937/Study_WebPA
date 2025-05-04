### Hooks

---

## 1. Hooks란?

- *Hook(훅)**이란 함수 컴포넌트에서 **React 기능**(state, 생명주기 등)을 사용할 수 있게 해주는 기능입니다.
- 갈고리(hook)를 건다는 비유처럼, 원하는 시점에 기능을 끼워넣어 실행합니다.
- 클래스형 컴포넌트에서만 가능하던 기능을 **함수형 컴포넌트**에서도 사용 가능하게 만듭니다.
- 모든 Hook의 이름은 `use`로 시작합니다 (예: `useState`, `useEffect` 등).

---

## 2. useState

### 📌 개념

- 함수형 컴포넌트에서 상태 값을 만들 수 있게 해주는 Hook
- 클래스 컴포넌트의 `this.state`, `this.setState`를 대체

### ✅ 기본 사용법

```jsx
const [state, setState] = useState(initialValue);
```

- `state`: 현재 상태 값
- `setState`: 상태를 변경하는 함수
- `initialValue`: 상태의 초기 값

### ✅ 예제 1: 상태 없이 동작하는 Counter.jsx

```jsx
function Counter(props) {
  var count = 0;
  return (
    <div>
      <p>총 {count} 번 클릭했습니다.</p>
      <button onClick={() => console.log(count++)}>클릭</button>
    </div>
  );
}
```

- `count`는 증가하더라도 리렌더링이 일어나지 않음 → **상태 관리 필요**

### ✅ 예제 2: 상태 관리하는 Counter2.jsx

```jsx
function Counter2(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>총 {count} 번 클릭했습니다.</p>
      <button onClick={() => setCount(count+1)}>클릭</button>
    </div>
  );
}
```

- `setCount()` 호출 시 컴포넌트가 다시 렌더링됨

### 추가 개념 요약

| 상황 | 코드 예시 |
| --- | --- |
| 객체 상태 변경 | `setState(prev => ({ ...prev, 변경 }))` |
| 배열 상태 변경 | `setState([...배열, 새 요소])` |
| 함수형 업데이트 | `setState(prev => prev + 1)` |

---

## 3. useEffect

### 📌 개념

- 컴포넌트의 **부수 효과(Side Effect)**를 처리하는 Hook
- `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`의 역할을 대체

### ✅ 기본 문법

```jsx
useEffect(() => {
  // 실행할 코드
  return () => {
    // cleanup (언마운트 시 실행)
  };
}, [의존성 배열]);
```

### ✅ 다양한 사용 예시

### 1) 마운트 시 한 번 실행

```jsx
useEffect(() => {
  console.log("컴포넌트가 마운트됨!");
}, []);

```

### 2) 특정 상태 변경 시 실행

```jsx
useEffect(() => {
  console.log(`카운트 값이 변경됨: ${count}`);
}, [count]);
```

### 3) 언마운트 시 정리

```jsx
useEffect(() => {
  const interval = setInterval(() => console.log("1초마다 실행"), 1000);
  return () => {
    console.log("타이머 정리");
    clearInterval(interval);
  };
}, []);
```

### ✅ 예제: MouseTracker.jsx (마우스 위치 추적)

```jsx
useEffect(() => {
  const updatePosition = e => setPosition({ x: e.clientX, y: e.clientY });
  window.addEventListener("mousemove", updatePosition);
  return () => window.removeEventListener("mousemove", updatePosition);
}, []);
```

### ✅ 예제: FetchData.jsx (API 호출)

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => setData(data.slice(0, 5)));
}, []);
```

### ✅ 예제: Accommodate.jsx (정원 제한 로직)

- `useCounter` 훅과 함께 사용하여 인원 수용 상태를 관리
- 상태 변경 감지하여 isFull 여부 판단

---

## 4. useMemo

### 📌 개념

- 연산 비용이 큰 계산의 결과를 **캐시**하여 렌더링 성능 최적화

### ✅ 기본 문법

```jsx
const memoizedValue = useMemo(() => 계산(), [의존성]);
```

### ✅ 예제: ExpensiveCalculation.jsx

```jsx
const expensiveResult = useMemo(() => {
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += number;
  }
  return result;
}, [number]);
```

- `number`가 바뀔 때만 재계산함

### ✅ 객체 메모이제이션

```jsx
const user = useMemo(() => ({ name }), [name]);
```

- 객체는 참조형이므로 매번 새로 생성됨 → useMemo로 최적화 필요

### ❗주의사항

- 사이드 이펙트는 useEffect에서 처리해야 함
- 의존성 배열을 올바르게 설정해야 함

---

## 5. useCallback

### 📌 개념

- 함수 자체를 메모이제이션해서 매번 새로 생성되지 않도록 함

### ✅ 기본 문법

```jsx
const memoizedFn = useCallback(() => 함수내용, [의존성]);
```

### ✅ 예제: 자식 컴포넌트 렌더링 방지

```jsx
const handleClick = useCallback(() => console.log("버튼 클릭됨"), []);
```

- useCallback을 사용하지 않으면 매 렌더링마다 함수가 새로 생성되어 자식 컴포넌트가 불필요하게 렌더링됨

### ✅ 예제: useMemo와 함께 사용

```jsx
const filteredList = useMemo(() => {
  return list.filter(item => item.includes(query));
}, [query]);

const handleChange = useCallback((e) => {
  setQuery(e.target.value);
}, []);
```

---

## 6. useRef

### 📌 개념

- DOM에 직접 접근하거나 리렌더링 없이 값을 유지하고 싶을 때 사용

### ✅ DOM 접근 예제

```jsx
const inputRef = useRef(null);
useEffect(() => {
  inputRef.current.focus();
}, []);
```

### ✅ 렌더링 없이 값 저장

```jsx
const countRef = useRef(0);
const increment = () => {
  countRef.current += 1;
  console.log("Ref 값:", countRef.current);
};
```

### ✅ 이전 값 저장

```jsx
const prevCountRef = useRef();
useEffect(() => {
  prevCountRef.current = count;
}, [count]);
```

---

## 7. Custom Hook

### 📌 개념

- `use`로 시작하며 내부에 다른 Hook을 사용하는 함수
- 공통 로직을 추출해 **재사용성** 향상

### ✅ 예제: useCounter

```jsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  return { count, increment, decrement, reset };
}
```

### ✅ 예제: useFetch (API 호출 전용 훅)

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}
```

### ✅ 예제: usePrevious

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
```

---

## 8. Hook 사용 규칙

1. **최상위에서만 호출해야 함**
    - 조건문, 반복문 안에서 호출 X
2. **React 함수형 컴포넌트나 Custom Hook 안에서만 호출**

### 추천 ESLint 플러그인:

`eslint-plugin-react-hooks`

---

## 9. React 관련 도구/라이브러리

- 상태 관리: Redux, MobX, Recoil, Zustand
- 라우팅: React Router
- UI 라이브러리: Material UI, Ant Design, Chakra UI
- Form 관리: React Hook Form, Formik
- 애니메이션: Framer Motion
- 데이터 Fetch: Axios, React Query
- 테스트: React Testing Library

### 추천 VS Code 확장:

- ES7+ React/Redux snippets
- React Developer Tools
- Prettier, ESLint

---