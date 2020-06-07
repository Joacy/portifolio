import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Container,
} from "react-bootstrap";

import { FiMenu } from 'react-icons/fi';
import logo from '../../assets/img/icone.png';

import { StyledNavbar } from './styles';

function Header () {
    return (
        <StyledNavbar fixed="top" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                        <img src={logo} alt="Joacy Mesquita" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navegacao">
                    <FiMenu size={24} color="#ecf0ff" />
                </Navbar.Toggle>
                <Navbar.Collapse id="navegacao">
                    <ul>
                        <li>
                            <Link to='/servicos'>
                                Serviços
                        </Link>
                        </li>

                        <li>
                            <Link to='/projetos'>
                                Projetos
                        </Link>
                        </li>

                        <li>
                            <Link to='/contato'>
                                Contato
                        </Link>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </StyledNavbar>
    );
}


export default Header;