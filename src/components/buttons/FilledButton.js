import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export function FilledButton(props) {

    return (
        <Link to={props.link}>
            < Wrapper >
                <Title>{props.title || "Register"}</Title>
            </Wrapper >
        </Link>
    )
}

const Wrapper = styled.div`
    width: 200px;
    background-color:white;
    border-radius: 4px;
    padding: 16px;
    transition: .2s ease-out;

    :hover {
        background-color: #e3f5f1;
    }
`


const Title = styled.p`
    color: #0D9C90;
    text-align:center;
    font-weight: 600;

    
`