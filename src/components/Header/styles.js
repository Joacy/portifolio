import styled from 'styled-components';

import {
    Navbar
} from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    background: #051923;
    color: #ecf0ff;
    padding: 0.7rem 0.9rem;
    width: 100%;

    .navbar-brand {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4rem;
        margin-right: 3rem;
        padding: 0;
    }
    
    .navbar-brand img {
        width: 100%;
        height: 4rem;
        object-fit: contain;
        margin: 0;
        border-radius: 0.4rem;
    }

    #navegacao ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    #navegacao ul li {
        padding: 0;
    }

    #navegacao ul li a {
        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;
        color: #ecf0ff;
        font-size: 1rem;
        font-weight: bold;
        text-decoration: none;
        padding: 0.5rem;
    }

    #navegacao ul li:hover a {
        border-bottom: 2px solid #ecf0ff;
        transition: 0.3s;
    }

    @media screen and (max-width: 991px) {
        #navegacao ul {
            display: flex;
            flex-direction: column;
            width: 100%;
            list-style: none;
            margin-top: 0.3rem;
        }

        #navegacao ul li + li {
            margin-top: 0.3rem;
        }

        #navegacao ul li {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: 100%;
        }

        #navegacao ul li a {
            width: 100%;
        }

        #navegacao ul li:hover a {
            border-bottom: 2px solid transparent;
        }

        button.navbar-toggler {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            outline: 0;
        }

        button.navbar-toggler span.navbar-toggler-icon {
            color: #ecf0ff;
        }
    }    
`;
