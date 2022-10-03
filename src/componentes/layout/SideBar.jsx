import styled from "styled-components";

import { BsChevronRight, BsChevronDown } from "react-icons/bs";

import { useState } from "react";
import { dbMenu } from "../db/dbMenu";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  const [menu, setMenu] = useState(true);
  const handleMenu = () => setMenu((previousState) => !previousState);

  //excluindo o icone da engrenagem
  const listOne = dbMenu.slice(0, 5);

  //separando itens em expecifico e depois concatando ambos
  const temp1 = dbMenu.slice(1, 2);
  const temp2 = dbMenu.slice(5, 6);
  const listTwo = temp1.concat(temp2);

  return (
    <Container>
      <SectionOne>
        <ul>
          {listOne.map((item) => (
            <li key={item.id}>
              <NavLink activeclassname="active" to={item.to}>
                {item.icon2}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul>
          {listTwo.map((item) => (
            <li key={item.id}>
              <NavLink activeclassname="active" to={item.to}>
                {item.icon2}
              </NavLink>
            </li>
          ))}
        </ul>
      </SectionOne>

      <SectionTwo>
        <div>
          <p>EXPLORADOR</p>
          <span>...</span>
        </div>
        <SwitchMenu>{!menu ? <BsChevronRight onClick={handleMenu} /> : <BsChevronDown onClick={handleMenu} />} PORTFÓLIO</SwitchMenu>
        {menu && (
          <ul>
            {listOne.map((item) => (
              <li key={item.id}>
                <NavLink to={item.to} style={{ color: `${item.color}` }}>
                  {item.icon1}
                  <span style={{ color: `${item.color2}` }}>{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </SectionTwo>
    </Container>
  );
};

const Container = styled.aside`
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
          font-size: 35px;
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
`;

const SectionTwo = styled.section`
  background: #1f2428;
  width: 75%;
  font-size: 12px;
  border-right: 1px solid #191d20;

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
