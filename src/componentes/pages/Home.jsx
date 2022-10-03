import React from "react";
import styled from "styled-components";

import programmer from "../../assets/Programmer.gif";

export const Home = () => {
  return (
    <Container>
      <Content>
        <h1>Rodrigo Liberti</h1>
        <p>Desenvolvedor Front-End</p>
      </Content>
      <Gif>
        <img src={programmer} />
      </Gif>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: calc(100% - 35px);

`;

const Content = styled.div`
`;

const Gif = styled.div`
  padding-top: 50px;
`;
