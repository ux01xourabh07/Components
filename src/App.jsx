import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import Login from './component/Login'
// import DigWatch from './component/DigWatch'
// import Counter from './component/Counter'
// import Temconverter from './component/Temconverter'
// import TodoApp from './component/TodoApp'
import Cons from './Hooks/Cons'
import Ref from './Hooks/Ref'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login/> */}
      {/* <DigWatch /> */}
      {/* <Counter /> */}
      {/* <Temconverter></Temconverter> */}
      {/* <TodoApp /> */}
      {/* <Cons /> */}
      <Ref />
    </>
  )
}

export default App
