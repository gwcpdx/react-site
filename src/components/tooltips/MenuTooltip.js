import React from 'react';
import styled from "styled-components";
import { menuData } from '../../data/menuData';
import MenuButton from '../buttons/MenuButton';
import { themes } from '../styles/ColorStyles';

export default function MenuTooltip(props) {
    const { isOpen } = props

    return (
        <Wrapper isOpen={isOpen}>
            {menuData.map((item, index) => (
                <MenuButton item={item} key={index} />
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position:absolute;
    top: 106px;
    left: 0;
    background-color: ${themes.light.primary};
    box-shadow: inset 0 0 0 0.5px rgba(0,0,0, 0.2);
    padding: 20px;
    opacity: ${props => (props.isOpen ? 1 : 0)};
    z-index: 1;
    display: flex;
    flex-direction:column;
    width: 100vw;
    transition: 0.3s ease-in-out;
    visibility: ${props => (props.isOpen ? "visible" : "hidden")};

    @media (max-width: 500px) {
        top: 66px;
    }
`