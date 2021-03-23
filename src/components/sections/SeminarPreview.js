import React from 'react';
import styled from "styled-components";
import { H2 } from '../styles/TextStyles';
import CardSlider from '../sliders/Slider';
import { seminarData } from '../../data/seminarData';


function SeminarPreview() {
    return (
        <Wrapper>

            <Header>Seminar Series</Header>

            <SliderWrapper>
                <CardSlider data={seminarData} />
            </SliderWrapper>


        </Wrapper>
    )
}

export default SeminarPreview;



const Wrapper = styled.div`
    padding: 40px 40px 80px;
    
    @media (max-width: 900px) {
        padding: 30px 20px 60px;
    }

    @media (max-width: 420px) {
        padding: 20px 20px 40px;
    }
`

const SliderWrapper = styled.div`
    width: 90vw;
    margin: 0 auto;

    @media (max-width: 500px) {
        width: 80vw;
    }
`


const Header = styled(H2)`
    margin-bottom: 40px;
`