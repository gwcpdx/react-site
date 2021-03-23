import React from "react";
import styled from "styled-components";
import { H3 } from "../styles/TextStyles";

function luminanace(r, g, b) {
    const a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function contrast(rgb1, rgb2) {
    const lum1 = luminanace(rgb1[0], rgb1[1], rgb1[2]);
    const lum2 = luminanace(rgb2[0], rgb2[1], rgb2[2]);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05)
        / (darkest + 0.05);
}
contrast([255, 255, 255], [255, 255, 0]);
contrast([246, 246, 246], [12, 13, 14]);
// minimal recommended contrast ratio is 4.5, or 3 for larger font-sizes

export default function LogoTest(props) {
    const color = props
    const test = contrast([255, 255, 255], [12, 13, 14]);
    console.log(test)

    if (test < 4.5) {
        // console.log(color)
        return (
            <Wrapper>
                <DarkLogo>Logo</DarkLogo>
            </Wrapper>
        );
    } else {
        // console.log(contrast([255, 255, 255], props.color ))
        // console.log(props)
        return (
            <Wrapper>
                <LightLogo>Logo</LightLogo>
            </Wrapper>
        );
    }
}


const Wrapper = styled.div`
    height: 600px;
    width: 100vw;
    background: pink;

`

const DarkLogo = styled(H3)`
        color: black;
`

const LightLogo = styled(H3)`
        color: white;
`