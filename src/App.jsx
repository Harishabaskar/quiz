import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  
  return(
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={"Homepage"}/>
        <Route path="/quiz" element={"Quizpage"}/>
        <Route path="/score" element={"Scorepage"}/>

      </Routes>
    </div>
    </BrowserRouter>
    

  )
}

export default App;