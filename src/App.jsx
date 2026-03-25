
import './App.css'
import Nav_bar from './components/NavBar/Nav_bar'
import HeroBanner from './components/heroBanner/HeroBanner'
import Player from './components/PlayersCard/PlayerCard/Player'
import { Suspense } from 'react'

const PlayersData = fetch("/Data.json")
  .then(res => res.json())

function App() {

  return (
    <>
      <Nav_bar></Nav_bar>
      <HeroBanner></HeroBanner>
      <Suspense fallback='hello'>
        <Player PlayersData={PlayersData}></Player></Suspense>
    </>
  )
}

export default App
