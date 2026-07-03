import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

function Cons() {
    return (
        <div>
            <Component1 />
        </div>
    );
}

function Component1() {
    const [user] = useState("Linux");

    return (
        <UserContext.Provider value={user}>
            <h1>User: {user}</h1>

            <Component3 />
        </UserContext.Provider>
    );
}

function Component3() {
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component 3</h1>

            <h2>Hello {user} Again</h2>
        </>
    );
}

export default Cons;