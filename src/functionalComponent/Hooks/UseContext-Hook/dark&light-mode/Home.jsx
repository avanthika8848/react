import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

const Home = () => {

    const { darkmode, toggleTheme} = useContext(ThemeContext);
  return (
    <div>
      <h1>{darkmode ? 'Dark Mode 🌙🌚' : 'Light Mode 🌝'}</h1>
      <button onClick={toggleTheme} style={{cursor:'pointer'}}>Toggle Theme</button>
    </div>
  )
}

export default Home