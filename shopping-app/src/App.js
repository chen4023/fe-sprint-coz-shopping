import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './pages/Main'
import Product from './pages/Product'
import BookMark from './pages/BookMark'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/bookmark' element={<BookMark/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
