import imageTree from '../../assets/imagens/anime-wallpaper-g85077484e_640.jpg'
import './information.css'
export default function Information(){
    return(
        <div id='informations'>
            {/* Imagem do social tree */}
            <img src={imageTree} alt="imagem da social tree"/>

            {/* Title */}
            <h1>My social links</h1>

            
        </div>
    )
}