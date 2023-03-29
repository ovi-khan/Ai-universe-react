import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Header from './Components/Header/Header'
import Sort from './Components/Sort-Button/Sort'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Sort>Sort bt date</Sort>
      <Cart></Cart>
      <Sort>See more</Sort>
    </div>
  )
}

export default App
