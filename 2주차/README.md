## **1. 리액트란?**

- *리액트(React)**는 사용자 인터페이스(UI)를 구축하기 위한 **자바스크립트 라이브러리**야.

**메타(구 페이스북)**가 2013년에 개발했고, 현재 프런트엔드 개발에서 가장 많이 사용되고 있어.

특히 **SPA(Single Page Application)** 개발을 쉽게 할 수 있도록 도와줘.

👉 SPA는 한 개의 HTML 페이지에서 필요한 부분만 변경하는 방식이야.

💡 **라이브러리 vs 프레임워크?**

- **라이브러리**: 필요한 기능만 선택해서 사용 가능 (예: 리액트)
- **프레임워크**: 정해진 방식대로 개발해야 함 (예: 앵귤러, Vue.js)

## **2. 리액트의 특징**

## 1. **React.js란?**

React.js는 Facebook(현 Meta)에서 만든 **프론트엔드 라이브러리**로, UI를 효율적으로 만들기 위해 사용됨.

- **선언형(Declarative)**: HTML을 직접 조작하는 게 아니라, **UI 상태**를 선언하면 React가 알아서 업데이트.
- **컴포넌트 기반(Component-Based)**: UI를 독립적인 **컴포넌트(Component)** 단위로 나누어 관리.
- **가상 DOM(Virtual DOM)**: 실제 DOM을 직접 수정하지 않고, 변경 사항을 비교 후 최소한의 업데이트만 적용.

---

### JSX (JavaScript XML)

React에서 HTML과 비슷한 문법을 사용하여 UI를 작성하는 방법.

```jsx
const element = <h1>Hello, React!</h1>;
```

> JSX는 JavaScript 코드 안에서 HTML을 작성할 수 있도록 도와줌.
> 

---

### ① Virtual DOM (가상 DOM)

리액트는 **Virtual DOM**을 사용해서 변경된 부분만 업데이트해.

- **기존 방식:** 실제 DOM을 직접 수정 → 성능 저하
- **리액트 방식:** Virtual DOM에서 변경 사항을 비교한 후, 필요한 부분만 업데이트 → 성능 향상

### ② 컴포넌트 기반 구조

리액트에서는 모든 UI를 **컴포넌트(Component)**로 나누어 관리해.

컴포넌트는 **재사용 가능**하고, **독립적**으로 동작하는 UI 단위야.

예를 들어, **버튼(Button) 컴포넌트**를 만들어서 여러 곳에서 사용할 수 있어.

```jsx
function MyButton() {
  return <button>클릭!</button>;
}
```

### **함수형 컴포넌트**

```jsx
function Greeting() {
  return <h1>Hello, World!</h1>;
}
```

### **클래스형 컴포넌트** (잘 사용하지 않음)

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}
```

> 함수형 컴포넌트가 더 가볍고 성능이 좋기 때문에 최근에는 함수형 컴포넌트를 주로 사용.
> 

### ③ State(상태)와 Props(속성)

리액트에서 **동적인 UI**를 만들 때 중요한 개념이야.

- **State**: 컴포넌트 내부에서 변경 가능한 값

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

- **Props**: 부모 컴포넌트가 자식 컴포넌트에 전달하는 값

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
<Welcome name="Alice" />; // "Hello, Alice!"
```

> Props는 읽기 전용(Read-Only)! 변경하려면 state를 사용해야 함.
> 

📌 **State 예제** (버튼 클릭 시 숫자 증가)

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 숫자: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}
```

> useState를 사용하면 컴포넌트의 상태(state) 를 관리할 수 있음.
> 

---

## **3. 리액트의 장점**

✅ **빠른 업데이트와 렌더링 속도** → Virtual DOM 덕분에 성능이 뛰어남

✅ **컴포넌트 기반 구조** → 코드 재사용성이 높고 유지보수가 쉬움

✅ **활발한 커뮤니티와 지원** → 메타(페이스북)에서 지원하고, 라이브러리 생태계가 풍부함

✅ **모바일 개발 가능** → React Native를 사용하면 모바일 앱도 개발할 수 있음

## **4. 리액트의 단점**

❌ **배워야 할 개념이 많음** → JSX, Virtual DOM, 상태 관리 등 익숙해지는 데 시간이 필요함

❌ **State 관리가 어려울 수 있음** → 상태가 많아지면 Redux 같은 추가 라이브러리가 필요할 수도 있음

---

## **5. 리액트 프로젝트 시작하기**

### **STEP 1: 기존 HTML 웹사이트에 리액트 적용**

일반적인 HTML 페이지에 `<script>` 태그를 추가해서 React를 사용할 수도 있어.

📌 **index.html**

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>React 적용</title>
</head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script>
    ReactDOM.render(React.createElement('h1', null, 'Hello React!'), document.getElementById('root'));
  </script>
</body>
</html>
```

### **STEP 2: CSS로 스타일링하기**

📌 **styles.css**

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}
```

### **STEP 3: React.js로 컴포넌트 만들기**

📌 **MyButton.js**

```jsx
function MyButton() {
  return <button>클릭하세요!</button>;
}

ReactDOM.render(<MyButton />, document.getElementById('root'));
```

---

## **6. CRA(Create React App)로 리액트 프로젝트 생성**

### **1️⃣ 프로젝트 생성 (`create-react-app` 사용)**

아래 명령어를 실행하면 리액트 프로젝트가 자동으로 설정돼.

```
npx create-react-app my-app
```

📌 `npx`는 최신 버전의 `create-react-app`을 자동으로 다운로드해서 실행.

📌 `my-app` 대신 원하는 프로젝트 이름을 넣을 수 있음.

> 만약 npx create-react-app이 안 된다면?
> 
> 
> ```
> npm install -g create-react-app  # 글로벌 설치
> create-react-app my-app
> ```
> 

---

### **2️⃣ 프로젝트 폴더로 이동**

```
cd my-app
```

---

### **3️⃣ 개발 서버 실행 (`npm start`)**

```
npm start
```

✅ 기본적으로 **localhost:3000**에서 실행.

---

### **4️⃣ 빌드 및 배포 (`npm run build`)**

```
npm run build
```

✅ `build` 폴더가 생성되며, 최적화된 정적 파일이 만들어짐.

✅ 이 파일을 서버에 업로드하면 배포 가능!

---

### **📌 추가 npm 명령어**

| 명령어 | 설명 |
| --- | --- |
| `npm install [패키지명]` | 패키지 설치 |
| `npm install` | `package.json` 기반 패키지 설치 |
| `npm uninstall [패키지명]` | 패키지 삭제 |
| `npm run build` | 배포용 파일 생성 |
| `npm test` | 테스트 실행 |
| `npm run eject` | 숨겨진 설정 파일 꺼내기 (주의: 되돌릴 수 없음) |