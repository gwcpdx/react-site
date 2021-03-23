import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export function OutlinedButton(props) {

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
    box-shadow: inset 0 0 0 2px white;
    border-radius: 4px;
    padding: 16px;
    transition: .25s ease-out;

    :hover {
        background-color: rgba(255,255,255, 0.25);
    }
`


const Title = styled.p`
    color: white;
    text-align:center;
    font-weight: 600;

    
`