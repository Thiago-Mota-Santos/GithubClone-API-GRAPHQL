import styled, { css } from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri'
import { AiOutlineFork } from 'react-icons/ai'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
 // justify-content: center;
  justify-content: space-between;
  border: 1px solid var(--border);
  padding: var(--verticalPadding);
  border-radius: 6px;
`;

export const TopSide = styled.div`
    > header{
        display: flex;
        align-items: center;
    
    > a{
        margin-left: 8px;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;

        &:focus, &:hover{
            text-decoration: underline;
        }
    }
}
    
    >p{
        margin: 8px 0 16px;
        font-size: 12px;
        color: var(--gray);
        letter-spacing: 0.1px;
    }

`;

export const BottomSide = styled.div`
    > ul{
        display: flex;
        align-items: center;

        >li{
            display:flex;
            align-items: center;
            margin-right: 16px;
            color: var(--gray);
            
            >span{
                margin-left: 5px;
                font-size: 12px;
                color: var(--gray);
            }
        }
    }
    
    .language{
        width: 12px;
        height: 12px;
        border-radius: 50px;
        flex-shrink: 0;

        &.other{
            background:var(--other-language)
        }

        &.javascript{
            background:var(--javascript)
        }

        &.typescript{
            background:var(--typescript)
        }

    }
`;

const IconCss = css`
    width: 16px;
    height: 16px;
    fill: var(--icon);
    flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`
    ${IconCss}
`;
export const StarIcon = styled(RiStarLine)`
    ${IconCss}
`;
export const ForkIcon = styled(AiOutlineFork)`
    ${IconCss}
`