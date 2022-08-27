 
import React from 'react'

const Saludo = ({name, lastname, children}) => {
  return (
    <div>Hola {name} {lastname} 
            {children}
    </div>
  )
}

export default Saludo
 