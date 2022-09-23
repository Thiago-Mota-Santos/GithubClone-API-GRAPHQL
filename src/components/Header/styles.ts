import styled from "styled-components";
import { FaGithub } from 'react-icons/fa'

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 11px 30px;
    background: var(--header);
`;


export const GitHubLogo = styled(FaGithub)`
    fill:var(--logo);
    height: 32px;
    width: 32px;
    margin-right: 10px;

`;
export const Form = styled.form`
    width: 100%;
    padding: 4px;
    border-radius: 6px;

    input{
     width: 100%;
     border-radius: 6px;
     padding: 7px 13px;
     outline: 0;
     background:var(--search);

     &:focus{
        width: 270px;
        transition: width .2s ease-out, color .2s ease-out;
     }
    }

`;

