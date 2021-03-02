import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return(
    
        <header class="cabecalho">
      
          <nav>
              <ul>
              
               <li>
                <Link to="/cadastro">Cadastro de veículos</Link>
                </li>
                <li>
                <Link to="/vendas">Resgistros de venda</Link>
                </li>
                
                
              </ul>
        </nav>
    </header>
    
    )
}
export default Header;