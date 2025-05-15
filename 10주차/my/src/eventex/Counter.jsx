import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div>
            <p>카운트: {count}</p>
            <button onClick={handleClick}>증가</button>
        </div>
    );
}
export default Counter;