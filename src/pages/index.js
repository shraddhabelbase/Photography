import React,{useState} from 'react'
import Sidebar from '../components/SideBar'
import Navbar from '../components/Navbar'
import IntroSection from '../components/IntroSection'
import { homeObjOne, homeObjTwo } from '../components/IntroSection/Data'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toogle =() =>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
        <Sidebar isOpen={isOpen} toogle={toogle}/>
        <Navbar toogle={toogle}/>
        <IntroSection {...homeObjOne}/>
        <Projects/>
        <IntroSection {...homeObjTwo}/>
        <Footer/>
        </div>
    )
}

export default Home
