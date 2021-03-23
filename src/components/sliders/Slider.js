import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Card from "../cards/Card";
import "../sliders/Slider.css"
import Member from "../cards/Member";
import { seminarData } from "../../data/seminarData";

export default function CardSlider(props) {
    const { data } = props
    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        cssEase: "linear",
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    }

    return (
        <Slider {...settings}>

            {data.map((item, index) => data === seminarData ? (
                <Container><Card item={item}
                    key={index} /></Container>) : (
                    <Container><Member item={item}
                        key={index} /></Container>
                )
            )}


        </Slider>
    )
}

const Container = styled.div`
    padding: 0 10px;
`

