import styled from "styled-components";

import { BsFileEarmarkCode } from "react-icons/bs";

export const HomeCode = ({ handlePage }) => {
  const a = "{";
  const b = "}";
  const c = "=>";
  const d = "(";
  const e = ")";
  const f = "[";
  const g = "]";

  return (
    <Container>
      <Content>
        <div>
          <h1>import</h1>
          <h2>styled</h2>
          <h1>from</h1>
          <h3>"styled-components"</h3>
          <h2>;</h2>
        </div>
        <div>
          <h1>import</h1>
          <h3>{a}</h3>
          <h2>useState</h2>
          <h3>{b}</h3>
          <h1>from</h1>
          <h3>"react"</h3>
          <h2>;</h2>
        </div>
        <br />
        <div>
          <h1>import</h1>
          <h3>{a}</h3>
          <h2>BsFileEarmarkCode</h2>
          <h3>{b}</h3>
          <h1>from</h1>
          <h3>"react-icons/bs"</h3>
          <h2>;</h2>
        </div>
        <br />
        <div>
          <h1>import</h1>
          <h2>programmer</h2>
          <h1>from</h1>
          <h3>"../../assets/Programmer.gif"</h3>
          <h2>;</h2>
        </div>
        <br />
        <div>
          <h1>import</h1>
          <h3>{a}</h3>
          <h2>HomeCode</h2>
          <h3>{b}</h3>
          <h1>from</h1>
          <h3>"./HomeCodes"</h3>
          <h2>;</h2>
        </div>
        <br />
      </Content>
      <Content>
        <div>
          <h1>export</h1>
          <h1>const</h1>
          <h4>Home</h4>
          <h1> = </h1>
          <h3>{d}</h3>
          <h3>{e}</h3>
          <h1>{c}</h1>
          <h3>{a}</h3>
        </div>
        <BorderLeft>
          <section>
            <div>
              <h1>const</h1>
              <h6>{f}</h6>
              <p>page</p>
              <h2>,</h2>
              <h4>pageSet</h4>
              <h6>{g}</h6>
              <h1> = </h1>
              <h3>{d}</h3>
              <p>true</p>
              <h3>{e}</h3>
              <h2>;</h2>
            </div>

            <div>
              <h1>const</h1>
              <h4>handlePage</h4>
              <h1> = </h1>
              <h3>{d}</h3>
              <h3>{e}</h3>
              <h1>{c}</h1>
              <h4>pageSet</h4>
              <h3>{d}</h3>
              <h3>{d}</h3>
              <h5>previousState</h5>
              <h1>{c}</h1>
              <h1>!</h1>
              <h5>previousState</h5>
              <h3>{e}</h3>
              <h2>;</h2>
            </div>
          </section>
        </BorderLeft>
      </Content>
      <CodeButton onClick={handlePage}>
        <BsFileEarmarkCode />
        Ver código fonte...
      </CodeButton>
    </Container>
  );
};

const Container = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-size: 16px;
    font-weight: 100;
  }

  h1 {
    color: #ff79c6;
  }

  h2 {
    color: #fff;
  }

  h3 {
    color: #f1fa8c;
  }

  h4 {
    color: #50fa7b;
  }

  h5 {
    color: #ffb86c;
  }

  h6 {
    color: #8be9fd;
  }

  p {
    color: #bd93f9;
  }
`;

const Content = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const BorderLeft = styled.div`
  border-left: 1px solid silver;

  > section {
    padding-left: 10px;
  }
`;

const CodeButton = styled.div`
  width: 200px;
  padding: 10px 20px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #191d20;
  background-color: #1f2428;

  :hover {
    background-color: #1f242870;
  }
`;
