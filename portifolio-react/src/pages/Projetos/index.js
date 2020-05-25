import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';

import './styles.css';

export default function Projetos () {
    const [projects, setProjects] = useState([]);

    async function getProjects () {
        try {
            const response = await api.get('users/Joacy/repos');

            setProjects(response.data);

            console.log(response.data);
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <>
            <Header />
            <div className="box">
                <Container>
                    <h2>Projetos</h2>

                    <ul className="projetos">
                        {projects.map(project => (
                            <li key={project.id}>
                                <div className="info">
                                    <h4>{project.name}</h4>
                                    <h5>{project.description}</h5>
                                    <h6>{project.language}</h6>
                                </div>

                                <div className="link">
                                    <a
                                        href={project.html_url}
                                        target="_blank"
                                    >
                                        <span>Acessar</span>
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Container>
            </div>
            <Footer />
        </>
    );
}