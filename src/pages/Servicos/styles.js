import styled from 'styled-components';

export const ServicesList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
    font-weight: sans-serif;
    width: 100%;
    
    li.service {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        width: 100%;
        border-radius: 0.5rem;
        padding: 1rem;
        background: transparent;
        border: 1px solid #ecf0ff;
        transition: all 0.3s;
    }
    
    li.service img {
        height: 5rem;
        width: auto;
        object-fit: contain;
        margin-bottom: 1rem;
    }
    
    li.service p {
        font-size: 1rem;
        font-weight: 400;
    }
    
    li.service p.title {
        font-size: 1.2rem;
        font-weight: 900;
        text-align: center;
        margin-bottom: 0.7rem;
    }
    
    li.service:hover {
        background: #05192377;
        transition: 0.3s;
    }

    @media screen and (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
