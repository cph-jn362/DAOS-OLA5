import Header from './components/Header';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className="App">
    <Header />
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    <Footer />
    </div>
  )
}

export default App
