import React from "react";
import styled from "styled-components";
import { CardProjects } from "../layout/CardProjects";
import { Title } from "../layout/Title";

export const Projects = () => {
  return (
    <Container>
      <Title>
        <h1>Meus Projetos</h1>
      </Title>
      <CardProjects />
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 90px);
  overflow-y: auto;
  padding: 0 15px;

  @media screen and (min-width: 900px) {
    padding: 0 150px;
  }
`;
