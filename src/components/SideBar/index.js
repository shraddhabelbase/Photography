import React from 'react'
import{SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarLink,SidebarMenu,SideBtnWrap,SideBtnLink} from './SidebarComponents'

const Sidebar = ({toogle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toogle} >
        <Icon onClick={toogle}>
        <CloseIcon/>
        </Icon>
        <SidebarWrapper>
        <SidebarMenu>
        <SidebarLink to='Home' onClick={toogle}>Home</SidebarLink>
        <SidebarLink to='Projects' onClick={toogle}>Projects</SidebarLink>
        <SidebarLink to='About' onClick={toogle}>About</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
        <SideBtnLink to ="/" target="_blank">
        BlogPost</SideBtnLink></SideBtnWrap>
        </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
