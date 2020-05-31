import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Modal from "../components/modal";

import { Alert, Button, Container, Nav, NavItem } from "../styledComponents/components";
import { Link, Text } from "../styledComponents/typography";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav>
      <NavItem><Link>Home</Link></NavItem>
      <NavItem><Link>Nav 2</Link></NavItem>
      <NavItem><Link>Nav 3</Link></NavItem>
    </Nav>
    <Container>
      <Text>This is a styled text component.</Text>
      <Button>Button</Button>
      <Alert>Alert! Error! An error has occurred. Something went very wrong. </Alert>
      <Link to="/page-2/">Link to page 2</Link> 
      <Link to="/using-typescript/">Link to "Using TypeScript"</Link>
      <Modal>                    
        <h5>Modal Title </h5>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Modal>
    </Container>
  </Layout>
);

export default IndexPage;
