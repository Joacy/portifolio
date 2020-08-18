import styled from 'styled-components';

export const SocialList = styled.ul`
    list-style: none;
    
    li + li {
        margin-top: 1rem;
    }
    
    li {
        font-size: 1rem;
        color: #ecf0ff;
    }
    
    li a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ecf0ff;
        font-weight: bold;
        text-decoration: none;
        transition: all 0.3s;
        padding: 0.5rem 1rem;
        border-radius: 0.4rem;
        border: 1px solid #ecf0ff;
        width: 10rem;
        height: 3rem;
    }
    
    li a span {
        margin-left: 0.7rem;
    }
    
    li a:hover {
        color: #080120;
        background: #ecf0ff;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    input + input,
    input + textarea,
    textarea + button {
        margin-top: 1rem;
    }
    
    input {
        height: 3rem;
    }
    
    input,
    textarea {
        background: transparent;
        border: 1px solid #ecf0ff;
        padding: 0.7rem;
        border-radius: 0.4rem;
        color: #ecf0ff;
        font-family: "Oxygen", sans-serif;
        font-size: 1rem;
    }
    
    input::placeholder,
    textarea::placeholder {
        color: #ecf0ff;
        font-family: "Oxygen", sans-serif;
        font-size: 1rem;
    }
    
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10rem;
        height: 3rem;
        padding: 0 1rem;
        border-radius: 0.4rem;
        border: 1px solid #ecf0ff;
        background: transparent;
        color: #ecf0ff;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s;
    }
    
    button:hover {
        background: #ecf0ff;
        color: #080120;
    }  
`;
