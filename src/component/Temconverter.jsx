import React, { useState } from "react";

function Temconverter() {
    const [c, setC] = useState("");
    const [f, setF] = useState("");

    function handleCelsius(e) {
        const value = e.target.value
        setC(value)
        setF((value * 9) / 5 + 32)
    }

    function handleFahrenheit(e) {
        const value = e.target.value
        setF(value)
        setC((value - 32) * 5 / 9)
    }

    return (
        <div>
            <h1>Temperature Converter</h1>

            <input
                type="number"
                placeholder="Celsius"
                value={c}
                onChange={handleCelsius}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Fahrenheit"
                value={f}
                onChange={handleFahrenheit}
            />
        </div>
    );
}

export default Temconverter;