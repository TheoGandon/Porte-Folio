import { Routes, Route } from "react-router-dom"
import Main from "./Main"
import Start from "./Start"
import Presentation from "./Presentation"
import Contact from "./Contact"
import Projet from "./Projet"
import Stage from "./Stage"
import Projet1 from "./projets/Projets1"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={ <Main /> } />
        <Route path="/" element={ <Start /> } />
        <Route path="/presentation" element={ <Presentation /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/projet" element={ <Projet /> } />
        <Route path="/stage" element={ <Stage /> } />
        <Route path="/projet1" element={ <Projet1 /> } />
      </Routes>
    </div>
  )
}
export default App