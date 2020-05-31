import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Modal from "../components/modal";

import { 
  Alert, Button, Container, Image, RowContainer 
} from "../styledComponents/components";
import { Heading2, Link, Text } from "../styledComponents/typography";
import o1 from "../assets/okeefe1.jpg";
import o2 from "../assets/okeefe2.jpg";
import o3 from "../assets/okeefe3.png";
import o4 from "../assets/okeefe4.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Heading2>Header 2</Heading2>
      <Text>This is a styled text component.</Text>
      <Button>Button</Button>
      <Alert>Alert! Error! An error has occurred. Something went very wrong. </Alert>
      <Link to="/page-2/">Link to page 2</Link> 
      <Link to="/using-typescript/">Link to "Using TypeScript"</Link>
      <Modal>                    
        <h5>Modal Title </h5>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Modal>
      <h4>Images</h4>
      <RowContainer>
        <Image src={o1} alt="okeefe 1"/>
        <Image src={o2} alt="okeefe 2"/>
        <Image src={o3} alt="okeefe 3"/>
        <Image src={o4} alt="okeefe 4"/>
      </RowContainer>
    </Container>
  </Layout>
);

export default IndexPage;
