import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { BsFileEarmarkCode } from "react-icons/bs";
import { MdDoubleArrow } from "react-icons/md";

import { Title } from "../layout/Title";
import { HomeCode } from "./AboutCode";

export const About = () => {
  const [page, pageSet] = useState(true);
  const handlePage = () => pageSet((previousState) => !previousState);

  return (
    <>
      {page ? (
        <Container>
          <Title>
            <h1>Sobre</h1>
          </Title>
          <p>Rodrigo Liberti, 31 anos - Curitiba/Pr.</p>
          <p>Desenvolvedor Front-End trabalho com ReactJs, atualmente estudando Laravel para me tornar um desenvolvedor Fullstack.</p>
          <p>Experiência como desenvolvedor ReactJs 1+ Trabalhei com portais web aonde realizei um clone do Trello.</p>
          <p>
            Reconhecido por colegas como um profissional com um grande potencial, dedicação e com entregas de qualidade e pontuais, sempre disposto a ajudar os colegas e em
            constante busca por conhecimento.
          </p>
          <p>
            Cursando desde 2021 <b>Análise e Desenvolvimento de Sistemas</b> onde estou no quarto período.
          </p>
          <div>
            <CodeButton onClick={handlePage} role="button">
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
        </Container>
      ) : (
        <HomeCode handlePage={handlePage} role="button" />
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  > div {
    display: flex;
    gap: 20px;
  }

  > p {
    text-align: center;
    margin-bottom: 10px;
    line-height: 1.5;
    display: block;
    opacity: 0;
    animation: revealText 4s forwards;

    :nth-child(1) {
      animation-delay: 0.25s;
    }

    :nth-child(2) {
      animation-delay: 0.5s;
    }

    :nth-child(3) {
      animation-delay: 0.75s;
    }

    :nth-child(4) {
      animation-delay: 1s;
    }

    :nth-child(5) {
      animation-delay: 1.25s;
    }

    :nth-child(6) {
      animation-delay: 2s;
    }

    @keyframes revealText {
      from {
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: none;
      }
    }
  }

  @media screen and (min-width: 900px) {
    padding: 20px 130px;

    > p {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-height: 400px) {
    height: calc(100vh - 90px);
    overflow: auto;
    padding-bottom: 15px;
  }
`;

const CodeButton = styled.div`
  width: 210px;
  padding: 10px 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #191d20;
  background-color: #1f2428;
  transition: 0.3s;
  animation: animate 3.5s;

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

  @keyframes animate {
    0%{
      transform: translateX(-100px);
      opacity: 0;
    }
    50%{
      opacity: .3;
    }
    100%{
      transform: translateX(0px);
      opacity: 1;
    }
  }
`;
