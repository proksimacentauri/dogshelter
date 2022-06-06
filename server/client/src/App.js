import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DogList from "./components/DogList";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dogs" element={<DogList />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
