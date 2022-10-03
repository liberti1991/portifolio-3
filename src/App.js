import GlobalStyle from "./styles/createGlobalStyle";

import { MainHeader } from "./componentes/layout/MainHeader";
import { Body } from "./componentes/layout/Body";
import { Footer } from "./componentes/layout/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <MainHeader />
      <Body />
      <Footer />
    </>
  );
}

export default App;
