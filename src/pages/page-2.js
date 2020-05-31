import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../styledComponents/components";
import { Text, Link } from "../styledComponents/typography";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Container>
      <h2>Hi from the second page</h2>
      <Text>Welcome to page 2</Text>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default SecondPage
