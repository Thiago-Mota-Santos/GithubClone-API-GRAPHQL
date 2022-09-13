import { Container, GitHubLogo, Form, Input } from "./styles";

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
