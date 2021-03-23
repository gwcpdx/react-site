import React, { useState } from 'react';
import styled from "styled-components";
import { menuData } from '../../data/menuData';
import MenuButton from '../buttons/MenuButton';
import { Link } from 'gatsby';
import MenuTooltip from '../tooltips/MenuTooltip';
import { FilledButton } from '../buttons/FilledButton';
import { themes } from '../styles/ColorStyles';



export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick(event) {
        setIsOpen(!isOpen)
        event.preventDefault()
    }

    return (
        <Wrapper >
            <Link to="/">
                <img className="logo" src="/images/logos/gwc-pdx-logo.svg" alt="Home Page" />
            </Link>
            <MenuWrapper count={(menuData.length) + 1}>
                {menuData.map((item, index) =>
                    <MenuButton item={item} key={index} />
                )}
                <FilledButton title="Learn to Code" link="/club-application" />
                <HamburgerWrapper onClick={event => handleClick(event)} >
                    <MenuButton
                        item={{ title: "", icon: "/images/icons/hamburger.svg", link: "" }}
                    />
                </HamburgerWrapper>
            </MenuWrapper>
            <MenuTooltip isOpen={isOpen} />


        </Wrapper>
    )
}



const Wrapper = styled.div`
            /* position:absolute; */
            top: 0;
            /* display:grid;
            grid-template-columns: 44px auto; */
            display:flex;
            width: 100%;
            justify-content: space-between;
            padding: 30px;
            align-items: center;
            background-color: ${themes.light.primary};
            border-bottom: 1px solid rgba(255,255,255, 0.5);
        
    .logo {
                height: 40px;
        }

        @media (max-width: 813px) {

            .logo {
                height: 24px;
        }
        }

        @media (max-width: 500px) {
            padding: 10px 20px;

        }
    `


const MenuWrapper = styled.div`
        display:grid;
        gap: 30px;
    grid-template-columns: repeat(${props => props.count}, auto);
    align-items:center;
        
    @media (max-width: 768px) {
        > a {
            display:none;
             }
             grid-template-columns: auto;
        }
    `

const HamburgerWrapper = styled.div`
        display: none;
    
    @media (max-width: 768px) {
                display: block;
        }
`