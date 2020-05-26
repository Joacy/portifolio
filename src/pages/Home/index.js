import React, { useState, useEffect } from 'react';

import {
    Container,
} from "react-bootstrap";

import {
    FaWhatsapp,
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';

import './styles.css';

export default function Home () {
    const [avatarUrl, setAvatarUrl] = useState('');
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [location, setLocation] = useState('');
    const [htmlUrl, sethtmlUrl] = useState('');

    async function getUser () {
        try {
            const response = await api.get('users/Joacy');

            const { avatar_url, name, bio, location, html_url } = response.data;

            setAvatarUrl(avatar_url);
            setName(name);
            setBio(bio);
            setLocation(location);
            sethtmlUrl(html_url);
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <Header />
            <div className="box">
                <Container className="user">
                    <div className="foto">
                        <img src={avatarUrl} alt="Joacy Mesquita da Silva" />
                    </div>

                    <h3>{name}</h3>

                    <h4>{bio}</h4>

                    <h5>{location}</h5>

                    <div className="links">
                        <a
                            href={htmlUrl}
                            target="_blank"
                        >
                            <FaGithub size={16} /> <span>Github</span>
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?1=pt_BR&amp;phone=+5575991183579"
                            target="_blank"
                        >
                            <FaWhatsapp size={20} /> <span>Whatsapp</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/joacy-mesquita-a886a1b5/"
                            target="_blank"
                        >
                            <FaLinkedinIn size={16} /> <span>Linkedin</span>
                        </a>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    );
}