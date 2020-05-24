import React from 'react';
import { Container } from "react-bootstrap";

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles.css';

export default function Home () {
    return (
        <>
            <Header />
            <div className="box">
                <Container>
                    <h2>Home</h2>
                </Container>
            </div>
            <Footer />
        </>
    );
}