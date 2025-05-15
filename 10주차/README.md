## ✅ 1. 이벤트(Event)란?

> 사용자가 웹페이지와 상호작용할 때 발생하는 행동입니다.
> 

예:

- 버튼 클릭 → `onClick`
- 키보드 입력 → `onChange`, `onKeyDown`
- 마우스 올리기 → `onMouseOver`

즉, **“사용자가 뭔가 했을 때”** 그걸 감지해서 **어떤 반응을 할 수 있게 해주는 기능**입니다.

---

## ✅ 2. React에서 이벤트 쓰는 방법 (함수형 기준)

React에서는 HTML처럼 `onclick="함수()"` 이런 식이 아니라, **CamelCase(낙타표기법)** + **중괄호**로 씁니다.

### 📌 예시: 버튼 클릭 이벤트

```jsx
function MyButton() {
  function handleClick() {
    alert("버튼이 클릭되었습니다!");
  }

  return (
    <button onClick={handleClick}>
      클릭
    </button>
  );
}
```

- `onClick`은 이벤트 이름 (버튼 클릭)
- `handleClick`은 이벤트 핸들러 (실제로 실행할 함수)
- 함수 이름 뒤에 `()`를 붙이면 바로 실행되므로 주의 ❌

---

## ✅ 3. 이벤트 객체(event)

이벤트 핸들러 안에서 함수의 첫 번째 인자는 **이벤트 객체(event)**입니다.

이 객체를 통해 **어떤 요소에서 어떤 일이 일어났는지** 확인할 수 있어요.

### 📌 예시: 입력창에서 입력값 추적

```jsx
function InputBox() {
  function handleChange(event) {
    console.log("입력값:", event.target.value);
  }

  return <input onChange={handleChange} />;
}
```

- `event.target` → 이벤트가 발생한 태그 (`<input>`)
- `event.target.value` → 입력된 값

---

## ✅ 4. 인자(argument)를 넘겨주고 싶을 때

함수에 값을 넘기고 싶을 땐 `()`로 바로 실행하면 안 되고, **화살표 함수로 감싸야** 합니다.

### 📌 예시: 이름을 넘기는 버튼

```jsx
function MyButton() {
  const handleClick = (name) => {
    alert(`${name}님, 안녕하세요!`);
  };

  return (
    <button onClick={() => handleClick("홍길동")}>
      인사
    </button>
  );
}
```

---

## ✅ 5. 이벤트 안에서 상태 바꾸기 (`useState`와 함께)

### 📌 예시: 클릭할 때마다 숫자 증가

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>카운트: {count}</button>;
}
```

- 상태(state)를 바꾸면 컴포넌트가 자동으로 리렌더링 됨

---

## ✅ 6. 기본 동작 막기 (event.preventDefault)

### 📌 예시: 폼 전송 막기

```jsx
function MyForm() {
  const handleSubmit = (event) => {
    event.preventDefault(); // 새로고침 방지
    alert("폼 제출됨!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">제출</button>
    </form>
  );
}
```

---

## ✅ 7. 클래스 컴포넌트에서 이벤트

함수형 컴포넌트 말고 **클래스형**에서 쓸 땐 `this` 바인딩에 주의해야 합니다.

### 📌 예시

```jsx
class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("클래스형 버튼");
  }

  render() {
    return <button onClick={this.handleClick}>클릭</button>;
  }
}
```

- 클래스에서는 `this`가 필요하므로 `bind()` 해줘야 함
- 또는 화살표 함수로 바꿔도 됨

---

## ✅ 8. SyntheticEvent란?

React에서는 브라우저의 native 이벤트를 그대로 쓰지 않고, **SyntheticEvent**라는 걸 씁니다.

- 브라우저마다 이벤트 동작이 다른 걸 막기 위해 만든 **통합된 가짜 이벤트 객체**
- 대부분 native 이벤트처럼 쓰면 되지만,
- **비동기**로 쓸 땐 `event.persist()` 해줘야 안전

```jsx
function handleChange(event) {
  event.persist(); // 이걸 써야 나중에 비동기에서 사용 가능
  setTimeout(() => {
    console.log(event.target.value); // 가능
  }, 1000);
}
```

---

## ✅ 9. 주의사항 요약

| 실수 | 왜 문제인지 | 해결 방법 |
| --- | --- | --- |
| `onClick={handleClick()}` | 함수가 바로 실행됨 | `onClick={handleClick}` or `() => handleClick()` |
| `event.target.value` 오류 | `event`가 풀림 | `event.persist()` 필요 |
| 클래스에서 `this.handleClick` 오류 | `this`가 안 묶임 | `bind`하거나 화살표 함수로 작성 |

---

## 🧠 요약 정리

| 개념 | 설명 |
| --- | --- |
| `onClick`, `onChange` 등 | 이벤트 감지 |
| 핸들러 함수 | 이벤트 발생 시 실행할 함수 |
| 이벤트 객체 (`event`) | 이벤트 정보 담고 있음 |
| 상태 변경 (`useState`) | 이벤트로 상태도 바꿀 수 있음 |
| SyntheticEvent | React만의 이벤트 객체, cross-browser 대응 |
| 함수 즉시 실행 ❌ | 핸들러는 **참조만 전달**해야 함 |

---
## ✅ 조건부 렌더링(Conditional Rendering)이란?

React에서는 애플리케이션의 **상태(state)** 에 따라 **렌더링할 UI 요소를 다르게 보여주는 것**을 조건부 렌더링이라고 합니다.

예를 들어:

- 사용자가 로그인했는지 아닌지에 따라 "환영합니다!" 또는 "로그인 해주세요."를 보여주는 것
- 데이터가 있을 때만 목록을 보여주는 것

이러한 렌더링 방식을 구현하는 여러 방법이 있습니다.

---

## ✅ Truthy와 Falsy 개념

JavaScript에서 조건문에 사용할 수 있는 값들은 boolean이 아니어도 `true` 또는 `false`처럼 동작합니다.

이것을 **Truthy(참처럼 작동)**, **Falsy(거짓처럼 작동)** 라고 합니다.

### 🔸 Falsy 값 (조건에서 false처럼 작동함)

```
false
0
-0
0n
""
null
undefined
NaN
```

```
if (0) {
  console.log("참입니다!");
} else {
  console.log("거짓입니다!"); // 출력됨
}
```

### 🔸 Truthy 값 (조건에서 true처럼 작동함)

```
"hello"
" "
3.14
-100
[]
{}
function(){}
```

---

## ✅ 논리 연산자를 활용한 조건

### `||` (OR): 앞의 값이 Falsy면 뒤의 값 사용

```
let name = "" || "홍길동";
console.log(name); // "홍길동"
```

### `&&` (AND): 앞의 값이 Truthy면 뒤의 값 사용

```
let message = isAdmin && "관리자 계정입니다.";
```

### `??` (Null 병합 연산자): null 또는 undefined일 경우만 대체값 사용

```
let age = 0;
console.log(age ?? 20); // 0 출력 (Falsy지만 null/undefined가 아니므로 유지)
```

---

## ✅ 조건부 렌더링 구현 방법

### 1. 삼항 연산자 (`condition ? A : B`)

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <h1>{isLoggedIn ? "환영합니다!" : "로그인이 필요합니다."}</h1>
  );
}
```

