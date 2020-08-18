import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const ContainerUser = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

    .foto {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15rem;
        height: 15rem;
        box-shadow: 4px 4px 12px 0px #051923;
        border-radius: 7.5rem;
        margin-bottom: 0.9rem;
    }

    img {
        width: 15rem;
        height: auto;
        object-fit: contain;
        border-radius: 7.5rem;
    }

    h3 {
        margin-bottom: 0.7rem;
    }

    h4 {
        margin-bottom: 0.7rem;
    }

    h5 {
        margin-bottom: 2rem;
    }

    .links {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .links a + a {
        margin-left: 0.7rem;
    }

    .links a {
        display: flex;
        align-items: center;
        border: 1px solid #ecf0ff;
        padding: 0.2rem 0.5rem;
        border-radius: 0.3rem;
        text-decoration: none;
        color: #ecf0ff;
    }

    .links a:hover {
        background: #ecf0ff;
        color: #051923;
        transition: 0.3s;
    }

    .links a svg {
        margin-right: 0.3rem;
    }

    .links a span {
        font-size: 1rem;
    }
`;