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
    padding: 10px 15px;
    width: 100%;

    .navbar-brand {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75px;
        margin-right: 50px;
        padding: 0;
    }
    
    .navbar-brand img {
        width: 100%;
        height: 70px;
        object-fit: contain;
        margin: 0;
        border-radius: 4px;
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
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
        padding: 5px;
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
            margin-top: 5px;
        }

        #navegacao ul li + li {
            margin-top: 5px;
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
