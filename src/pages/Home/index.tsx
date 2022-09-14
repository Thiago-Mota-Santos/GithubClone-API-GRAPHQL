import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import { Container, Main, LeftSide, RightSide, Repos } from "./styles";

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

        <RightSide>
          <Repos>
            <h2>random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"lorim lorim lorim "}
                  reponame={"test"}
                  desc={
                    "description test hahahahadescription test hahahahadescription test hahahahadescription test hahahahadescription test hahahahadescription test hahahahadescription test hahahaha "
                  }
                  language={n % 3 === 0 ? "typescript" : "javascript"}
                  stars={0}
                  forks={0}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
}
