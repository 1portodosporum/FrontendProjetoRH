import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

import Home from './pages/home/Home'

import ListarFuncionarios from './components/funcionarios/listarfuncionarios/ListarFuncionarios'

function App() {

  return (
    <>
     <Navbar/>
     <div className="min-h-[80vh]"></div>
     <p>RH System - Team One</p>
     <Footer />

     <Home />
      <ListarFuncionarios />
    </>
  )
}
export default App