### 2. 논리 연산자 (`&&`)

```jsx
function Notification({ hasMessage }) {
  return (
    <div>
      <h1>안녕하세요!</h1> 
      {hasMessage && <p>새로운 메시지가 도착했습니다.</p>}
    </div>
  );
}
```

---

## ✅ 엘리먼트 변수(Element Variables)

JSX 요소를 변수에 저장해서 조건에 따라 선택적으로 렌더링할 수 있습니다.

```jsx
function App() {
  const isLoggedIn = true;
  const greeting = isLoggedIn ? <h1>환영합니다!</h1> : <h1>로그인 해주세요.</h1>;
  return <div>{greeting}</div>;
}
```

여러 개의 JSX를 조건으로 묶을 수도 있습니다:

```jsx
return (
  <div>
    {isLoggedIn ? (
      <>
        <h1>환영합니다!</h1>
        <button>로그아웃</button>
      </>
    ) : (
      <button>로그인</button>
    )}
  </div>
);
```

---

## ✅ 즉시 실행 함수 표현식(IIFE)

JSX 안에서 if 문을 쓰고 싶다면 즉시 실행 함수로 감쌀 수 있습니다.

```jsx
function UserProfile({ user }) {
  return (
    <div>
      {(() => {
        if (!user) return <p>사용자 정보 없음</p>;
        return <p>사용자: {user.name}</p>;
      })()}
    </div>
  );
}
```

---

## ✅ switch 문 활용

여러 상태 중 하나에 따라 다른 UI를 보여줄 때 유용합니다.

```jsx
function StatusMessage({ status }) {
  switch (status) {
    case "success":
      return <p>성공적으로 처리되었습니다!</p>;
    case "error":
      return <p>오류가 발생했습니다.</p>;
    case "loading":
      return <p>로딩 중...</p>;
    default:
      return <p>상태를 확인할 수 없습니다.</p>;
  }
}
```

---

## ✅ 버튼과 상태(useState)로 조건 렌더링

```jsx
import React, { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "숨기기" : "보이기"}
      </button>
      {isVisible && <p>이 메시지가 보입니다!</p>}
    </div>
  );
}
```

---

## ✅ 툴바 실습 예제 요약

### `Toolbar.jsx`

```jsx
function Toolbar({ isLoggedIn, onClickLogin, onClickLogout }) {
  return (
    <div style={{ padding: 16, borderBottom: "1px solid gray" }}>
      {isLoggedIn && <span style={{ marginRight: 8 }}>환영합니다!</span>}
      {isLoggedIn ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
}
```

### `LandingPage.jsx`

```jsx
function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={() => setIsLoggedIn(true)}
        onClickLogout={() => setIsLoggedIn(false)}
      />
    </div>
  );
}
```

---

## ✅ 요약: 조건부 렌더링 방식 비교

| 방식 | 사용 형태 | 특징 |
| --- | --- | --- |
| 삼항 연산자 | `{condition ? A : B}` | 간결한 표현 |
| 논리 연산자 && | `{condition && A}` | 특정 조건에서만 표시 |
| if 문 | `if (condition) return A` | 복잡한 조건 처리에 적합 |
| 컴포넌트 분리 | `<ComponentA />` | 재사용성과 가독성 높음 |
| IIFE | `{(() => { return A })()}` | JSX 안에서 if문 사용 가능 |
| switch | `switch (status) { case A: return B }` | 여러 조건 처리 |
| 버튼 + 상태 | `useState`로 상태 변경 | 동적인 UI 렌더링 가능 |