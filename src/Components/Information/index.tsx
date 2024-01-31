import { useEffect } from 'react'
import { UseDarkContext } from '../../Context'
import imageTree from '../../assets/imagens/anime-wallpaper-g85077484e_640.jpg'

import './information.css'
import './mediaQuerie.css'

// interface prop Information
interface informationType{
    darkmodeapp:React.Dispatch<React.SetStateAction<null | boolean>>
}

export default function Information({darkmodeapp}:informationType){

    // State - darkMode
    const {darkmode, setDarkmode} = UseDarkContext()

    useEffect(() => {
        
        // Verificando se existe algo na localStorage
        if(localStorage.getItem('darkmode')){
            setDarkmode(JSON.parse(localStorage.getItem('darkmode') as string))
            darkmodeapp(JSON.parse(localStorage.getItem('darkmode') as string))
        } else{
            localStorage.setItem('darkmode',JSON.stringify(false))
        }

        // Capturando input
        const input:HTMLInputElement = document.querySelector('input') as HTMLInputElement

        // Atribuindo valor ao input
        input.checked = darkmode as boolean

    },[darkmode, setDarkmode, darkmodeapp])


    function updateTheme(input:HTMLInputElement){
        if(input.checked === true){
            // Alterando valor do input    
            input.checked = true

            // Setando alteracao na state
            setDarkmode(true)

            // Salvando o valor na localStorage
            localStorage.setItem('darkmode',JSON.stringify(true))
        } else{
            // Alterando valor do input
            input.checked = false

            // Setando alteracao na state
            setDarkmode(false)

            // Salvando o valor na localStorage
            localStorage.setItem('darkmode',JSON.stringify(false))
        }
    }

    return(
        <div id='informations'>
            {/* Imagem do social tree */}
            <img src={imageTree} alt="imagem da social tree"/>

            {/* Title */}
            <h1>My social links</h1>

            {/* form darkmode */}
            <form>
                <label className="switch">
                    <input type="checkbox" onChange={(e) => updateTheme(e.target)}/>
                    <span className="slider"></span>
                </label>
            </form>
        </div>
    )
}