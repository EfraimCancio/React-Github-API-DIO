import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    input {
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 100%;
        height: 44px;
        padding: 10px;
        font-weight: 500;
    }

    button{
        background-color: #ccc;
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;
    }

    button:hover {
        background-color: black;
        color: #ccc;
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
`;