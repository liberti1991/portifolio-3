import styled from "styled-components";

import { AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { BiSquareRounded } from "react-icons/bi";

import vsc from "../../assets/logo.svg";

export const MainHeader = () => {
  return (
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
  );
};

const Container = styled.section`
  height: 30px;
  background-color: #1f2428;
  border-bottom: 1px solid #191d20;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  font-weight: 500;
  font-size: 12px;
  overflow-x: auto;

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

  @media screen and (max-width: 800px) {
    gap: 10px;

    ul {
      :nth-child(1) {
        li {
          :nth-child(2),
          :nth-child(3),
          :nth-child(4),
          :nth-child(5),
          :nth-child(6),
          :nth-child(7),
          :nth-child(8),
          :nth-child(9) {
            display: none;
          }
        }
      }
    }

    > p {
      margin-left: 0;
      white-space: nowrap;
    }
  }
`;
