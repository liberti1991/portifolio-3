import styled from "styled-components";

import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import { useState } from "react";
import { dbMenu } from "../db/dbMenu";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  const [menu, setMenu] = useState(true);
  const handleMenu = () => setMenu((previousState) => !previousState);

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen((previousState) => !previousState);

  //excluindo o icone da engrenagem
  // const listOne = dbMenu.slice(0, 5); com git
  const listOne = dbMenu.slice(0, 4);

  //separando itens em expecifico e depois concatando ambos
  const temp1 = dbMenu.slice(1, 2);
  // const temp2 = dbMenu.slice(5, 6); com git
  const temp2 = dbMenu.slice(4, 5);
  const listTwo = temp1.concat(temp2);

  return (
    <Container>
      <SectionOne>
        <ul>
          <div onClick={handleClick}>{isOpen ? <MdClose /> : <GiHamburgerMenu />}</div>
          {listOne.map((item) => (
            <li key={item.id}>
              <NavLink activeclassname="active" to={item.to} onClick={() => setIsOpen(false)}>
                {item.icon2}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul>
          {listTwo.map((item) => (
            <li key={item.id}>
              <NavLink activeclassname="active" to={item.to} onClick={() => setIsOpen(false)}>
                {item.icon2}
              </NavLink>
            </li>
          ))}
        </ul>
      </SectionOne>

      <SectionTwo isOpen={isOpen}>
        <div>
          <p>EXPLORADOR</p>
          <span>...</span>
        </div>
        <SwitchMenu>{!menu ? <BsChevronRight onClick={handleMenu} /> : <BsChevronDown onClick={handleMenu} />} PORTFÓLIO</SwitchMenu>
        {menu && (
          <ul>
            {listOne.map((item) => (
              <li key={item.id}>
                <NavLink to={item.to} style={{ color: `${item.color}` }} onClick={() => setIsOpen(false)}>
                  {item.icon1}
                  <span style={{ color: `${item.color2}` }}>{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </SectionTwo>
      <Shadow isOpen={isOpen} onClick={handleClick}></Shadow>
    </Container>
  );
};

const Container = styled.aside`
  position: relative;
  display: flex;
  width: 220px;
  height: calc(100vh - 55px);
`;

const SectionOne = styled.section`
  width: 25%;
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  gap: 15px;

  > ul {
    width: 100%;
    align-items: center;
    flex-direction: column;
    display: flex;
    font-size: 35px;
    color: #a1a1a6;

    > div {
      display: none;
    }

    > li {
      .active {
        border-left: 2px solid red;
      }

      width: 100%;

      > a {
        padding: 10px 0;
        flex-direction: column;
        align-items: center;
        display: flex;

        > svg {
          color: #a1a1a6;
        }

        :hover {
          background: #1f2428;
          > svg {
            color: #fff;
          }
        }
      }
    }
  }

  @media screen and (max-width: 648px) {
    width: 40px;
    border-right: 1px solid #191d20;

    > ul {
      font-size: 20px;

      > div {
        margin-top: 10px;
        display: inline-block;
      }
    }
  }
`;

const SectionTwo = styled.section`
  background: #1f2428;
  width: 75%;
  font-size: 12px;
  border-right: 1px solid #191d20;
  position: relative;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    margin-top: 10px;

    > span {
      font-size: 20px;
      margin-top: -12px;
    }
  }

  > ul {
    margin: 10px 0;

    > li {
      padding: 0 15px;

      > a {
        font-size: 14px;
        display: flex;
        align-items: start;
        padding: 4px 0;
        gap: 10px;
      }

      :hover {
        background-color: #30363d;
      }
    }
  }

  @media screen and (max-width: 648px) {
    position: absolute;
    height: calc(100vh - 90px);
    top: 35px;
    left: ${(p) => (p.isOpen ? "40px" : "-180px")};
    z-index: 20;
    transition: all 0.5s ease;
  }
`;

const SwitchMenu = styled.article`
  padding: 0 15px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
`;

const Shadow = styled.div`
  width: calc(100vw - 40px);
  background-color: #fff;
  height: calc(100vh - 90px);
  top: 35px;
  position: absolute;
  opacity: 0.2;
  transition: all 0.5s ease;
  z-index: 10;
  left: ${(p) => (p.isOpen ? "40px" : "-100vw")};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
