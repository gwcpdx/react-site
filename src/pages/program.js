import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import Seminars from "../components/sections/Seminars";
import LogoTest from "../components/sections/LogoTest";


function Program() {
    return (
        <Layout>
            <SEO title="The Program" />
            <Seminars />
        </Layout>
    )
}

export default Program