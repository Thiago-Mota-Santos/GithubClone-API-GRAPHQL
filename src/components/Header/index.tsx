import { Container, GitHubLogo, Form, } from "./styles";

export default function Header() {
  return (
    <Container>
      <GitHubLogo />
      <Form>
        <input placeholder="Enter Username or Repo" />
      </Form>
    </Container>
  );
}
