### 1. **컴포넌트(Component)**

- 리액트 애플리케이션은 **컴포넌트**의 조합으로 구성됨.
- 컴포넌트는 특정한 속성(Props)을 입력받아 리액트 엘리먼트를 생성하고 반환하는 역할.

### 2. **Props (Property)**

- 컴포넌트에 데이터를 전달하는 **읽기 전용(immutable) 속성**.
- 키-값 형태로 전달되며, 정수, 변수, 다른 컴포넌트도 가능함.

### 3. **컴포넌트 종류**

- 함수 컴포넌트 (주로 사용)
- 클래스 컴포넌트 (이전 방식)

### 4. **컴포넌트 만들기**

- 컴포넌트 이름은 **대문자로 시작**해야 함.
- `Virtual DOM`에서 `실제 DOM`으로 렌더링됨.

### **✔️ 함수형 컴포넌트 (Function Component)**

```jsx
import React from "react";

function Welcome(props) {
  return <h1>안녕하세요, {props.name}님!</h1>;
}

export default Welcome;
```

✅ **설명**:

- `props.name`을 받아서 사용자에게 인사하는 간단한 함수형 컴포넌트.

### **✔️ 클래스형 컴포넌트 (Class Component, 잘 사용하지 않음)**

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>안녕하세요, {this.props.name}님!</h1>;
  }
}

export default Welcome;
```

✅ **설명**:

- `render()` 함수 내부에서 `this.props.name`을 사용.

### 5. **컴포넌트 합성**

- 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만들 수 있음.

### **✔️ 예제 코드**

```jsx
import React from "react";

function Header() {
  return <h1>리액트 컴포넌트 합성</h1>;
}

function Content() {
  return <p>이것은 여러 개의 컴포넌트를 합성하여 만든 예제입니다.</p>;
}

function Page() {
  return (
    <main>
      <Header />
      <Content />
    </main>
  );
}

export default Page;
```

✅ **설명**:

- `Header`, `Content` 컴포넌트를 만들고 이를 `Page` 컴포넌트에서 합성하여 사용.

### 6. 컴포넌트 추출

- 기존 컴포넌트의 일부를 새로운 컴포넌트로 추출하여 재사용 가능.
- 기능 단위로 구분하는 것이 좋음
- 곧바로 재사용이 가능한 형태로 추출하는 것이 좋음

### **✔️ 기존 코드 (큰 컴포넌트)**

```jsx
import React from "react";

function Profile() {
  return (
    <div>
      <h2>사용자 정보</h2>
      <img src="profile.jpg" alt="프로필 사진" width="100" />
      <p>이름: 홍길동</p>
      <p>나이: 30</p>
    </div>
  );
}

export default Profile;
```

✅ **문제점**:

- 이미지, 텍스트 등이 한 곳에 몰려 있어 유지보수가 어려움.

### **✔️ 추출 후 코드**

```jsx
import React from "react";

function Avatar({ src }) {
  return <img src={src} alt="프로필 사진" width="100" />;
}

function UserInfo({ name, age }) {
  return (
    <div>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
    </div>
  );
}

function Profile() {
  return (
    <section>
      <h2>사용자 정보</h2>
      <Avatar src="profile.jpg" />
      <UserInfo name="홍길동" age={30} />
    </section>
  );
}

export default Profile;
```

✅ **장점**:

- `Avatar`와 `UserInfo`를 분리하여 코드 가독성과 재사용성을 높임.

---

### **예제 코드 (댓글 컴포넌트 만들기)**

### `Comment.jsx`

```jsx
import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    }
};
function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    style={styles.image}
                    alt='pic1'
                />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}
export default Comment;
```

✅ **설명**:

- `props`를 받아 **작성자(author)와 댓글 내용(text)**을 표시하는 단순한 함수형 컴포넌트.

---

### `CommentList.jsx`

```jsx
import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인제",
        comment: "안녕하세요, 소플입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요~!",
    },
    {
        name: "강민경",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
];
function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
```

✅ **설명**:

- `comments` 배열을 반복하여 여러 개의 `Comment` 컴포넌트를 생성.

---

### `index.js`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<App />);
```

✅ **설명**:

- `CommentList` 컴포넌트를 `root` 요소에 렌더링하여 화면에 출력.

---

### **`App.js`**

```jsx
import React from "react";
import CommentList from './components/CommentList';

function App() {
  return (
    <CommentList />
  );
}

export default App;
```

- `CommentList`를 `App.js`에서 **불러와야 렌더링이 됨**

---

### **📁 최종 폴더 구조 (정리)**

```
📂 my-react-app
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Comment.jsx
 ┃ ┃ ┣ 📜 CommentList.jsx
 ┃ ┣ 📜 App.js  
 ┃ ┣ 📜 index.js
 ┣ 📜 package.json
 ┣ 📜 README.md
```

### 결과 :

![Image](https://github.com/user-attachments/assets/126a117c-15b6-4b5a-81ce-4299fc1593b3)