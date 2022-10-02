import styled from "styled-components";

import { AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { BiSquareRounded } from "react-icons/bi";

import vsc from "../../assets/logo.svg";
import { SideBar } from "./SideBar";
import { SecondaryHeader } from "./SecondaryHeader";
import { Footer } from "./Footer";

export const MainHeader = () => {
  return (
    <>
      <Container>
        <ul>
          <li>
            <img src={vsc} alt="logo visual studio code" />
          </li>
          <li>Arquivo</li>
          <li>Editar</li>
          <li>Seleção</li>
          <li>Ver</li>
          <li>Acessar</li>
          <li>Executar</li>
          <li>Terminal</li>
          <li>Ajuda</li>
        </ul>

        <p>Rodrigo Liberti - Visual Studio Code</p>

        <ul>
          <li>
            <AiOutlineMinus />
          </li>
          <li>
            <BiSquareRounded />
          </li>
          <li>
            <AiOutlineClose />
          </li>
        </ul>
      </Container>

      <AsideContainer>
        <SideBar />
        <SecondaryHeader />
      </AsideContainer>
      <Footer />
    </>
  );
};

const Container = styled.section`
  height: 30px;
  background-color: #1f2428;
  border-bottom: 1px solid #191d20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  font-weight: 500;
  font-size: 12px;

  > ul {
    display: flex;
    gap: 15px;

    > li {
      margin-top: 5px;

      > img {
        margin-top: -3px;
        width: 18px;
        height: 18px;
      }

      > svg {
        font-size: 18px;
      }
    }
  }

  > p {
    margin-left: -350px;
  }
`;

const AsideContainer = styled.div`
  display: flex;
`;
