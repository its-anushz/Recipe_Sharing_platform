import React, { useState } from 'react'
import foodRecipe from '../assets/foodRecipe.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItems from '../components/RecipeItems'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import InputForm from '../components/InputForm'

export default function Home() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const addRecipe = () => {
        let token = localStorage.getItem("token")
        if (token)
            navigate("/addRecipe")
        else {
            setIsOpen(true)
        }
    }

    return (
        <>
            <section className='home'>
                <div className='left'>
                    <h1>ಊಟ ಮಾಡಿ!</h1>
                    <h2>LET'S EAT!</h2>
                    <h1></h1>
                    <h1></h1>
                    <h3>Got a family favorite? Discovered a dish that’s too good not to share? Our "Oota Maadi!" is where food lovers come together to swap, save, and savor amazing recipes! No expert skills needed—just a love for good food and good vibes. So roll up your sleeves (or don’t), and let’s get cooking!🥗</h3>
                    <h1></h1>
                    <h1></h1>                    
                    <button onClick={addRecipe}><h3>➥ Share your recipe</h3></button>
                </div>
                <div className='right'>
                    <img src={foodRecipe} width="520px" height="480px"></img>
                </div>
            </section>
            <div className='bg' >
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" ><path fill="#e6bea1" fillOpacity="1" d="M0,32L40,32C80,32,160,32,240,58.7C320,85,400,139,480,149.3C560,160,640,128,720,101.3C800,75,880,53,960,80C1040,107,1120,181,1200,213.3C1280,245,1360,235,1400,229.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>
            {(isOpen) && <Modal onClose={() => setIsOpen(false)}><InputForm setIsOpen={() => setIsOpen(false)} /></Modal>}
            <div className='recipe'>
                <RecipeItems />
            </div>
        </> 
    )
}
