import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import TeamMembers from "../components/sections/TeamMembers";
import Sponsors from "../components/sections/Sponsors";

function TeamPage() {
    return (
        <Layout>
            <SEO title="Team Page" />

            <TeamMembers />
            <Sponsors />
        </Layout>
    )
}

export default TeamPage
