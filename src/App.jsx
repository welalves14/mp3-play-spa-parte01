import { useState } from 'react'
import Player from "./components/Player"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <h1>MP3 Player</h1>
    </div>

    <Routes>
      <Route path="/" element={<HomePage></HomePage>}>
        <Route index element={<span>Bem vindo</span>}/>
        <Route path="musica" element={<Player song={"Isto é uma música"}/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App