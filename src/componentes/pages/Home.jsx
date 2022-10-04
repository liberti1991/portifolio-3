import styled from "styled-components";
import { useState } from "react";

import { BsFileEarmarkCode } from "react-icons/bs";

import programmer from "../../assets/Programmer.gif";
import { HomeCode } from "./HomeCode";

export const Home = () => {
  const [page, pageSet] = useState(true);
  const handlePage = () => pageSet((previousState) => !previousState);

  return (
    <>
      {page ? (
        <Container>
          <Content>
            <h1>Rodrigo Liberti</h1>
            <p>Desenvolvedor Front-End</p>
            <CodeButton onClick={handlePage}>
              <BsFileEarmarkCode />
              Ver código fonte...
            </CodeButton>
          </Content>
          <img src={programmer} alt="programer img" />
        </Container>
      ) : (
        <HomeCode handlePage={handlePage}/>
      )}
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: calc(100% - 35px);
`;

const Content = styled.span`
  padding: 50px;

  > h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
`;

const CodeButton = styled.div`
  width: 200px;
  padding: 10px 20px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #191d20;
  background-color: #1f2428;
  transition: .3s;

  :hover {
    background-color: #1f242870;
  }
`;
