import React from 'react'
import{IntroContainer,IntroWrapper,IntroRow,Column1,Column2,ImgWrap,Img,TextWrapper,TopLine,Heading,Subtitle,BtnWrap,Button} from './IntroElements'



const IntroSection = ({id,imgStart,topline,headline,description,img,alt,buttonlabel}) => {
    return (
        
        <IntroContainer id={id}>
        <IntroWrapper>
        <IntroRow imgStart={imgStart}>
        <Column1>
      
        <TextWrapper>
        <TopLine>{topline}</TopLine>
        <Heading>{headline}</Heading>
        <Subtitle>{description}</Subtitle>
        <BtnWrap>
        <Button to ='home'>{buttonlabel}</Button>
        </BtnWrap>
        </TextWrapper>
        </Column1>
        <Column2>
        <ImgWrap>
        <Img src={img}/>
        </ImgWrap>
        </Column2>
        </IntroRow>
        </IntroWrapper>
        </IntroContainer>
       
            
        
    )
}

export default IntroSection
