import styled from 'styled-components';

export const ProjectsList = styled.ul`
    list-style: none;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
    
    li {
        padding: 15px;
        color: #ecf0ff;
        border-radius: 4px;
        border: 1px solid #ecf0ff;
        box-shadow: 4px 4px 12px 0px #051923;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        width: 100%;
    }

    li:hover {
        background: #05192377;
        transition: 0.3s;
    }

    li:first-child {
        margin-top: 0;
    }
    
    li .info {
        margin-bottom: 15px;
    }
    
    li .info h4 {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 15px;
    }
    
    li .info h5 {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 15px;
    }
    
    li .info ul.linguagens {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        margin-bottom: 5px;
    }
    
    li .info ul.linguagens li.linguagem + li.linguagem {
        margin: 0;
        margin-left: 10px;
    }
    
    li .info ul.linguagens li.linguagem {
        padding: 3px 10px;
        background: #ecf0ff;
        border: 0;
        box-shadow: none;
        border-radius: 4px;
        font-size: 12px;
        font-weight: bold;
        color: #051923;
        width: auto;
    }
    
    li .link {
        width: 100%;
    }
    
    li .link a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        padding: 3px 10px;
        border: 1px solid #ecf0ff;
        border-radius: 4px;
        font-size: 13px;
        font-weight: bold;
        color: #ecf0ff;
        text-transform: none;
    }
    
    li .link a:hover {
        background: #ecf0ff;
        color: #051923;
        transition: 0.3s;
    }

    @media screen and (max-width: 991px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
