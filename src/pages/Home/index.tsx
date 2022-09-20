import ProfileData from "../../components/ProfileData";
import RandomCalendar from "../../components/RandomCalendar";
import RepoCard from "../../components/RepoCard";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from "./styles";

export default function Profile() {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">26</span>
    </div>
  );
  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line"></span>
      </Tab>
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
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>
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

          <CalendarHeading>
            Random calendar (Do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}
