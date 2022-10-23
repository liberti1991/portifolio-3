import styled from "styled-components";
import { dbFooter } from "../db/dbfooter";
import { Title } from "../layout/Title";

export const Contact = () => {
  return (
    <>
      <Title>
        <h1>Contatos</h1>
      </Title>
      <Container>
        {dbFooter.map((item) => {
          return (
            <a key={item.id} href={item.url} rel={item.rel} target={item.target} title={item.title} alt={item.title}>
              <div style={{ color: `${item.className}`}}>{item.svg}</div>
              {item.title}
            </a>
          );
        })}
      </Container>  
    </>
  );
};

const Container = styled.div`
  padding-top: 30px;
  width: 270px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  a {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 20px;
    border-right: 1px solid orange;
    overflow: hidden;
    width: 0;
    white-space: nowrap;
    text-decoration: none;
    color: white;
    position: relative;
    transition: all 1s;

    ::after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: orange;
      border-radius: 4px;
      position: absolute;
      left: 0;
      bottom: 0;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.25s ease;
    }

    :hover::after {
      transform: scaleX(1);
    }

    :nth-child(1) {
      width: 11.5ch;
      opacity: 0;
      animation: type 1.3s steps(40, end) forwards;
    }

    :nth-child(2) {
      width: 10.5ch;
      opacity: 0;
      animation: type 1.3s steps(40, end) forwards;
      animation-delay: 1.5s;
    }

    :nth-child(3) {
      width: 13ch;
      opacity: 0;
      animation: type 1.3s steps(40, end) forwards;
      animation-delay:  3s;
    }

    :nth-child(4) {
      width: 24ch;
      opacity: 0;
      animation: type 2s steps(40, end) forwards;
      animation-delay: 4.5s;
    }
    :nth-child(5) {
      width: 12.5ch;
      opacity: 0;
      animation: type2 1.3s steps(40, end) forwards, blink 0.7s step-end infinite alternate;
      animation-delay: 6.5s;
    }

    @keyframes type {
      0% {
        width: 0;
        opacity: 1;
      }
      99% {
        border-right: 1px solid orange;
      }
      100% {
        opacity: 1;
        border: none;
      }
    }

    @keyframes type2 {
      0% {
        width: 0;
      }
      1% {
        opacity: 1;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }

    div {
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  @media screen and (min-width: 648px) {
    padding-top: 0px;
  }
`;