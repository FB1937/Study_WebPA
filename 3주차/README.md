### 엘리먼트에 대해 알아보기

- **엘리먼트란?**
    
    리액트에서 **엘리먼트**는 화면에 표시되는 가장 작은 단위이며, 내부적으로 **자바스크립트 객체** 로 표현된다.
    
    즉, 리액트 앱을 구성하는 **기본 블록**이라고 할 수 있다.
    
    ```jsx
    const element = <h1>Hello, React!</h1>;
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(element);
    ```
    
    ✅ **설명**
    
    - `<h1>Hello, React!</h1>`는 JSX 문법으로 작성된 **엘리먼트**이다.
    - `ReactDOM.createRoot(root).render(element);`를 사용해 엘리먼트를 실제 DOM에 렌더링한다.
- **엘리먼트의 구조**
    
    리액트 엘리먼트는 `React.createElement(type, props, ...children)` 함수를 통해 생성된다.
    
    - `type` : HTML 태그(예: `'div'`, `'button'` 등) 또는 리액트 컴포넌트
    - `props` : 엘리먼트의 속성 (예: `className`, `id`, `onClick` 등)
    - `children` : 해당 엘리먼트의 자식 엘리먼트들
- **엘리먼트의 특징 - 불변성**
    
    한 번 생성된 엘리먼트는 변경될 수 없다. 따라서 화면을 업데이트하려면 **새로운 엘리먼트를 생성하여 기존 엘리먼트를 교체하는 방식** 을 사용한다.
    
    ```jsx
    const root = ReactDOM.createRoot(document.getElementById('root'));
    
    function tick() {
      root.render(
        <div>
          <h1>현재 시간:</h1>
          <h2>{new Date().toLocaleTimeString()}</h2>
        </div>
      );
    }
    
    setInterval(tick, 1000);
    ```
    
    이를 위해 리액트는 **Virtual DOM을 활용하여 변경된 부분만 렌더링** 한다.
    

---

### 엘리먼트 렌더링하기

- **렌더링 과정**
    - 리액트 엘리먼트가 생성되면, 이를 실제 화면에 표시하기 위해 **렌더링(Rendering)** 과정을 거친다.
    - 리액트의 렌더링은 **Virtual DOM → 실제 DOM** 으로 변화하는 과정이다.
- **root DOM node**
    - 리액트 엘리먼트는 일반적으로 `index.html` 의 `<div id="root"></div>` 같은 **루트 노드(root DOM node)** 에 렌더링된다.
    - `ReactDOM.createRoot(root).render(element);` 를 사용하여 엘리먼트를 root에 삽입할 수 있다.

---

### 렌더링된 엘리먼트 업데이트하기

- 앞서 설명한 **불변성 원칙** 때문에, 기존 엘리먼트를 직접 수정하는 것이 아니라 **새로운 엘리먼트를 생성하여 기존 엘리먼트를 교체** 한다.
- 리액트는 내부적으로 **변경된 부분을 감지(diffing)** 하여 **최소한의 변경만 실제 DOM에 반영** 한다.

---

### 시계 만들기 (예제)

- `Clock.jsx` 에서 `Date` 객체를 이용하여 실시간으로 시간을 표시하는 예제를 만든다.
- `index.js` 에서 `setInterval()` 을 사용하여 1초마다 새로운 엘리먼트를 생성하여 화면을 갱신한다.
- `npm start` 를 실행하면 실제로 동작하는 애플리케이션을 확인할 수 있다.

---

### 📌 요약

- **엘리먼트는 리액트에서 가장 작은 단위이며, 자바스크립트 객체 형태로 존재한다.**
- **불변성 원칙을 따르며, 변경 시 새로운 엘리먼트를 생성하여 기존 엘리먼트와 교체한다.**
- **렌더링 과정에서 Virtual DOM을 사용하여 변경된 부분만 실제 DOM에 반영한다.**
- **실제 동작하는 애플리케이션을 만들려면 root DOM node에 엘리먼트를 렌더링해야 한다.**