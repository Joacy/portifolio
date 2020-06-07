import styled from 'styled-components';

export const SocialList = styled.ul`
    list-style: none;
    
    li + li {
        margin-top: 15px;
    }
    
    li {
        font-size: 14px;
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
        padding: 10px 15px;
        border-radius: 8px;
        border: 2px solid #ecf0ff;
        width: 135px;
        height: 40px;
    }
    
    li a span {
        margin-left: 10px;
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
        margin-top: 15px;
    }
    
    input {
        height: 40px;
    }
    
    input,
    textarea {
        background: transparent;
        border: 1px solid #ecf0ff;
        padding: 10px;
        border-radius: 4px;
        color: #ecf0ff;
        font-family: "Oxygen", sans-serif;
        font-size: 14px;
    }
    
    input::placeholder,
    textarea::placeholder {
        color: #ecf0ff;
        font-family: "Oxygen", sans-serif;
        font-size: 14px;
    }
    
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 135px;
        height: 40px;
        padding: 0 15px;
        border-radius: 8px;
        border: 2px solid #ecf0ff;
        background: transparent;
        color: #ecf0ff;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s;
    }
    
    button:hover {
        background: #ecf0ff;
        color: #080120;
    }  
`;
