import React from "react";
import styled from "styled-components";
import Detail from "../cards/Detail";
import { aboutData } from "../../data/aboutData";
import { H2 } from "../styles/TextStyles";

export default function AboutSection() {
    return (
        <Wrapper>
            <Header>About Our Club!</Header>
            <Content>
                {aboutData.map((item, index) =>
                    <Detail
                        item={item}
                        key={index}
                    />
                )}
            </Content>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 80px 40px;
    
    @media (max-width: 900px) {
        padding: 60px 20px;
    }

    @media (max-width: 420px) {
        padding: 40px 20px;
    }

`

const Content = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: 900px) {
        grid-template-columns: repeat(1, auto);
        justify-content: center;
    }

`

const Header = styled(H2)`
    margin-bottom: 40px;
`