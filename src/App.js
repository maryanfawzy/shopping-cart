
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./assests/pages/Home/HomePage";
// import Header from './components/Header';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomePage />}></Route>
//           {/* <Route path="Product" element = {<ProductList/>}></Route> */}
//         </Routes>
//       </Router>
//       <Footer/>
      
      
//     </div>
//   );
// }

// export default App;
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./assests/pages/Home/HomePage"; 

import Header from './components/Header';

import Footer from './components/Footer';
import ProductList from '../src/assests/pages/Products/ProductList'
import { ProductDetail } from './assests/pages/ProductDedtail';

function App() {

return (

<Router>

<div className="App">

<Header />

<Routes>

<Route path="/" element={<HomePage />} />

 <Route path="/product" element={<ProductList />} /> 
 <Route path='/products/:id' element = {<ProductDetail/>} /> 


</Routes>

<Footer />

</div>

</Router>

);

}

export default App;



