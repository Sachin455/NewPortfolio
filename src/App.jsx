import { useState } from "react"
import "./index.css"
import {LoadingScreen} from './components/LoadingScreen'
import { Navbar } from "./components/Navbar"
import { Home } from "./components/sections/Home"
import { About } from "./components/sections/About"
import { Technologies } from "./components/Technologies"
import { Projects } from "./components/sections/Projects"
import { Contact } from "./components/sections/Contact"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}>
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"></div>
              <Navbar />
              <Home />
              <About />
              <Technologies />
              <Projects />
              <Contact />
    </div>
    </>
  )
}

export default App