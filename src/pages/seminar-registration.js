import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import styled from "styled-components";
import { H2 } from "../components/styles/TextStyles";

function SeminarReg() {
    return (
        <Layout>
            <SEO title="Seminar Series Registration" />
            <AppWrapper>
                {/* <Header>Seminar Series Registration</Header> */}
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScGVhgjYqZUF39ByRwNSKjPtzL9gew5i7QQvnZmN2HN2z8pqg/viewform?embedded=true" width="640" height="2097" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </AppWrapper>
        </Layout>
    )
}

export default SeminarReg

const AppWrapper = styled.div`
    padding: 80px 40px;
    display:flex;
    justify-content:center;
    
    @media (max-width: 900px) {
        padding: 60px 20px;
    }

    @media (max-width: 420px) {
        padding: 40px 20px;
    }
`


const Header = styled(H2)`
    margin-bottom: 40px;
`


