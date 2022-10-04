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
  const h = "<>";
  const i = "</>";
  const j = "<";
  const k = ">";
  const l = "</";
  const m = "/>";

  const numeros = [];

  for (let i = 1; i <= 66; i++) {
    numeros.push(i);
  }

  console.log(numeros);
  return (
    <Container>
      <Number>
        {numeros.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </Number>
      <Content>
        <div>
          <Pink>import</Pink>
          <White>styled</White>
          <Pink>from</Pink>
          <Yellow>
            "styled-components" <White>;</White>
          </Yellow>
        </div>
        <div>
          <Pink>import</Pink>
          <Yellow>{a}</Yellow>
          <White>useState</White>
          <Yellow>{b}</Yellow>
          <Pink>from</Pink>
          <Yellow>
            "react" <White>;</White>
          </Yellow>
        </div>
        <br />
        <div>
          <Pink>import</Pink>
          <Yellow>{a}</Yellow>
          <White>BsFileEarmarkCode</White>
          <Yellow>{b}</Yellow>
          <Pink>from</Pink>
          <Yellow>
            "react-icons/bs" <White>;</White>
          </Yellow>
        </div>
        <br />
        <div>
          <Pink>import</Pink>
          <White>programmer</White>
          <Pink>from</Pink>
          <Yellow>
            "../../assets/Programmer.gif" <White>;</White>
          </Yellow>
        </div>
        <br />
        <div>
          <Pink>import</Pink>
          <Yellow>{a}</Yellow>
          <White>HomeCode</White>
          <Yellow>{b}</Yellow>
          <Pink>from</Pink>
          <Yellow>"./HomeCode"</Yellow>
          <White>;</White>
        </div>
        <br />
        <div>
          <Pink>export</Pink>
          <Pink>const</Pink>
          <Green>Home</Green>
          <Pink> = </Pink>
          <Orange>{d}</Orange>
          <Orange>{e}</Orange>
          <Pink>{c}</Pink>
          <Yellow>{a}</Yellow>
        </div>
        <BorderLeft>
          <section>
            <div>
              <Pink>const</Pink>
              <Blue>{f}</Blue>
              <Purple>
                page<White>,</White>
              </Purple>
              <Green>pageSet</Green>
              <Blue>{g}</Blue>
              <Pink> = </Pink>
              <Green>
                useState<Yellow>{d}</Yellow>
              </Green>
              <Purple>true</Purple>
              <Yellow>{e}</Yellow>
              <White>;</White>
            </div>
            <div>
              <Pink>const</Pink>
              <Green>handlePage</Green>
              <Pink> = </Pink>
              <Orange>{d}</Orange>
              <Orange>{e}</Orange>
              <Pink>{c}</Pink>
              <Green>
                pageSet
                <Orange>
                  {d}
                  <Red>
                    {d}
                    <Orange>
                      <i>previousState</i>
                    </Orange>
                    <Red>{e}</Red>
                  </Red>
                </Orange>
              </Green>

              <Pink>{c}</Pink>
              <Pink>!</Pink>
              <Orange>
                <i>previoState</i>
                <Orange>{e}</Orange>
              </Orange>
              <White>;</White>
            </div>
            <br />
            <div>
              <Pink>return</Pink>
              <Orange>{d}</Orange>
              <br />
            </div>
            <BorderLeft>
              <section>
                <div>
                  <White>{h}</White>
                </div>
                <BorderLeft>
                  <section>
                    <div>
                      <Orange>{a}</Orange>
                      <p>page</p>
                      <Pink>?</Pink>
                      <Red>{d}</Red>
                    </div>
                    <BorderLeft>
                      <section>
                        <div>
                          <White>
                            {j}
                            <Blue>
                              <i>Container</i>
                            </Blue>
                            <White>{k}</White>
                          </White>
                        </div>
                        <BorderLeft>
                          <section>
                            <div>
                              <White>
                                {j}
                                <Blue>
                                  <i>Content</i>
                                </Blue>
                                <White>{k}</White>
                              </White>
                            </div>
                            <BorderLeft>
                              <section>
                                <div>
                                  <White>
                                    {j}
                                    <Pink>h1</Pink>
                                    <White>{k}</White>
                                  </White>
                                  <White>Rodrigo Liberti</White>
                                  <White>
                                    {l}
                                    <Pink>
                                      h1<White>{k}</White>
                                    </Pink>
                                  </White>
                                </div>
                                <div>
                                  <White>
                                    {j}
                                    <Pink>p</Pink>
                                    <White>{k}</White>
                                  </White>
                                  <White>Desenvolvedor Front-End</White>
                                  <White>
                                    {l}
                                    <Pink>p</Pink>
                                    <White>{k}</White>
                                  </White>
                                </div>
                                <div>
                                  <White>
                                    {j}
                                    <Blue>
                                      <i>CodeButton</i>
                                    </Blue>
                                  </White>
                                  <Green>onClick</Green>
                                  <Pink> =</Pink>
                                  <Brown>
                                    {a}
                                    <Green>handlePage</Green>
                                    <Brown>{b}</Brown>
                                    <White>{k}</White>
                                  </Brown>
                                </div>
                                <BorderLeft>
                                  <section>
                                    <div>
                                      <White>
                                        {j}
                                        <Blue>
                                          <i>BsFileEarmarkCode</i>
                                        </Blue>
                                      </White>
                                      <White>{m}</White>
                                    </div>
                                    <White>Ver código fonte...</White>
                                  </section>
                                </BorderLeft>
                                <div>
                                  <White>{l}</White>
                                  <Blue>
                                    <i>CodeButton</i>
                                    <White>{k}</White>
                                  </Blue>
                                </div>
                              </section>
                            </BorderLeft>
                            <div>
                              <White>{l}</White>
                              <Blue>
                                <i>Content</i>
                                <White>{k}</White>
                              </Blue>
                            </div>
                            <div>
                              <White>
                                {j}
                                <Pink>img</Pink>
                              </White>
                              <Green>
                                src<Pink>=</Pink>
                                <Brown>{a}</Brown>
                                <Purple>programmer</Purple>
                                <Brown>{b}</Brown>
                              </Green>
                              <Green>
                                alt<Pink>=</Pink>
                                <Yellow>"programmer img"</Yellow>
                              </Green>
                              <White>{m}</White>
                            </div>
                          </section>
                        </BorderLeft>
                        <div>
                          <White>{l}</White>
                          <Blue>
                            <i>Container</i>
                            <White>{k}</White>
                          </Blue>
                        </div>
                      </section>
                    </BorderLeft>
                  </section>
                </BorderLeft>
                <BorderLeft>
                  <section>
                    <div>
                      <Red>{e}</Red>
                      <White>:</White>
                      <Red>{d}</Red>
                    </div>
                    <BorderLeft>
                      <section>
                        <div>
                          <White>
                            {j}
                            <Blue>HomeCode</Blue>
                          </White>
                          <Green>
                            <i>handlePage</i>
                            <Pink>=</Pink>
                            <Brown>{a}</Brown>
                            <Green>handlePage</Green>
                            <Brown>{b}</Brown>
                          </Green>
                          <White>{m}</White>
                        </div>
                      </section>
                    </BorderLeft>
                  </section>
                </BorderLeft>
                <BorderLeft>
                  <section>
                    <div>
                      <Red>{e}</Red>
                      <Yellow>{b}</Yellow>
                    </div>
                  </section>
                </BorderLeft>
                <div>
                  <White>{i}</White>
                </div>
              </section>
            </BorderLeft>
            <div>
              <Orange>{e}</Orange>
              <White>;</White>
            </div>
          </section>
        </BorderLeft>
        <div>
          <Yellow>{b}</Yellow>
          <White>;</White>
        </div>
        <br />
        <div>
          <Pink>Const</Pink>
          <Purple>Container</Purple>
          <Pink>=</Pink>
          <Purple>
            Styled<White>.div</White>
            <Yellow>`</Yellow>
          </Purple>
        </div>
        <BorderLeft>
          <section>
            <div>
              <Pink>display:</Pink>
              <Purple>
                grid<White>;</White>
              </Purple>
            </div>
            <div>
              <Pink>grid-template-columns:</Pink>
              <Purple>
                1<Pink>fr</Pink>
              </Purple>
              <Purple>
                1<Pink>fr</Pink>
                <White>;</White>
              </Purple>
            </div>
            <div>
              <Pink>align-items:</Pink>
              <Purple>
                center<White>;</White>
              </Purple>
            </div>
          </section>
        </BorderLeft>
        <div>
          <Yellow>
            `<White>;</White>
          </Yellow>
        </div>
        <br />
        <div>
          <Pink>Const</Pink>
          <Purple>Content</Purple>
          <Pink>=</Pink>
          <Purple>
            Styled<White>.span</White>
            <Yellow>`</Yellow>
          </Purple>
        </div>
        <BorderLeft>
          <section>
            <div>
              <Pink>padding:</Pink>
              <Purple>
                50<Pink>px</Pink>
                <White>;</White>
              </Purple>
            </div>
            <br />
            <div>
              <White>{k}</White>
              <Pink>h1</Pink>
              <Yellow>{a}</Yellow>
            </div>
            <BorderLeft>
              <section>
                <div>
                  <Pink>font-size:</Pink>
                  <Purple>
                    2.5<Pink>rem</Pink>
                    <White>;</White>
                  </Purple>
                </div>
                <div>
                  <Pink>margin-bottom:</Pink>
                  <Purple>
                    10<Pink>px</Pink>
                    <White>;</White>
                  </Purple>
                </div>
              </section>
            </BorderLeft>
            <Yellow>{b}</Yellow>
          </section>
        </BorderLeft>
        <div>
          <Yellow>
            `<White>;</White>
          </Yellow>
        </div>
        <br />
        <div>
          <Pink>Const</Pink>
          <Purple>CodeButton</Purple>
          <Pink>=</Pink>
          <Purple>
            Styled<White>.div</White>
            <Yellow>`</Yellow>
          </Purple>
        </div>
        <BorderLeft>
          <section>
            <div>
              <Pink>widht:</Pink>
              <Purple>
                200<Pink>px</Pink>
                <White>;</White>
              </Purple>
            </div>
            <div>
              <Pink>padding:</Pink>
              <Purple>
                10<Pink>px</Pink>
              </Purple>
              <Purple>
                10<Pink>px</Pink>
                <White>;</White>
              </Purple>
            </div>
            <div>
              <Pink>margin-top:</Pink>
              <Purple>
                50<Pink>px</Pink>
                <White>;</White>
              </Purple>
            </div>
            <div>
              <Pink>display:</Pink>
              <Purple>
                flex
                <White>;</White>
              </Purple>
            </div>
            <div>
              <Pink>align-items:</Pink>
              <Purple>
                center
                <White>;</White>
              </Purple>
            </div>
            <div>
              <Pink>cursor:</Pink>
              <Purple>
                pointer
                <White>;</White>
              </Purple>
            </div>
            <div>
              <Pink>border-radius:</Pink>
              <Purple>
                10<Pink>px</Pink>
                <White>;</White>
              </Purple>
            </div>
            <div>
              <Pink>border:</Pink>
              <Purple>
                1<Pink>px</Pink>
              </Purple>
              <Purple>solid</Purple>
              <White>#191d20;</White>
            </div>
            <div>
              <Pink>background-color:</Pink>
              <White>#1f2428;</White>
            </div>
            <div>
              <Pink>transition:</Pink>
              <Purple>
                .3<Pink>s</Pink>
                <White>;</White>
              </Purple>
            </div>
            <br />
            <div>
              <Pink>
                :<Green>hover</Green>
              </Pink>
              <Yellow>{a}</Yellow>
            </div>
            <BorderLeft>
              <section>
                <div>
                  <Pink>background-color:</Pink>
                  <White>#1f242870;</White>
                </div>
              </section>
            </BorderLeft>
            <Yellow>{b}</Yellow>
          </section>
        </BorderLeft>
        <div>
          <Yellow>
            `<White>;</White>
          </Yellow>
        </div>
      </Content>
      <CodeButton onClick={handlePage}>
        <BsFileEarmarkCode />
        Ver código fonte...
      </CodeButton>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 90px);
  overflow: auto;
  display: grid;
  grid-template-columns: 20px auto;
  padding: 0 30px;
  span {
    font-size: 16px;
    font-weight: 100;
  }
`;

const Number = styled.div`
  padding-right: 15px;
  color: #5f43a1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const Pink = styled.span`
  color: #ff79c6;
`;

const White = styled.span`
  color: #fff;
`;

const Yellow = styled.span`
  color: #f1fa8c;
`;

const Green = styled.span`
  color: #50fa7b;
`;

const Orange = styled.span`
  color: #ffb86c;
`;

const Brown = styled.span`
  color: #996328;
`;

const Blue = styled.span`
  color: #8be9fd;
`;

const Purple = styled.span`
  color: #bd93f9;
`;

const Red = styled.span`
  color: red;
`;

const Content = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const BorderLeft = styled.div`
  border-left: 1px solid #7774746f;

  > section {
    padding-left: 15px;
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
  transition: 0.3s;

  :hover {
    background-color: #1f242870;
  }
`;
