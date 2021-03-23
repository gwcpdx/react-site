import React from "react";
import styled from "styled-components";
import { FilledButton } from "../buttons/FilledButton";
import { OutlinedButton } from "../buttons/OutlinedButton";
import { themes } from "../styles/ColorStyles";

export default function Footer() {
    return (
        <Wrapper>
            <ContentWrapper>
                <CTAwrapper>
                    <Text>Join the next cohort of Girls Who Code!</Text>
                    <FilledButton title="Apply Now" link="/club-application" />
                </CTAwrapper>
                {/* <Divider></Divider>
                <CTAwrapper>
                    <Text>Attend the Career Series to learn about opportunities for women in STEM!</Text>
                    <OutlinedButton title="Register" link="/seminar-registration" />
                </CTAwrapper> */}
            </ContentWrapper>

            <Attribute>
                Site designed and built with React, by Rachel Worthman
            </Attribute>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    background-color: ${themes.light.primary};
    bottom:0;
    padding:  60px 40px;
    padding-bottom: 20px;
    
    @media (max-width: 768px) {
        padding: 20px;
    }
`

const ContentWrapper = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:space-evenly;

    @media (max-width: 768px) {
        display:grid;
        gap: 20px;
    }
`

const CTAwrapper = styled.div`
    width: 300px;
    display:grid;
    grid-template-columns: auto;
    gap: 20px;
    margin: 20px 0;

    a {
        width: fit-content;
        margin:0 auto;
    }

    @media (max-width: 768px) {
        gap: 30px;
    }
`

const Text = styled.h3`
    font-size: 18px;
    line-height: 1.3;
    font-weight: 700;
    color:white;
    height:75px;
    text-align:center;

    @media (max-width: 768px) {
        height:fit-content;
    }
`

const Divider = styled.div`
    width:2px;
    height: auto;
    background-color:white;

    @media (max-width: 768px) {
     display:none;   
    }
`

const Attribute = styled.p`
    font-size: 12px;
    color:white;
    text-align:center;
    margin-top: 60px;
    
    @media (max-width: 768px) {
        margin-top: 20px
    }
`