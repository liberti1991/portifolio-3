import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { BsFileEarmarkCode } from "react-icons/bs";
import { MdDoubleArrow } from "react-icons/md";

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
            <div>
              <CodeButton onClick={handlePage}>
                <BsFileEarmarkCode />
                Ver código fonte...
              </CodeButton>
              <CodeButton>
                <NavLink to="/projetos">
                  <MdDoubleArrow />
                  Meus Projetos...
                </NavLink>
              </CodeButton>
            </div>
          </Content>
          <img src={programmer} alt="programer img" />
        </Container>
      ) : (
        <HomeCode handlePage={handlePage} />
      )}
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: calc(100vh - 90px);

  @media screen and (max-width: 648px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: auto;

    > img {
      width: 300px;
      height: 300px;
    }
  }
`;

const Content = styled.span`
  padding: 50px;

  > p {
    font-size: 16px;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  > h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 648px) {
    padding: 30px;
    
    > h1 {
      font-size: 2rem;
    }
  }
`;

const CodeButton = styled.div`
  width: 210px;
  padding: 10px 20px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #191d20;
  background-color: #1f2428;
  transition: 0.3s;

  > svg {
    font-size: 18px;
  }

  > a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #fff;
  }

  :hover {
    background-color: #1f242870;
  }

  @media screen and (max-width: 648px) {
    :nth-child(2) {
      margin-top: 0;
    }
  }
`;
