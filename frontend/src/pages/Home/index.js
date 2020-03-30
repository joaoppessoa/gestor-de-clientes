import React from 'react';

import './styles.css';
import Menu from '../../assets/menu';
import { FaReact } from "react-icons/fa";

export default function Home() {
    return (
        <div>

          <Menu />
      
        <div className="ajuste" >
          <h1>Seja bem vindo João </h1>
          <h1><FaReact /></h1>
        </div>
      </div>
    )
}