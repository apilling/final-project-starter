import React, { useState } from "react";

import "./App.css";
import { Counter } from "./components/counter";

function App(): JSX.Element {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <h1>Welcome to the Website!</h1>
            <div>
                <Counter count = {count}></Counter>
            </div>
        </div>
    );
}

export default App;
