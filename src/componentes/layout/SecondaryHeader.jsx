import styled from "styled-components";
import { dbMenu } from "../db/dbMenu";

export const SecondaryHeader = () => {
  return (
    <List>
      {dbMenu.map((item) => (
        <li key={item.id} style={{ color: `${item.color}` }}>
          {item.icon1}
          <span style={{ color : `${item.color2}`}}>{item.title}</span>
        </li>
      ))}
    </List>
  );
};

const List = styled.ul`
  width: 100%;
  height: 40px;
  background: #1f2428;
  display: flex;
  align-items: center;

  > li {
    height: 100%;
    font-size: 14px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #30363d;

    :nth-child(6) {
      display: none;
    }
  }
`;
