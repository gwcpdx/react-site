import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { ReactTypeformEmbed } from 'react-typeform-embed';

function Contact() {
    return (
        <Layout>
            <SEO title="Contact us" />

            <Wrapper>

                <ReactTypeformEmbed url="https://form.typeform.com/to/LabYp83Y" />
            </Wrapper>

        </Layout>
    );
}

export default Contact

const Wrapper = styled.div`
    height: 70vh;
    overflow:hidden;
    position:relative;

    @media(max-width: 768px) {
        height: 40vh;
    }
`