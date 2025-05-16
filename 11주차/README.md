## 📘 09. React - Lists and Keys (리스트와 키)

### ✅ 1. 여러 개의 컴포넌트 렌더링

React에서 배열 데이터를 기반으로 여러 개의 컴포넌트를 렌더링할 수 있습니다.

### 예제:

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);

```

### ✅ 2. `map()` 함수 사용

- `map()`은 배열의 각 요소를 새로운 요소로 매핑합니다.
- JSX 내에서 `map()`을 활용해 반복적으로 컴포넌트를 생성할 수 있습니다.

### 예제:

```jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);

```

### ✅ 3. key의 중요성

- key는 React가 어떤 항목이 변경되었는지 추적하는 데 사용됨.
- key는 **형제 요소들 사이에서 고유해야 함**.

> ❗ 인덱스를 key로 사용하는 것은 권장되지 않음 (요소의 순서가 바뀌면 성능 저하 및 버그 발생 가능).
> 

### 잘못된 예:

```jsx
{items.map((item, index) => <li key={index}>{item.text}</li>)}

```

### 권장 예:

```jsx
{items.map((item) => <li key={item.id}>{item.text}</li>)}

```

---

## 📘 10. React - Lifting State Up (상태 끌어올리기)

### ✅ 1. 문제 상황

- 여러 컴포넌트가 **공통 상태(state)** 를 공유해야 할 경우, 그 상태를 각 컴포넌트에 따로 두면 데이터 일관성이 깨짐.

### ✅ 2. 해결책: 상태 끌어올리기

- 상태를 **공통 조상 컴포넌트로 끌어올림**.
- 모든 자식 컴포넌트는 그 상태를 props로 공유받고, 변경 요청은 이벤트를 통해 부모에 전달.

---

### ✅ 3. 예제: 온도 변환기 (섭씨 <-> 화씨)

### 구성 컴포넌트:

- `BoilingVerdict`: 섭씨 온도가 100 이상이면 끓는다고 판단
- `TemperatureInput`: 온도 입력 필드
- `Calculator`: 상태 보유 및 공유

### 온도 판별 컴포넌트

```jsx
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>물이 끓습니다.</p>;
  }
  return <p>물이 끓지 않습니다.</p>;
}

```

### 온도 입력 컴포넌트

```jsx
const scaleNames = {
  c: '섭씨',
  f: '화씨'
};

function TemperatureInput(props) {
  const handleChange = (e) => {
    props.onTemperatureChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>온도를 입력해주세요 (단위: {scaleNames[props.scale]}):</legend>
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
}

```

### 상태 관리 컴포넌트 (Calculator)

```jsx
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) return '';
  const output = convert(input);
  return Math.round(output * 1000) / 1000;
}

function Calculator() {
  const [temperature, setTemperature] = React.useState('');
  const [scale, setScale] = React.useState('c');

  const handleCelsiusChange = (temperature) => {
    setScale('c');
    setTemperature(temperature);
  };

  const handleFahrenheitChange = (temperature) => {
    setScale('f');
    setTemperature(temperature);
  };

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

```

---

## 💡 요약 정리

| 개념 | 설명 | 주요 포인트 |
| --- | --- | --- |
| **Lists and Keys** | 배열 데이터를 컴포넌트로 매핑하는 방법 | `map()` 사용, `key`는 고유하게 |
| **Key** | 각 항목을 구분하는 식별자 | 가급적 데이터 고유 ID 사용 |
| **Lifting State Up** | 여러 컴포넌트가 상태를 공유하도록 하기 위한 패턴 | 상태를 공통 부모로 올리고, props와 이벤트로 자식과 연결 | 