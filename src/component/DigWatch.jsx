import React from 'react'
import { useState, useEffect } from 'react'


function DigWatch() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const Interval = setInterval(() => {
            setTime(new Date)
        }, 1000)


        return () => clearInterval(Interval)

    }, [])

    const hour = time.getHours()
    const isNight = hour >= 19 || hour < 6
    console.log(time.toLocaleTimeString())
    console.log(hour)
    return (
        <div
            className={`min-h-screen flex items-center justify-center ${isNight ? "bg-gray-900" : "bg-blue-100"
                }`}
        >
            <div
                className={`w-96 p-8 rounded-2xl shadow-2xl text-center transition-all duration-500 ${isNight
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-900"
                    }`}
            >
                <h1 className="text-3xl font-bold mb-6">
                    Digital Watch
                </h1>

                <h2 className="text-5xl font-mono font-bold tracking-widest">
                    {time.toLocaleTimeString()}
                </h2>

                <p className="mt-6 text-xl">
                    {isNight ? "🌙 Good Night" : "☀️ Good Morning"}
                </p>
            </div>
        </div>
    );
}

export default DigWatch
