import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DogList from "./components/DogList";

function App() {
  return (
    <div className="App">
      bu
      <BrowserRouter>
        <Route exact path="/dogs" Component={DogList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
