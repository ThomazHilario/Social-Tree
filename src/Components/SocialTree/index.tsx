import { UseDarkContext } from '../../Context'

import './socialtree.css'
import './mediaQueries.css'

export default function SocialTree(){

    const {darkmode} = UseDarkContext()

    return(
        <ul>
            <li className={darkmode === true ? 'item' : ''}><a>GitHub</a></li>
            <li className={darkmode === true ? 'item' : ''}><a>Youtube</a></li>
            <li className={darkmode === true ? 'item' : ''}><a>Twitter</a></li>
            <li className={darkmode === true ? 'item' : ''}><a>Instagram</a></li>
        </ul>
    )
}