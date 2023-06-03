import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import katie from './assets/katie-zaferes.png'
import star from "./assets/star.png"


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card 
          mainImg = {katie}
          starImg = {star}
          rating = "5.0"
          reviewCount = {6}
          country = "USA"
          bio = "Life lessons with Katie Zaferes"
          price = {136}
      />
    </>
  )
}

export default App
