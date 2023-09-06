import { useState } from 'react'
import './App.css'
import Navbar from './Components/Header/Navbar'
import News from './Components/Body/News'

function App() {

  const [country, setCountry] = useState('pk')
  const setCountryUs = () => {
      setCountry('us')
  };
  const setCountryIn = () => {
      setCountry('in')
  };
  const setCountryPk = () => {
    setCountry('pk')
  };
  const setCountryUk = () => {
    setCountry('uk')
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

  const [query, setQuery] = useState('')
  const queryCall = (queryData) => {
    setQuery(queryData)
  }

  return (
    <>
      <Navbar callQuery={queryCall} activeClassHome={"active"} country={country} setCountryIn={setCountryIn} setCountryUs={setCountryUs} setCountryPk={setCountryPk} setCountryUk={setCountryUk} setSports={setSports} setTechnology={setTechnology} setBusiness={setBusiness} setEntertainment={setEntertainment} setHealth={setHealth} setTop={setTop} setScience={setScience} />
      <News q={query} country={country} category={category} />
    </>
  )
}

export default App
