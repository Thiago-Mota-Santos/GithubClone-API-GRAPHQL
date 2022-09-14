import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  TopSide,
  RepoIcon,
  BottomSide,
  StarIcon,
  ForkIcon,
} from "./styles";

interface RepoCardProps {
  username: string;
  reponame: string;
  desc: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<RepoCardProps> = ({
  username,
  reponame,
  desc,
  language,
  stars,
  forks,
}) => {
  const languageClass = language ? language.toLocaleLowerCase() : "other";

  return (
    <Container>
      <TopSide>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>

        <p>{desc}</p>
      </TopSide>

      <BottomSide>
        <ul>
          <li>
            <div className={`language ${languageClass}`}></div>
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </BottomSide>
    </Container>
  );
};

export default RepoCard;
