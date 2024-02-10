import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Data } from './assets/assets.jsx'
import Card from './components/Card'

document.addEventListener('DOMContentLoaded', function() {
      setTimeout(() => {
        hideLoader();
        showContent();
    }, 3000); // Replace with your actual data loading logic and time

    function hideLoader() {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    }

    function showContent() {
        const content = document.getElementById("content");
        content.style.display = "block";
    }
})

function App() {

  return (
    <>
    {
      Data.map((el, index) => {
        return (
          <Card key = {index} image = {el.image} title = {el.title} claass = {el.class} start_production = { el.start_production > 2000 ? 'yangi' : 'eski' }/>
        )
      })
    }
    </>
  )
}

export default App
