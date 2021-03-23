import React from "react";
import styled from "styled-components";
import themes from "../styles/ColorStyles"
import { Caption, H4 } from "../styles/TextStyles";

export default function Detail(props) {
    const { item } = props

    return (
        <Wrapper>
            <Icon><img src={item.icon} /></Icon>
            <Title>{item.title}</Title>
            <Text>{item.text}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 20px;
    min-width: 200px;
    max-width: 350px;
    background-color: rgba(13, 156, 144, .15);
    border-radius: 4px;
`

const Icon = styled.div`
    padding: 10px;
    width: fit-content;
    background-color: #0D9C90;
    border-radius: 50%;
    display:flex;
`

const Title = styled(H4)`
    margin: 16px 0px 8px 0px;
`

const Text = styled(Caption)``