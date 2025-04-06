
import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/Bottles/Bottles'

const fetchBottles = fetch('bottles.json')
.then(res => res.json())

function App() {

  return (
    <>
      
      <h1>Buy awesome bottles</h1>
      <Suspense fallback={<h2>wait for your bottles....</h2>}>
        <Bottles fetchBottles={fetchBottles}>

        </Bottles>
      </Suspense>
      
    </>
  )
}

export default App
