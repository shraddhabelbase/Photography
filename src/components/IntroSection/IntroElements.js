import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'



export const IntroContainer = styled.div ` 
background:#131325;
display: flex;






@media screen and (max-width: 768px){
    padding: 100 0;
}`

export const IntroWrapper = styled.div ` 
margin-top:10px;
padding-top:80px;
display: grid;
z-index: 1;
height: 650px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;


justify-content: center;


`

export const IntroRow = styled.div ` 
display: grid;
grid-auto-columns: minmax(auto,1fr);
align-items: center;
grid-template-areas: ${({imgStart})=>(imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) =>(imgStart ? `'col1 col2'`:`'col1 col1' 'col2 col2'`)};  
}`

export const Column1 = styled.div ` 
padding: 0 15px;
grid-area: col1;

`
export const Column2 = styled.div ` 
padding: 0 15px;
grid-area: col2;`

export const TextWrapper = styled.div ` 
max-width: 540px;
padding-top: 0;
padding-bottom: 6px;
`

export const TopLine = styled.p ` 
color: #FF6363;
font-size: 20px;
line-height: 16px;
font-weight: 500;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`
export const Heading = styled.h1 ` 
margin-bottom: 24px;
font-size: 30px;
line-height: 1.1;
font-weight: 800;
color: white;

@media screen and (max-width: 480px){
    font-size: 32px;
}`

export const Subtitle = styled.p ` 
max-width: 440px;
margin-bottom: 35px;
font-size: 20px;
line-height: 24px;
color: #D8D8D8;
`
export const BtnWrap = styled.div ` 
display: flex;
justify-content: flex-start;

`

export const ImgWrap = styled.div ` 
max-width: 555px;
height: 100%;`

export const Img = styled.img ` 
width: 80%;

padding-right: 0;`;

export const Button = styled(LinkR)` 
border-radius: 50px;
background: #FF6363;
white-space: nowrap;
padding: 16px 64px;
color: #F8F9F9;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: 0.2s ease-in-out;
    background: #E2AAAA;
    color: #010632;
}
`