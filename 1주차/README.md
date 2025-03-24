---

## **1. HTML (HyperText Markup Language)**

HTML은 웹페이지의 구조를 정의하는 마크업 언어입니다. 마크업 언어란, 문서의 구조를 태그(tag)로 감싸서 지정하는 언어입니다.

### **1.1 HTML의 기본 구조**

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML 기본 구조</title>
</head>
<body>
    <h1>안녕하세요</h1>
    <p>이것은 HTML 문서입니다.</p>
</body>
</html>
```

- `<!DOCTYPE html>`: HTML5 문서임을 선언
- `<html>`: 웹 문서의 루트 요소
- `<head>`: 문서의 메타 정보 포함
- `<body>`: 화면에 표시될 내용을 포함

### **1.2 HTML 주요 태그**

- **텍스트 관련 태그**
    - `<h1>~<h6>`: 제목 태그
    - `<p>`: 문단(Paragraph) 태그
    - `<a href="https://example.com">링크</a>`: 하이퍼링크
- **레이아웃 관련 태그**
    - `<div>`: 블록 요소로 구획 나누기
    - `<span>`: 인라인 요소로 텍스트 일부 스타일 지정
- **입력 폼 관련 태그**
    - `<input type="text">`: 텍스트 입력
    - `<button>버튼</button>`: 버튼 생성
    - `<form>`: 사용자 입력을 서버로 제출

---

## **2. CSS (Cascading Style Sheets)**

CSS는 HTML 요소들의 스타일을 지정하는 언어입니다.

### **2.1 CSS 적용 방법**

1. **인라인 스타일**
    
    ```html
    <p style="color: red;">이 문장은 빨간색입니다.</p>
    ```
    
2. **내부 스타일 (HTML 내 `<style>` 태그 사용)**
    
    ```html
    <style>
        p {
            color: blue;
        }
    </style>
    ```
    
3. **외부 스타일 (CSS 파일 연결)**
    
    ```html
    <link rel="stylesheet" href="styles.css">
    ```
    

### **2.2 CSS 주요 속성**

- `color`: 글자 색상
- `font-size`: 글자 크기
- `margin`: 바깥 여백
- `padding`: 안쪽 여백
- `display`: 블록/인라인 여부 (`block`, `inline`, `flex`, `grid` 등)

---

## **3. JavaScript (ECMAScript)**

JavaScript는 웹페이지에 동적인 기능을 추가하는 프로그래밍 언어입니다.

### **3.1 JavaScript의 기본 문법**

```jsx
let message = "안녕하세요";
console.log(message); // 콘솔에 출력
```

- `let`: 변수를 선언하는 키워드
- `console.log()`: 값을 출력하는 함수

### **3.2 JavaScript의 자료형**

1. **기본 자료형 (Primitive Type)**
    - `number`: 숫자 (정수, 실수 포함)
    - `string`: 문자열
    - `boolean`: 참/거짓 (`true` / `false`)
    - `null`: 값이 없음
    - `undefined`: 정의되지 않음
2. **참조 자료형 (Reference Type)**
    - `Array`: 여러 개의 값을 저장하는 배열
    - `Object`: 키(key)와 값(value)로 이루어진 데이터 구조
    
    ```jsx
    let person = {
        name: "철수",
        age: 25
    };
    console.log(person.name); // 철수
    ```
    

### **3.3 연산자**

- **산술 연산자**: `+`, , , `/`, `%`
- **비교 연산자**: `==`, `===`, `!=`, `!==`
- **논리 연산자**: `&&`, `||`, `!`
- **삼항 연산자**: `조건 ? 참일 경우 : 거짓일 경우`
    
    ```jsx
    let age = 20;
    let status = age >= 18 ? "성인" : "미성년자";
    console.log(status); // "성인"
    ```
    

### **3.4 함수**

함수는 입력을 받아 특정 작업을 수행한 후 결과를 반환하는 코드 블록입니다.

## 1. 함수 선언 방식

### **1.1 함수 선언식 (Function Declaration)**

```jsx
javascript
코드 복사
function greet(name) {
    return `안녕하세요, ${name}님!`;
}
console.log(greet("철수")); // 출력: "안녕하세요, 철수님!"

```

✔ **특징**

- `function` 키워드를 사용하여 선언
- 호출하기 전에 선언해도 사용할 수 있음 (호이스팅 적용됨)

---

### **1.2 함수 표현식 (Function Expression)**

```jsx
javascript
코드 복사
const greet = function(name) {
    return `안녕하세요, ${name}님!`;
};
console.log(greet("영희")); // 출력: "안녕하세요, 영희님!"

```

✔ **특징**

- `const` 또는 `let`을 사용하여 함수를 변수에 할당
- 호출하기 전에 선언해야 사용 가능 (호이스팅 적용 안 됨)

---

### **1.3 화살표 함수 (Arrow Function, ES6)**

```jsx
javascript
코드 복사
const greet = (name) => `안녕하세요, ${name}님!`;
console.log(greet("민수")); // 출력: "안녕하세요, 민수님!"

```

✔ **특징**

- `function` 키워드 없이 `=>` 사용
- 코드가 간결해짐
- `return` 생략 가능 (한 줄일 때)

**💡 예제: 화살표 함수의 다양한 형태**

```jsx
javascript
코드 복사
// 매개변수가 여러 개일 때
const add = (a, b) => a + b;
console.log(add(3, 4)); // 출력: 7

