import React from 'react';
import { Container } from "react-bootstrap";

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import front from '../../assets/img/front.svg';
import back from '../../assets/img/back.svg';
import smartphone from '../../assets/img/smartphone.svg';

import './styles.css';

export default function Servicos () {
    return (
        <>
            <Header />
            <div className="box">
                <Container>
                    <h2>Serviços</h2>

                    <ul className="services-list">
                        <li className="service">
                            <img src={front} alt="Sites e Landing Pages" />
                            <p className="title">Desenvolvimento de Sites e Landing Pages</p>
                            <p>Desenvolvimento de Sites e Landing Pages, utilizando HTML, CSS, JavaScript, Bootstrap</p>
                        </li>

                        <li className="service">
                            <img src={back} alt="Sistemas Web" />
                            <p className="title">Desenvolvimento de Sistemas Web</p>
                            <p>Desenvolvimento de Sistemas, utilizando Nodejs, Php, Vuejs, Reactjs, Mongodb, Sql</p>
                        </li>

                        <li className="service">
                            <img src={smartphone} alt="Aplicativos" />
                            <p className="title">Desenvolvimento de Aplicativos</p>
                            <p>Desenvolvimento de Aplicativos, para Android e iOS, com React Native</p>
                        </li>
                    </ul>
                </Container>
            </div>
            <Footer />
        </>
    );
}