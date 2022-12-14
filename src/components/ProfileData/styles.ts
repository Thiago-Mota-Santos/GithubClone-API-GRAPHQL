import styled, { css } from 'styled-components';
import { RiGroupLine, RiBuildingLine } from 'react-icons/ri'
import { FaTwitter } from 'react-icons/fa'

export const Container = styled.div`
    
`;

export const Flex = styled.div`
    display:flex;
    align-items: center;
    

   > div{
        margin-left: 12px;
   

    > h1{
        font-size: 24px;
        font-weight: bold;
    }

    > h2{
        font-size: 20px;
        font-weight: normal;
        color: #57606a;
    }

    >p {
        line-height: 1.25;
        margin-top: 4px;
    }

}
    @media screen and (min-width: 768px){
        flex-direction: column;
        align-items: flex-start;

        >div{
            margin-left: 0;
            margin-top: 16px;
        }

        
    }
    
`;
 export const  Row = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px 0;

    >li {
        display:flex;
        align-items: center;

        >span{
            font-size:14px;
            color:var(--gray);
        }
        > *{
            margin-left: 5px;
        }
    }
 `;

export const AvatarUrl = styled.img`
    border-radius: 50%;
    width: 16%;
    flex-shrink: 0;

    @media screen and (min-width: 768px) {
        width: 100%;
        margin-top: -34px;
        
    }
`;

 export const IconCss = css`
    width: 16px;
    height: 16px;
    fill: var(--icon);
    flex-shrink: 0;
 `;
 export const  Column = styled.ul`
    li{
        display:flex;
        align-items: center;
        font-size: 14px;
    }

    li + li {
        margin-top : 10px;
    }

    span {
        margin-left: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
 `;
 export const  PeopleIcon = styled(RiGroupLine)`
    ${IconCss}
 `;
 export const  TwitterIcon = styled(FaTwitter)`
    ${IconCss}
 `
 export const  CompanyIcon = styled(RiBuildingLine)`
    ${IconCss}
 `;
 