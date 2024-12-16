// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Category from "./components/Category"
import Description from "./components/Description"
import Rating from "./components/Rating"
import Buttons from "./components/Buttons"
import Slider from "./components/Slider"
import Age from "./components/Age"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Category></Category>
      <Description></Description>
      <Rating></Rating>
      <Buttons></Buttons>
      <Slider></Slider>
      <Age></Age>
    </>
  )
}

export default App
