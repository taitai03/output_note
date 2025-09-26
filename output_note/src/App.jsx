import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"

function App() {

  return (
 <BrowserRouter>
  <div className='App'>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  </div>
 </BrowserRouter>
  )
}


export default App
