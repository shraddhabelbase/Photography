import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav `
background: #131325;
height:80px;
display: flex;
width:100%;
justify-content: center;
align-items: center;
z-index:10;
font-size: 1rem;
position: fixed;
top:0;


@media screen and (max-width: 960px){
    transition: 0.8s all ease;
    
}

`
export const NavbarContainer = styled.div `
display: flex;
justify-content: spaced-between;
height:80px;
z-index:1;
width: 100%;
max-width: 1100px;
`
export const NavLogo = styled(LinkR)` 
color: blue;
justify-self: flex-start;
cursor: pointer;
font-size: 1.3rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`
export const MobileIcon = styled.div ` 
display:none;

@media screen and (max-width:760px){
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;

}`

export const NavMenu = styled.ul `
margin-left:600px;
display: flex;
font-size: 1.3rem;
align-items: center;
list-style: none;
text-align: center;
padding-left: 100px;



@media screen and (max-width:760px){
    display: none;
}
`
export const NavItem= styled.li ` 

height: 80px;
`
export const NavLinks= styled(LinkS) ` 
display: block;
position: right;
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{
    border-bottom: 3px solid #FF6363;
}
`
export const NavBtn = styled.nav ` 
display: flex;
align-items: center;

@media screen and (max-width:780px){
    display: none
}
`
export const NavBtnLink = styled(LinkR) ` 
border-radius: 50px;
background: #FF6363;
white-space:nowrap;
padding: 10px 22px;
color: white;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover{
    transition: all 0.2s ease-in-out;
    background: #E2AAAA;
    color: #010632;
}`