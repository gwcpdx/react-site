import React from "react";
import styled from "styled-components";

export default function WaveBackground() {
    return (
        <Wrapper>
            <Background />
            <Wave src="/images/waves/hero-wave1.svg" style={{ top: "100px", filter: "blur(60px)" }} />
            <Wave src="/images/waves/hero-wave2.svg" style={{ top: "350px", filter: "blur(10px)" }} />
            {/* <Wave src="/images/waves/hero-wave3.svg" style={{ top: "550px", filter: "blur(20px)" }} /> */}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position:relative;
`

const Wave = styled.img`
    position:absolute;
    z-index: -1;
`

const Background = styled.div`
    /* background: linear-gradient(93.11deg, #0D9C90 38.74%, rgba(13, 156, 144, 0) 73.53%); */
    background-color: #0D9C90;
    position:absolute;
    width: 100%;
    height: 530px;
    z-index: -1;
`