import React from "react";
import { Link } from "react-router-dom";

import Paper from "../components/paper/Paper";
import Container from "../layout/Container";

const About = () => {
  return (
    <Paper>
      <Container
      // flexDirection="column"
      // justifyContent="space-between"
      // height="100%"
      ></Container>
      <h1>This Is About Page</h1>
      <Link to="/">Home</Link>
    </Paper>
  );
};

export default About;
