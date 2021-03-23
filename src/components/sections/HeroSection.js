import React from 'react';
import styled from "styled-components";
import { H3, H4 } from '../styles/TextStyles';
import { themes } from '../styles/ColorStyles';
import { FilledButton } from '../buttons/FilledButton';
import { OutlinedButton } from '../buttons/OutlinedButton';
import HeroBackground from '../backgrounds/HeroBackground';

function HeroSection() {
    return (
        <Wrapper>
            <HeroBackground />
            <ContentWrapper>
                <TextWrapper>
                    {/* <Title>Girls Who Code PDX</Title> */}
                    <Description>Where curiosity meets code.
Where potential turns into endless possibilities.</Description>
                    <ButtonWrapper>
                        <FilledButton title="Learn to Code" link="/club-application" />
                        {/* <OutlinedButton title="Attend Seminars" link="" /> */}
                    </ButtonWrapper>
                </TextWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

export default HeroSection;

const Wrapper = styled.div`
   
    display:flex;
    justify-content: left;
    width: 100%;
    height:500px;

    @media (max-width: 768px) {
        background-color: #0D9C90;
        height: 400px;
    }

    @media (max-width: 420px) {
        height: fit-content;
    }
`

const ContentWrapper = styled.div`
    max-width: 1100px;
    display:flex;
    align-items: center;
    padding: 40px;

    @media (max-width: 768px) {
        padding: 20px;
        margin: 0 auto;
    }
    
    @media (max-width: 420px) {
        padding: 100px 20px 60px;
        margin: 0 auto;
    }
`

const TextWrapper = styled.div`
    max-width: 500px;
    display:grid;
    grid-template-columns: auto;
    gap: 30px;

    @media (max-width: 768px) {
        text-align:center;   
        
        a{
            width: fit-content;
            margin: 0 auto;
        }

    }

`

const ButtonWrapper = styled.div`
    display:grid;
    grid-template-columns: 200px auto;
    gap: 32px;

    a {
        width: fit-content;
    }

    @media (max-width: 768px) {
        grid-template-columns:  auto;
    }
`

const Title = styled(H4)`
    color: ${themes.dark.text1};

    @media (max-width: 768px) {
        font-size: 20px;
    }
`

const Description = styled(H3)`
    line-height: 120%;
    color: ${themes.dark.text1};
    
    @media (max-width: 768px) {
        font-size: 24px;
    }
`