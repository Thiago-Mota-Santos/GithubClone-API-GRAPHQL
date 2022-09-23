import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { Container, GitHubLogo, Form } from "./styles";

export default function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function HandleClick(event: FormEvent) {
    event.preventDefault();

    navigate("/" + search.toLocaleLowerCase().trim());
  }

  return (
    <Container>
      <Link to={"/"}>
        <GitHubLogo />
      </Link>
      <Form onSubmit={HandleClick}>
        <input
          placeholder="Enter Username or Repo"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
    </Container>
  );
}