// 실행할 코드가 여러 줄일 때 (중괄호 필요)
const introduce = (name, age) => {
    return `이름: ${name}, 나이: ${age}`;
};
console.log(introduce("철수", 25)); // 출력: "이름: 철수, 나이: 25"

// 매개변수가 없을 때
const sayHello = () => "안녕하세요!";
console.log(sayHello()); // 출력: "안녕하세요!"

```

---

## **2. 매개변수와 기본값**

함수의 매개변수에 기본값을 설정하면, 호출할 때 인자를 생략해도 기본값이 사용됩니다.

```jsx
javascript
코드 복사
function greet(name = "손님") {
    return `안녕하세요, ${name}님!`;
}
console.log(greet()); // 출력: "안녕하세요, 손님님!"
console.log(greet("철수")); // 출력: "안녕하세요, 철수님!"

```

---

## **3. 즉시 실행 함수 (IIFE)**

즉시 실행 함수(IIFE, Immediately Invoked Function Expression)는 선언과 동시에 실행되는 함수입니다.

```jsx
javascript
코드 복사
(function() {
    console.log("이 함수는 즉시 실행됩니다!");
})(); // 출력: "이 함수는 즉시 실행됩니다!"

```

✔ **특징**

- 한 번만 실행되는 함수
- 전역 범위 오염을 방지

---

## **4. 콜백 함수 (Callback Function)**

함수를 다른 함수의 인자로 전달하여 실행할 수 있습니다.

```jsx
javascript
코드 복사
function processUserInput(callback) {
    let name = "철수";
    callback(name);
}

processUserInput(function(name) {
    console.log(`안녕하세요, ${name}님!`);
});
// 출력: "안녕하세요, 철수님!"

```

✔ **특징**

- 비동기 처리 (setTimeout, 이벤트 리스너 등)에서 자주 사용됨
- 다른 함수에 넘겨서 실행할 수 있음

**💡 예제: setTimeout과 콜백 함수**

```jsx
javascript
코드 복사
setTimeout(() => {
    console.log("3초 후 실행됩니다!");
}, 3000);

```

---

## **5. 함수의 반환값 (return)**

함수는 `return` 키워드를 사용하여 값을 반환할 수 있습니다.

```jsx
javascript
코드 복사
function multiply(a, b) {
    return a * b;
}
let result = multiply(5, 2);
console.log(result); // 출력: 10

```

**💡 return 없이 함수 실행**

```jsx
javascript
코드 복사
function noReturn() {
    console.log("이 함수는 값을 반환하지 않습니다.");
}
console.log(noReturn()); // 출력: "이 함수는 값을 반환하지 않습니다." + undefined

```

✔ **특징**

- `return`이 없으면 `undefined`가 반환됨

---

## **6. 재귀 함수 (Recursive Function)**

자기 자신을 호출하는 함수로, 반복적인 작업을 수행할 때 사용됩니다.

```jsx
javascript
코드 복사
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 출력: 120

```

✔ **특징**

- 종료 조건을 명확히 해야 함 (무한 루프 방지)
- 반복문을 대신할 수 있음

---

## **7. 함수 내부에서 this 키워드**

`this`는 함수가 호출되는 방식에 따라 다르게 동작합니다.

```jsx
javascript
코드 복사
const user = {
    name: "철수",
    greet: function() {
        console.log(`안녕하세요, ${this.name}님!`);
    }
};
user.greet(); // 출력: "안녕하세요, 철수님!"

```

✔ **특징**

- 객체의 메서드 안에서 `this`는 해당 객체를 가리킴
- 화살표 함수에서는 `this`가 다르게 동작함 (상위 스코프의 `this`를 유지)

**💡 화살표 함수에서 this**

```jsx
javascript
코드 복사
const user = {
    name: "철수",
    greet: () => {
        console.log(`안녕하세요, ${this.name}님!`);
    }
};
user.greet(); // 출력: "안녕하세요, undefined님!" (this가 윈도우 객체를 가리킴)

```

---

## **결론**

| 함수 종류 | 특징 |
| --- | --- |
| 함수 선언식 | 선언 전에 호출 가능 (호이스팅) |
| 함수 표현식 | 변수에 저장, 선언 후에만 호출 가능 |
| 화살표 함수 | `function` 없이 간결한 문법 |
| 즉시 실행 함수 | 한 번만 실행되는 함수 |
| 콜백 함수 | 다른 함수에 전달되어 실행되는 함수 |
| 재귀 함수 | 자기 자신을 호출하는 함수 |

---

## **4. 개발 환경 설정**

리액트를 사용하려면 몇 가지 개발 도구를 설치해야 합니다.

### **4.1 Node.js와 npm 설치**

Node.js는 JavaScript를 서버에서 실행할 수 있는 런타임 환경이며, npm(Node Package Manager)은 JavaScript 패키지를 관리하는 도구입니다.

1. [Node.js 공식 사이트](https://nodejs.org/)에서 설치
2. 설치 후 터미널에서 확인
    
    ```
    node -v  # Node.js 버전 확인
    npm -v   # npm 버전 확인
    ```
    

### **4.2 VS Code 설치**

VS Code는 마이크로소프트에서 제공하는 코드 편집기입니다.

설치 후, `Terminal > New Terminal`을 열어 터미널을 실행할 수 있습니다.