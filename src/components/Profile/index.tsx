import ProfileData from "../ProfileData";
import { Container, Main, LeftSide, RightSide } from "./styles";

export default function Profile() {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            name={"Thiago"}
            userName={"Thiago-Mota-Santos"}
            avatarUrl={"https://avatars.githubusercontent.com/u/75326612?v=4"}
            desc={"Learning Web development"}
            followers={2}
            following={2}
            twitter={"@ThiagoMota014"}
          />
        </LeftSide>
        <RightSide></RightSide>
      </Main>
    </Container>
  );
}
