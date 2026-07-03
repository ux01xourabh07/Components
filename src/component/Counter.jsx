import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className='flex flex-col items-center gap-4 mt-10'>
            <h1 className="text-4xl text-black font-bold">{count}</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    )
}

export default Counter
