import { useState } from 'react';
const Counter4 = () => {
    const [count, setCount] = useState(0);
    console.log(count);
    const plus = () => {
        setCount(count + 1);
    }
    const minus = () => {
        setCount(count - 1);
    }
    return (
        <div className='container'>
            <h2 className='int'>{count}</h2>
            <button className='plus' onClick={plus}>+</button>
            <button className='minus' onClick={minus}>-</button>
        </div>
    )
}
export default Counter4;