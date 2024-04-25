
import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './components/Navbar'
import Footer from './page/Footer'

function App() {
 

  return (
    <>
    <NavItems/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
