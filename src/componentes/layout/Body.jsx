import styled from "styled-components";

import { SideBar } from "./SideBar";
import { SecondaryHeader } from "./SecondaryHeader";
import { MyRoutes } from "../../myRoutes/MyRoutes";

export const Body = () => {
  return (
    <AsideContainer>
      <SideBar />
      <section>
        <SecondaryHeader />
        <MyRoutes />
      </section>
    </AsideContainer>
  );
};

const AsideContainer = styled.div`
  display: grid;
  grid-template-columns: 220px auto;

  @media screen and (max-width: 648px) {
    grid-template-columns: 40px auto

  }

  /* section {
    overflow-x: auto;
  } */
`;

