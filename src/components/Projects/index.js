import React from 'react'
import {ProjectsCard,ProjectContainer,ProjectsH1,ProjectsH2,ProjectsP,ProjectsWrapper,ProjectsIcon,SideBtnWrap,SideBtnLink} from './ProjectComponents'

const Projects = ({id}) => {
    return (
        <ProjectContainer id='projects'>
        <ProjectsH1>Our Services</ProjectsH1>
        <ProjectsWrapper>
        <ProjectsCard>
        <ProjectsH2>Beginner</ProjectsH2>
        <ProjectsP>Three month course that includes all the basics of photography and photo editing skills using Photoshop. Suggested for people who are just getting started with photography</ProjectsP>
        <SideBtnWrap>
        <SideBtnLink to ="/" target="_blank">
        Enroll</SideBtnLink></SideBtnWrap>
       </ProjectsCard>
        <ProjectsCard>
        <ProjectsH2>Intermediate</ProjectsH2>
        <ProjectsP>Six month course with handson photography experience with different types of photography. Students have the option to focus on a specific type if desired</ProjectsP>
        <SideBtnWrap><SideBtnLink to="/" target="_blank">
        Enroll</SideBtnLink></SideBtnWrap>
      </ProjectsCard>
        <ProjectsCard>
        <ProjectsH2>Adavanced</ProjectsH2>
        <ProjectsP>Six month course with opportunity to shadow professional photographers in the field of your interest. Students need to to able to prove Intermediate skills before enrolling</ProjectsP>
        <SideBtnWrap><SideBtnLink to ="/" target="_blank">
        Enroll</SideBtnLink></SideBtnWrap>
        </ProjectsCard>
        </ProjectsWrapper>
        </ProjectContainer>
    )
}

export default Projects
