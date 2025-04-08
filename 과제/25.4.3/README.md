## 🎯 Ai를 이용한 자기소개 페이지
![Image](https://github.com/user-attachments/assets/35222d85-53fe-4f75-924e-9ce564066901)


### 1. **Vite + React 프로젝트 생성**

- `npm create vite@latest` 명령어로 프로젝트 생성
- 템플릿으로 **React + TypeScript** 선택
- 폴더 구조 설정 (`components`, `assets`, `styles` 등)

---

### 2. **기본 UI 구성**

- **`App.tsx`** 에 전체 레이아웃 구성
    - `Header`, `About`, `Skills`, `Projects`, `Contact`, `Footer` 컴포넌트로 나누어 구조화

---

### 3. **다이나믹한 효과 적용**

- `framer-motion`으로 **부드러운 애니메이션 효과** 추가
- 각 섹션 컴포넌트(`Skills`, `Projects`, 등)에 스크롤 시 등장 애니메이션 구현

---

### 4. **Skills 차트 구현**

- `react-circular-progressbar` 라이브러리 사용
- 원형 스킬 그래프를 사용해서 시각적으로 표현력 있는 스킬 섹션 완성

---

### 5. **Contact 폼 구현**

- 사용자 정보 입력 가능한 폼 생성 (`이름`, `이메일`, `메시지`)
- `alert()`로 간단한 제출 처리 (실제 제출 기능은 추후 백엔드 연동 가능)

---

### 6. **다크모드 기능 추가**

- 버튼 클릭 시 `body` 태그에 `dark-mode` 클래스 토글
- `global.css`에 다크모드 스타일 지정
- CSS 전환 애니메이션으로 부드러운 색상 전환 효과 구현

---

### 7. **Footer 제작**

- 깔끔한 디자인으로 이름/링크/연도 삽입
- 다크모드에 맞춰 색상 자동 전환

---

### 8. **이미지 및 에셋 정리**

- `/assets` 폴더에 프로젝트 이미지(`project1.png` 등) 저장
- `Projects.tsx`에서 이미지 import하여 프로젝트 설명과 함께 카드 형식으로 표현

---

### 9. **글로벌 스타일 설정**

- `global.css`에서 전역 배경/글자 색상 및 폰트 설정
- `main.tsx`에서 전역 CSS import (`import './global.css'`)

---

### 10. **오류 해결 및 디버깅**

- `tailwindcss` 도중 발생한 설정 오류는 과감히 제거하고 **직접 CSS 작성**으로 대체
- Vite의 이미지 경로 문제 해결
- 다크모드 버튼 클릭 안 되는 문제 → `toggleDarkMode()` 함수와 CSS 클래스 연동 확인으로 해결