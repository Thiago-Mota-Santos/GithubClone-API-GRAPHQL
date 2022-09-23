import React from "react";
import { GitHubLogo } from "../Header/styles";

import { Container, Line } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <Line />
      <GitHubLogo />
    </Container>
  );
};

export default Footer;
