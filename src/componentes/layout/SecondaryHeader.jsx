import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { dbMenu } from "../db/dbMenu";

export const SecondaryHeader = () => {
  return (
    <List>
      {dbMenu.map((item) => (
        <li key={item.id}>
          <NavLink activeclassname="active" to={item.to} style={{ color: `${item.color}` }}>
            {item.icon1}
            <span style={{ color: `${item.color2}` }}>{item.title}</span>
          </NavLink>
        </li>
      ))}
    </List>
  );
};

const List = styled.ul`
  width: 100%;
  height: 35px;
  background: #1f2428;
  display: flex;
  align-items: center;

  > li {
    .active {
      border-top: 1px solid red;
      height: 100%;
    }
    
    height: 100%;
    border: 1px solid #30363d;
    display: flex;
    align-items: center;
    
    a {
      align-items: center;
      display: flex;
      padding: 0 20px;
      font-size: 14px;
      gap: 10px;
    }

    :nth-child(6) {
      display: none;
    }
  }
`;
