import React from 'react';
import styled from "styled-components";
import { H4 } from '../styles/TextStyles';


export default function Card(props) {
    const { item } = props
    return (
        <CardContainer >
            <Week>Week {item.week}</Week>
            <Image><img src={item.image} /></Image>
            <Title>{item.title}</Title>
            <Presenter>{item.presenter}</Presenter>
        </CardContainer>
    )

}


const CardContainer = styled.div`
            min-width: 250px;
            max-width: 400px;
        `

const Week = styled.div`
            font-size: 14px;
            text-transform: uppercase;
            padding: 4px 8px;
            background-color: #FCDB30;
            width: fit-content;
            transform: translateY(40px);
            position:relative;
        `

const Image = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 6px;
    box-shadow: inset 0px 0px 2px rgba(0,0,0, .15);
    margin-left:5px;
    position:relative;
    overflow: hidden;
    display:flex;
    justify-content:center;
    z-index: -1;

    img {
        position:absolute;
        z-index: -2;
        height: 110%;
    }
    `

const Title = styled(H4)`
    font-size: 16px;
    margin: 16px 0 12px 5px;
    line-height: 130%;
    `

const Presenter = styled.p`
    font-size: 14px;
    font-weight: 600;
    margin:0;
    color: #808080;
    margin-left: 5px;
`