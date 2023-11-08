import { Routes, Route } from "react-router-dom"
import Main from "./components/Main"
import Start from "./components/Start"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/start" element={ <Start /> } />
      </Routes>
    </div>
  )
}
export default App