import React, { useState } from "react";


export function Counter({count}: {count: number}): JSX.Element {
    const [currentCount, setCurrentCount] = useState(count);
    function addOne() {
        setCurrentCount(currentCount+1);
    }
    function minusOne() {
        setCurrentCount(currentCount-1);
    }
    function setZero() {
        setCurrentCount(0);
    }
    return (
        <div>
            <h3>{ currentCount }</h3>
            <button onClick={addOne}>Increase Counter</button>
            <button onClick={minusOne}>Decrease Counter</button>
            <button onClick={setZero}>Zero Counter</button>

        </div>
    );
}