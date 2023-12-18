import {useState} from 'react';

export default function ButtonCount() {
    const [count, setCount] = useState(0)

    return (
        <button onClick={() => setCount((count) => count + 1)}>
            Contador es {count}m
        </button>)
}
