import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
} from "react-bootstrap";

import { FiMenu } from 'react-icons/fi';
import logo from '../../assets/img/logo.jpg';

import './styles.css';

export default function Header () {
    return (
        <Navbar expand="lg">
            <Navbar.Brand>
                <Link to='/'>
                    <img src={logo} alt="Joacy Mesquita" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navegacao">
                <FiMenu size={24} color="#ecf0ff" />
            </Navbar.Toggle>
            <Navbar.Collapse id="navegacao">
                <Nav>
                    <Nav.Link>
                        <Link to='/sobre'>
                            Sobre
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to='/servicos'>
                            Serviços
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to='/projetos'>
                            Projetos
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to='/contato'>
                            Contato
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}