import React from "react";
import styled from "styled-components";
import { H3, MediumText } from "../styles/TextStyles";

export default function Sponsors() {
    return (
        <Wrapper>
            <Item>
                <Title>Club Sponsor</Title>
                <Description>Shannon McWeeney, PhD</Description>
            </Item>

            <Item>
                <Title>Special Thanks</Title>
                <Description>Maseeh College of Engineering & Computer Science, PSU <br />
                    Division of Bioinformatics and Computational Biology, OHSU <br />
                    OHSU Knight Cancer Institute</Description>
            </Item>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 40px 40px 80px;
    display:grid;
    gap: 80px;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    
    @media (max-width: 900px) {
        padding: 30px 20px 60px;
    }

    @media (max-width: 420px) {
        padding: 20px 20px 40px;
    }
`

const Item = styled.div`
    max-width: 450px;
    text-align:center;

    @media (max-width: 768px) {
        max-width: 350px;
    }
`

const Title = styled(H3)`
    margin-bottom: 16px;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`

const Description = styled(MediumText)`

    @media (max-width: 768px) {
        font-size: 14px;
    }
`
