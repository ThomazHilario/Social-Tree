import Information from "./Components/Information"
import SocialTree from "./Components/SocialTree"
import { ContextDarkMode } from "./Context"
import { useEffect, useState } from 'react'

function App() {

  // State darkmode componente app
  const [darkmode,setDarkmode] = useState<null | boolean>(null)

  // useEffect para verificar o valor do darkmode na localStorage
  useEffect(() => {
    // Verificando se existe algo na localStorage
    if(localStorage.getItem('darkmode')){
      setDarkmode(JSON.parse(localStorage.getItem('darkmode') as string))
    }
  },[])

  return (
      <ContextDarkMode>
        <main id="container" className={darkmode === true ? 'main_dark' : ''}>
          {/* Componente Information */}
          <Information darkmodeapp={setDarkmode} />

          {/* Componente SocialTree */}
          <SocialTree/>
        </main>
      </ContextDarkMode>

  )
}

export default App
