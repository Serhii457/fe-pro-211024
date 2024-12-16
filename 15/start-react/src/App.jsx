// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from "./components/Header"
import Footer from "./components/Footer"
import MyButton from './components/CustomButton/MyButton'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="container py-3">
      <Header></Header>
      <MyButton></MyButton>
      <hr />
      <button className='custom'>
        Global style
      </button>
      <Footer></Footer>
    </div>
      
    </>
  )
}

export default App
