import React from "react";
import styled from "styled-components";

export default function HeroBackground() {
    return (
        <Wrapper>
            <Background />
            {/* <Image src="/images/waves/hero-wave1.svg"></Image> */}
            <Image><img src="/images/general/GWC-Clubs-bw.jpg" /></Image>
        </Wrapper>
    )
}

const Wrapper = styled.div`
            position:absolute;
            width: 100vw;
            /* display:flex;
            justify-content: flex-end; */
            overflow:hidden;
            height: 500px;
            z-index: -2;
        `

const Background = styled.div`
            background: linear-gradient(93deg, #0D9C90 45%, rgba(13, 156, 144, 0) 120%);
            position: absolute;
            width: 100vw;
            height: 100%;

            @media (max-width: 768px) {
        
                display:none;
            }
        `

const Image = styled.div`
            z-index: -2;
            position: relative;
            right: -200px;
            top: -100px;

            img {
                width: 100%;
            }

            @media (max-width: 768px) {
                display:none;

            }
        `

// /images/general/hero-girl.jpg