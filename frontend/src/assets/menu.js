import React from 'react';

import { Nav, NavItem, NavLink } from 'reactstrap';
import { FaReact } from "react-icons/fa";

export default function Menu() {
    return(
        <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavItem>
          <NavLink href="/home"><h1><FaReact /></h1></NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/clientes/cadastro">Cadastro</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/clientes">Clientes</NavLink>
        </NavItem>
      </Nav>
    )
}