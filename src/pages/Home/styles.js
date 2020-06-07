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
        width: 200px;
        height: 200px;
        box-shadow: 4px 4px 12px 0px #051923;
        border-radius: 50%;
        margin-bottom: 15px;
    }

    img {
        width: 200px;
        height: auto;
        object-fit: contain;
        border-radius: 50%;
    }

    h3 {
        margin-bottom: 10px;
    }

    h4 {
        margin-bottom: 10px;
    }

    h5 {
        margin-bottom: 25px;
    }

    .links {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .links a + a {
        margin-left: 10px;
    }

    .links a {
        display: flex;
        align-items: center;
        border: 1px solid #ecf0ff;
        padding: 3px 7px;
        border-radius: 4px;
        text-decoration: none;
        color: #ecf0ff;
    }

    .links a:hover {
        background: #ecf0ff;
        color: #051923;
        transition: 0.3s;
    }

    .links a svg {
        margin-right: 5px;
    }

    .links a span {
        font-size: 14px;
    }
`;