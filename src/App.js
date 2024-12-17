
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './assests/routes/AllRoutes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
