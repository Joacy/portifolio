import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';

import { ProjectsList } from './styles';

function Projetos () {
  const [projects, setProjects] = useState([]);
  const [languages, setLanguages] = useState([]);

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

          <ProjectsList>
            {projects.map(project => (project.language !== null) && (
              <li key={project.id}>
                <div className="info">
                  <h4>{project.name}</h4>
                  <h5>{project.description}</h5>

                  <ul className="linguagens">
                    {/* {languages.get(project.id).map(language => (
                      <li className="linguagem" key={language}>{language}</li>
                    ))} */}

                    <li className="linguagem">{project.language}</li>
                  </ul>
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
          </ProjectsList>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Projetos;