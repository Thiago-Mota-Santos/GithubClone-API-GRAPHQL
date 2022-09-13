import React from "react";
import {
  Container,
  Flex,
  Row,
  Column,
  PeopleIcon,
  TwitterIcon,
  CompanyIcon,
  AvatarUrl,
} from "./styles";

interface GitHubDataProps {
  name: string;
  userName: string;
  avatarUrl: string;
  desc?: string;
  followers: number;
  following: number;
  twitter: string;
  company?: string;
}

const ProfileData: React.FC<GitHubDataProps> = ({
  name,
  userName,
  avatarUrl,
  desc,
  followers,
  following,
  twitter,
  company,
}) => {
  return (
    <Container>
      <Flex>
        <AvatarUrl src={avatarUrl} alt={userName} />
        <div>
          <h1>{name}</h1>
          <h2>{userName}</h2>
          {desc && <p>{desc}</p>}
        </div>
      </Flex>
      <Row>
        <li>
          <PeopleIcon />
          <b>{followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <b>{following}</b>
          <span>following</span>
        </li>
      </Row>
      <Column>
        {company && (
          <li>
            <CompanyIcon />
            <span>{company}</span>
          </li>
        )}
        {twitter && (
          <li>
            <TwitterIcon />
            <span>{twitter}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default ProfileData;
