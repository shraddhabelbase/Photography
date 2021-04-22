import React from 'react'
import {FooterContainer,FooterWrapper,FooterLinksContainer, FooterLinkItems,
    FooterLinksWrapper,FooterLinkTitle,FooterLink,SocialLogo,
    SocialMediaWrapper,WebsiteRights,SocialIconLink,SocialIcons} from './FooterComponents'
import {FaGithub,FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrapper>
        <FooterLinksContainer>
        <FooterLinksWrapper>
        <FooterLinkItems>
        <FooterLinkTitle>Locations</FooterLinkTitle>
        <FooterLink to ="/" target="_blank">Example</FooterLink>
        <FooterLink to ="/" target="_blank">Example</FooterLink>
        <FooterLink to ="/" target="_blank">Example</FooterLink>
        <FooterLink to ="/" target="_blank">Example</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
        <FooterLinkTitle>Services </FooterLinkTitle>
        <FooterLink to ="/" target="_blank">Example</FooterLink>
        <FooterLink to ="/" target="_blank">Example</FooterLink>
        <FooterLink to ="/" target="_blank">Example</FooterLink>
        <FooterLink to ="/" target="_blank">Example</FooterLink>
        </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
        <FooterLinkItems>
        <FooterLinkTitle>Placements </FooterLinkTitle>
        <FooterLink to ="/" target="_blank">Example</FooterLink>
        <FooterLink to ="/" target="_blank">Example</FooterLink>
        <FooterLink to ="/" target="_blank">Example</FooterLink>
        <FooterLink to ="/" target="_blank">Example</FooterLink>
        <FooterLink to ="/"></FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
        <FooterLinkTitle>Alumni</FooterLinkTitle>
        <FooterLink to ="/" target="_blank">Example</FooterLink>
        <FooterLink to ="/" target="_blank">Example</FooterLink>
        <FooterLink to ="/" target="_blank">Example</FooterLink>
        <FooterLink to ="/" target="_blank">Example</FooterLink>
        </FooterLinkItems>
        </FooterLinksWrapper></FooterLinksContainer>
        <SocialMediaWrapper>
        <SocialLogo to ='/'>
        </SocialLogo>
        {/*<WebsiteRights>&copy;{new Date().getFullYear()}</WebsiteRights>*/}
        <SocialIcons>
        
        <SocialIconLink href="/" target="_blank" area_label="Facebook"><FaFacebook/></SocialIconLink>
   
        <SocialIconLink href="/" target="_blank" area_label="Instagram"><FaInstagram/></SocialIconLink>
   
        <SocialIconLink href="/" target="_blank" area_label="LinkedIN"><FaLinkedin/></SocialIconLink></SocialIcons>
        </SocialMediaWrapper></FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
