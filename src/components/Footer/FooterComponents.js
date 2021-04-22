import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer `
background-color: #131325;
`
export const FooterWrapper = styled.div ` 
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
` 

export const FooterLinksContainer = styled.div ` 
display: flex;
justify-content: center;
margin-bottom: 26px;

@media screen and (max-width: 820px){
    padding-top: 32px;
}`

export const FooterLinksWrapper = styled.div ` 
display: flex;

@media screen and (max-width: 820px){
    flex-direction: column;

}`

export const FooterLinkItems = styled.div ` 
display: flex;
flex-direction: column;
align-items: flex-start;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px){
    margin:0;
    padding:10px;
    width: 100%;
}
`
export const FooterLinkTitle = styled.div ` 
position: center;
font-size: 20px;
margin-bottom: 16px;
font-weight: 400px;

`
export const FooterLink = styled(Link)` 
color: #fff;
position: center;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;

&:hover{
    color: white;
    transition: 0.3s ease-in-out;
}`

export const SocialMediaWrapper = styled.div ` 
display: flex;
padding-top: 20px;
height: 80%;
justify-content: space-between;
margin-right:0;
width:100%;

`
export const SocialLogo = styled(Link) `
justify-self: self-start;
`
export const WebsiteRights = styled.div ` 
color: white;
display: flex;
align-items: center;`

export const SocialIcons = styled.div ` 
padding-left: 60px;
display: flex;
width:240px;`

export const SocialIconLink = styled.a `
display: flex;
padding-right: 20px;
justify-content: space-between;
align-items: right;
color: #fff;
font-size: 25px;`