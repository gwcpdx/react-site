import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default function MenuButton(props) {
    const { item } = props
    return (
        <Link to={item.link} onClick={props.onClick}>
            <MenuItem title={item.title}>
                <img src={item.icon} />
                {item.title}
            </MenuItem>
        </Link >
    )
}


const MenuItem = styled.div`
    color: white;
    padding: 10px;
    text-align:center;
    transition: .3s ease-out;
    border-radius: 4px;

    :hover {
        background: rgba(255,255,255, 0.15);
        
    }
`