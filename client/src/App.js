import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from "./elements/Footer";

function App() {
  return (
    
      <div className="page-container">
        <div className="content-wrap">
      <Navbar />
      <HomePage />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
