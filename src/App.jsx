import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './Components/Main'
import Section from './Components/Section'
import Plans from './Components/Plans'
import WatchAnywhere from './Components/WatchAnywhere'
import Available from './Components/Available'
import Questions from './Components/Questions'
import Footer from './Components/Footer'
import Bundle from './Components/Bundle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Main />
      <Section />
      <Plans />
      <WatchAnywhere />
      <Bundle />
      <Available />
      <Questions />
      <Footer />
    </div>
  )
}

export default App
