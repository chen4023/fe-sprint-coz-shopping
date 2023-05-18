import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Product from './pages/Product';
import BookMark from './pages/BookMark';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />}>
          <Route path=":categoryName" element={<ProductList />} />
        </Route>
        <Route path="/bookmark" element={<BookMark />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
