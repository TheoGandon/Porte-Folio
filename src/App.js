import { Routes, Route } from "react-router-dom"
import Main from "./Main"
import Start from "./Start"
import Contact from "./Contact";
import Presentation from "./Presentation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/start" element={ <Start /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/presentation" element={ <Presentation /> } />
      </Routes>
    </div>
  )
}
export default App;