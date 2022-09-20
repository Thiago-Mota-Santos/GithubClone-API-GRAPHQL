import React from "react";

import {
  Container,
  Info,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GitHubIcon,
} from "./styles";

import { Link } from "react-router-dom";

const Repo: React.FC = () => {
  return (
    <Container>
      <Info>
        <RepoIcon />
        <Link className={"username"} to={"Thiago-Mota-Santos"}>
          Thiago
        </Link>

        <span>/</span>

        <Link
          className={"reponame"}
          to={"/Thiago-Mota-Santos/GithubClone-API-GRAPHQL"}
        ></Link>
      </Info>
      <p>Project clone interface (Github).</p>
      <Stats>
        <li>
          <StarIcon />
          <b>0</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>4</b>
          <span>forks</span>
        </li>
      </Stats>
      <LinkButton
        href={"https://github.com/Thiago-Mota-Santos/GithubClone-API-GRAPHQL"}
      >
        <GitHubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
