import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from "./data.js"

const Cards = data.map(card => {
  return (<Card 
    mainImg = {card.coverImg}
    rating = {card.stats.rating}
    reviewCount = {card.stats.reviewCount}
    country = {card.location}
    title = {card.title}
    price = {card.price}  
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
