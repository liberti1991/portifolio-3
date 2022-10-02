import styled from "styled-components";

import { BsChevronRight, BsChevronDown } from "react-icons/bs";

import { useState } from "react";
import { dbMenu } from "../db/dbMenu";

export const SideBar = () => {
  const [menu, setMenu] = useState(true);
  const handleMenu = () => setMenu((previousState) => !previousState);

  return (
    <Container>
      <SectionOne>
        <ListOne>
          {dbMenu.map((item) => (
            <li key={item.id}>{item.icon2}</li>
          ))}
        </ListOne>

        <ListTwo>
          {dbMenu.map((item) => (
            <li key={item.id}>{item.icon2}</li>
          ))}
        </ListTwo>
      </SectionOne>

      <SectionTwo>
        <div>
          <p>EXPLORADOR</p>
          <span>...</span>
        </div>
        <SwitchMenu>{!menu ? <BsChevronRight onClick={handleMenu} /> : <BsChevronDown onClick={handleMenu} />} PORTFÓLIO</SwitchMenu>
        {menu && (
          <ul>
            {dbMenu.map((item) => (
              <li key={item.id} style={{ color: `${item.color}` }}>
                {item.icon1}
                <span style={{ color : `${item.color2}`}}>{item.title}</span>
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
  width: 200px;
  height: calc(100vh - 60px);
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
      flex-direction: column;
      align-items: center;
      display: flex;
      width: 100%;
      padding: 10px 0;

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
`;

const ListOne = styled.ul`
  > li {
    :nth-child(2),
    :nth-child(6) {
      display: none;
    }
  }
`;

const ListTwo = styled.ul`
  > li {
    :nth-child(1),
    :nth-child(3),
    :nth-child(4),
    :nth-child(5) {
      display: none;
    }
  }
`;

const SectionTwo = styled.section`
  padding: 15px;
  background: #1f2428;
  width: 75%;
  font-size: 12px;
  border-right: 1px solid #191d20;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > span {
      font-size: 20px;
      margin-top: -12px;
    }
  }

  > ul {
    margin: 10px 0;

    > li {
      font-size: 14px;
      display: flex;
      align-items: start;
      padding: 4px 0;
      gap: 10px;
    }
  }
`;

const SwitchMenu = styled.article`
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
`;
