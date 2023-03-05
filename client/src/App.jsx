import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
    </>
  )
}

export default App
