import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import styled from "styled-components";
import { H2 } from "../components/styles/TextStyles";

function ClubApp() {
    return (
        <Layout>
            <SEO title="GWC Club Application" />
            <AppWrapper>
                {/* <Header>Club Application</Header> */}
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdz3AA3vA4k4UwQrl9mZ1k2Hrn6NqUehruOKU8mJljqvqk0jw/viewform" width="640" height="5629" frameborder="0" marginheight="0" marginwidth="0" >Loading…</iframe>
            </AppWrapper>
        </Layout>
    )
}

export default ClubApp

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