import { useState } from 'react'
import { Debounce } from './Debounce'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Debounce />
    </>
  )
}

export default App
