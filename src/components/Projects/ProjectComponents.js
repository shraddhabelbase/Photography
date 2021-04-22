import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const ProjectContainer = styled.div ` 
padding-top:20px;
display: flex;
flex-direction: column;
align-items: center;
background: white;
color: black;


@media screen and ( max-width: 760px){
    height: 1100px;
}

@media screen and ( max-width: 480px){
    height: 1300px;
}`

export const ProjectsWrapper = styled.div ` 

max-width: 1000px;
z-index:1;
width:100%;
height:400px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;




@media screen and ( max-width: 760px){
    grid-template-columns: 1fr 1fr;
}

@media screen and ( max-width: 480px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}`

export const ProjectsCard = styled.div` 
height:300px;
background: #131325;
display: flex;
flex-direction: column;
justify-content: flex-start;
max-height: 440px;
border-radius: 10px;
align-items: center;
transition: all 0.2s ease-in-out;
padding: 30px;
box-shadow: 3px 3px 3px 3px #FF6363;


&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`


export const ProjectsH1 = styled.h1 ` 
font-size: 2.5rem;
color: black;



@media screen and (max-width: 480px){
    font-size: 2rem;
}`

export const ProjectsH2 = styled.h2 ` 
font-size: 1.5rem;
margin-bottom: 10px;
color:white;`

export const ProjectsP = styled.p ` 
font-size: 1rem;
text-align: center;
line-height: 1.5;
margin-bottom: 10px;
padding: 5px 10px 5px 10px;
color: #D8D8D8
`
export const SideBtnWrap = styled.div ` 
display: flex;
justify-content: center;
`
export const SideBtnLink = styled(LinkR)` 
background: #FF6363;
white-space: nowrap;
padding: 16px 64px;
color: white;
font-size: 16px;
outline: none;
border-radius: 12px;
cursor: pointer;
transition: 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: 0.2s ease-in-out;
    background: #E2AAAA;
    color: #010632;
}
`