# TODO List 프로젝트 요약 정리

## 📌 목표

- React로 TODO 리스트 앱을 만드는 실습
- `styled-components`로 스타일링
- Context API로 상태 관리
- 커스텀 Hook 및 최적화 기법 적용

---

## 📁 프로젝트 시작

```bash
npx create-react-app mashup-todolist
cd mashup-todolist
yarn add styled-components react-icons
```

---

## 🧩 주요 컴포넌트 구성

| 컴포넌트 | 역할 요약 |
| --- | --- |
| `TodoTemplate` | 앱 전체 레이아웃 설정 |
| `TodoHead` | 오늘 날짜, 요일, 남은 할 일 개수 표시 |
| `TodoList` | 할 일 목록 전체 렌더링 |
| `TodoItem` | 개별 할 일 항목 표시 및 토글/삭제 기능 |
| `TodoCreate` | 새 할 일 추가 (버튼 + 입력 폼) |

---

## 🎨 전역 스타일 설정

```
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
```

---

## 💡 컴포넌트 제작 흐름

1. **TodoTemplate**
    - 중앙 정렬, 흰 배경, 그림자 박스 UI
2. **TodoHead**
    - `new Date()` + `toLocaleDateString()`으로 날짜 표시
    - `useTodoState()`로 남은 할 일 개수 표시
3. **TodoList**
    - `useTodoState()` → map으로 `TodoItem` 목록 렌더링
4. **TodoItem**
    - `useTodoDispatch()`
    - 완료(toggle), 삭제(dispatch) 처리
    - `React.memo()`로 성능 최적화

1. **TodoCreate**
    - `useState`, `useRef`로 입력 및 폼 상태 관리
    - `MdAdd` 아이콘 사용, 버튼 토글
    - `onSubmit`에서 dispatch로 새 항목 생성

---

## ⚙️ 상태 관리 - Context API

```
// TodoContext.js
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
export const TodoNextIdContext = createContext();
```

- `TodoProvider` 안에서 `useReducer` + `useRef(5)`
- `useTodoState`, `useTodoDispatch`, `useTodoNextId` 커스텀 Hook 제공
- 각 Hook에 에러 처리 로직 포함 (Provider 외부에서 사용 시 오류 발생)

---

## ⚙️ Reducer 구조

```
function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
```

---

## 🧪 최종 통합

```jsx
<App>
  <TodoProvider>
    <GlobalStyle />
    <TodoTemplate>
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </TodoTemplate>
  </TodoProvider>
</App>
```