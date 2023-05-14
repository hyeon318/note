'use client';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  console.log("안녕! - client")
  return <>
    <p>{count}</p>
    <button onClick={() => setCount( (num) => num + 1 ) }>숫자 증가하기</button>
  </>;
}

export default Counter;