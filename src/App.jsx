import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from "./data.js"

const Cards = data.map(item => {
  return (<Card 
    key = {item.id}
    item = {item}
  />)
})


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <section className='cards-list'>
      {Cards}

      </section>
    </>
  )
}

export default App
