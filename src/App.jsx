import { useState } from 'react'
import './App.css'
import Navbar from './Components/Header/Navbar'
import News from './Components/Body/News'

function App() {

  const [country, setCountry] = useState('us')
  const setCountryUs = () => {
      setCountry('us')
  };
  const setCountryIn = () => {
      setCountry('in')
  };

  const [category, setCategory] = useState('Top')
  const setSports = () => {
    setCategory("Sports")
  };
  const setBusiness = () => {
    setCategory("Business")
  };
  const setHealth = () => {
    setCategory("Health")
  };
  const setTechnology = () => {
    setCategory("Technology")
  };
  const setEntertainment = () => {
    setCategory("Entertainment")
  };
  const setScience = () => {
    setCategory("Science")
  };
  const setTop = () => {
    setCategory("Top")
  };

  return (
    <>
      <Navbar activeClassHome={"active"} country={country} setCountryIn={setCountryIn} setCountryUs={setCountryUs} setSports={setSports} setTechnology={setTechnology} setBusiness={setBusiness} setEntertainment={setEntertainment} setHealth={setHealth} setTop={setTop} setScience={setScience} />
      <News country={country} category={category} />
    </>
  )
}

export default App
