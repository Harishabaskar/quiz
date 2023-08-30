import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  
  return(
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/quiz" element={"Quizpage"}/>
        <Route path="/score" element={"Scorepage"}/>

      </Routes>
    </div>
    </BrowserRouter>
    

  )
}

export default App;