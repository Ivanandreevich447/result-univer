import React, { useState } from 'react';

const Counter = function ()  {
const [count, setCount] = useState(0)

function increnent() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={increnent}>Increnent</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;