import { useEffect, useState } from "react"
import Background from "./components/Background/Background.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"


const App = () => {

  let heroData = [
    {text1:"Dive Into", text2:"What you love"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Give in to", text2:"your passions"},
  ]

  const [heroCount , setHeroCount] = useState (2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);
  },[])
  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar />
      <Hero
       setPlayStatus={setPlayStatus}
       heroData={heroData[heroCount]}
       heroCount={heroCount}
       setHeroCount={setHeroCount}
       playStatus={playStatus}

       />
    </>
  )
}

export default App
