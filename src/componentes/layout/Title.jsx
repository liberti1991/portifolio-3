import styled from "styled-components";

export const Title = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  text-align: center;

  h1 {
    padding: 25px 0;
    font-size: 2.5rem;
  }

  @media screen and (min-width: 648px) {

    h1 {
      padding: 45px 0;
      font-size: 4rem;
    }
  }
`;
