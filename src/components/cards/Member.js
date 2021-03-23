import React from 'react';
import styled from "styled-components";
import { H4, Caption } from '../styles/TextStyles';


export default function Member(props) {
    const { item } = props
    return (
        <CardContainer>
            <Image><img src={item.image} /></Image>
            <TextWrapper>
                <Name>{item.name}</Name>
                <Role>{item.role}</Role>
                <Bio>{item.bio}</Bio>
            </TextWrapper>
        </CardContainer>
    )

}


const CardContainer = styled.div`
            max-width: 400px;
            border-radius: 6px;
            box-shadow: inset 0px 0px 2px rgba(0,0,0, .15);
            overflow:hidden;
        `

const TextWrapper = styled.div`
    padding: 16px;
`


const Image = styled.div`
    width: 100%;
    height: 220px;
    position:relative;
    overflow: hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index: -1;

    img {
        position:absolute;
        z-index: -2;
        width: 110%;
    }

    @media (max-width: 700px) {
        height: 180px;
    }

    @media (max-width: 500px) {
        height: 220px;
    }
    `

const Name = styled(H4)`

    `

const Role = styled(Caption)`
 margin-bottom: 8px;
 font-weight: 700;
 color: #888e8d;
    /* font-size: 14px;
    font-weight: 500;
    line-height: 130%;
    color: #545a59; */
`

const Bio = styled(Caption)`
    
`