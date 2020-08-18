import styled from 'styled-components';

export const ProjectsList = styled.div`
    list-style: none;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    
    .card {
        background: transparent;
        color: #ecf0ff;
        border-radius: 0.3rem;
        border: 1px solid #ecf0ff;
        box-shadow: 4px 4px 12px 0px #051923;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        width: 100%;
    }

    .card:hover {
        background: #05192377;
        transition: 0.3s;
    }

    .card:first-child {
        margin-top: 0;
    }
    
    .card .card-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        width: 100%;
        border-bottom: 1px solid #ecf0ff;
        background: transparent;
    }

    .card .card-header h4 {
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: bold;
    }
    
    .card .card-body {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .card .card-body h5 {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 1rem;
        width: 100%;
    }
    
    .card .card-body ul.linguagens {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        margin: 0;
        margin-bottom: 1rem;
    }
    
    .card .card-body ul.linguagens li.linguagem + li.linguagem {
        margin: 0;
        margin-left: 0.7rem;
    }
    
    .card .card-body ul.linguagens li.linguagem {
        padding: 0.15rem 0.7rem;
        background: #ecf0ff;
        border: 0;
        box-shadow: none;
        border-radius: 0.3rem;
        font-size: 0.8rem;
        font-weight: bold;
        color: #051923;
        width: auto;
    }
    
    .card .card-body .link {
        width: 100%;
    }
    
    .card .card-body .link a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        padding: 0.15rem 0.7rem;
        border: 1px solid #ecf0ff;
        border-radius: 0.3rem;
        font-size: 0.9rem;
        font-weight: bold;
        color: #ecf0ff;
        text-transform: none;
    }
    
    .card .card-body .link a:hover {
        background: #ecf0ff;
        color: #051923;
        transition: 0.3s;
    }

    @media screen and (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
