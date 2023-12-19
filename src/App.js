import { Routes, Route } from "react-router-dom"
import Main from "./Main"
import Start from "./Start"
import Presentation from "./Presentation"
import Contact from "./Contact"
import Projet from "./Projet"
import Stage from "./Stage"
import Projet1 from "./projets/Projets1"
import Projet2 from "./projets/Projets2"
import Projet3 from "./projets/Projets3"
import Projet4 from "./projets/Projets4"
import Projet5 from "./projets/Projets5"
import Competences from "./Competences"

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
        <Route path="/projet2" element={ <Projet2 /> } />
        <Route path="/projet3" element={ <Projet3 /> } />
        <Route path="/projet4" element={ <Projet4 /> } />
        <Route path="/projet5" element={ <Projet5 /> } />
        <Route path="/competences" element={ <Competences /> } />
      </Routes>
    </div>
  )
}
export default App