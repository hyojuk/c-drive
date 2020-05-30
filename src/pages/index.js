import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "../styledComponents/typography";

import { Button, Container } from "../styledComponents/components";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Button>Button</Button>
    </Container>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
