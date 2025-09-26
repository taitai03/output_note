import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"

function App() {

  return (
 <BrowserRouter>
  <div className='App'>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </div>
 </BrowserRouter>
  )
}


export default App
