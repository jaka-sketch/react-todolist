/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Link } from "react-router-dom";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

import * as styles from "./AboutContent.styles";

const AboutContent = () => {
  return (
    <section className="about-page-content-component">
      <Container flexDirection="column">
        <Item align="center">
          <h1 css={styles.aboutPageHeader}>About This App</h1>
          <h3 css={styles.aboutPageSubHeader}>
            What I Learning By Buinding This App
          </h3>
        </Item>
        <Item>
          <Container>
            <p css={styles.aboutPageParagraph}>Lorem ipsum taekkkkkk</p>
          </Container>
        </Item>
        <Item align="center">
          <Link to="/">
            <span css={styles.backToHome}>Back To Home</span>
          </Link>
        </Item>
      </Container>
    </section>
  );
};

export default AboutContent;
