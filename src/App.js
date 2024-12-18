
import './App.css';
import AllRoutes from '../src/routes/AllRoutes';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./assests/pages/Home/HomePage";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {/* <Route path="Product" element = {<ProductList/>}></Route> */}
        </Routes>
      </Router>
      <Footer/>
      
      
    </div>
  );
}

export default App;
