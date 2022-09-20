import styled, { css } from 'styled-components'
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri'
import { AiOutlineFork } from 'react-icons/ai'
import { FaGithub } from 'react-icons/Fa'



export const Container = styled.div`

`;


export const Info = styled.div`


`

 export const Stats = styled.div`
 
 
 ` 

export const LinkButton = styled.a`
 
 
` 


const IconCss = css`
  width: 16px;
  height: 16px;
  fill:var(--icon);
  flex-shrink: 0;
`

 export const StarIcon = styled(RiStarLine)`
    ${IconCss}
 
 ` 
 export const ForkIcon = styled(AiOutlineFork)`
    ${IconCss}
 
 ` 

 export const RepoIcon = styled(RiBookMarkLine)`
    ${IconCss}
 
 ` 

 export const GitHubIcon = styled(FaGithub)`
    ${IconCss}

` 
 