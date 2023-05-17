import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './pages/Main'
import Product from './pages/Product'
import BookMark from './pages/BookMark'
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/bookmark' element={<BookMark/>}></Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
