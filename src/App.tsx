import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

import Home from './pages/home/Home';

import { BrowserRouter, Route, Routes } from 'react-router';
import About from './pages/about/About';
import FormFuncionario from './components/funcionarios/formfuncionarios/FormFuncionario';
import Product from './pages/products/Product';
import ListarFuncionarios from './components/funcionarios/listarfuncionarios/ListarFuncionarios';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/form" element={<FormFuncionario />} />
            <Route path="/list" element={<ListarFuncionarios />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
