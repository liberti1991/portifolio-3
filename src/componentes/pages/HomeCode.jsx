import styled from "styled-components";

import { BsFileEarmarkCode } from "react-icons/bs";

export const HomeCode = ({ handlePage }) => {
  
  const icons = ["{", "}", "=>", "(", ")", "[", "]", "<>", "</>", "<", ">", "</", "/>"];

  const numeros = [];

  for (let i = 1; i <= 99; i++) {
    numeros.push(i);
  }

  return (
    <Container>
      <Number>
        {numeros.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </Number>
      <Content>
        {/* import */}
        <div>
          <Pink>import</Pink>
          <White>styled</White>
          <Pink>from</Pink>
          <Yellow>
            "styled-components" <White>;</White>
          </Yellow>
        </div>
        {/* import */}
        <div>
          <Pink>import</Pink>
          <Yellow>{icons[0]}</Yellow>
          <White>useState</White>
          <Yellow>{icons[1]}</Yellow>
          <Pink>from</Pink>
          <Yellow>
            "react" <White>;</White>
          </Yellow>
        </div>
        {/* import */}
        <div>
          <Pink>import</Pink>
          <Yellow>{icons[0]}</Yellow>
          <White>NavLink</White>
          <Yellow>{icons[1]}</Yellow>
          <Pink>from</Pink>
          <Yellow>
            "react-router-dom" <White>;</White>
          </Yellow>
        </div>
        {/* import */}
        <br />
        <div>
          <Pink>import</Pink>
          <Yellow>{icons[0]}</Yellow>
          <White>BsFileEarmarkCode</White>
          <Yellow>{icons[1]}</Yellow>
          <Pink>from</Pink>
          <Yellow>
            "react-icons/bs" <White>;</White>
          </Yellow>
        </div>
        {/* import */}
        <div>
          <Pink>import</Pink>
          <Yellow>{icons[0]}</Yellow>
          <White>MdDoubleArrow</White>
          <Yellow>{icons[1]}</Yellow>
          <Pink>from</Pink>
          <Yellow>
            "react-icons/md" <White>;</White>
          </Yellow>
        </div>
        <br />
        {/* import */}
        <div>
          <Pink>import</Pink>
          <White>programmer</White>
          <Pink>from</Pink>
          <Yellow>
            "../../assets/Programmer.gif" <White>;</White>
          </Yellow>
        </div>
        <br />
        {/* import */}
        <div>
          <Pink>import</Pink>
          <Yellow>{icons[0]}</Yellow>
          <White>HomeCode</White>
          <Yellow>{icons[1]}</Yellow>
          <Pink>from</Pink>
          <Yellow>"./HomeCode"</Yellow>
          <White>;</White>
        </div>
        <br />
        {/* export */}
        <div>
          <Pink>export</Pink>
          <Pink>const</Pink>
          <Green>Home</Green>
          <Pink> = </Pink>
          <Orange>{icons[3]}</Orange>
          <Orange>{icons[4]}</Orange>
          <Pink>{icons[2]}</Pink>
          <Yellow>{icons[0]}</Yellow>
        </div>
        <BorderLeft>
          <section>
            <div>
              <Pink>const</Pink>
              <Blue>{icons[5]}</Blue>
              <Purple>
                page<White>,</White>
              </Purple>
              <Green>pageSet</Green>
              <Blue>{icons[6]}</Blue>
              <Pink> = </Pink>
              <Green>
                useState<Yellow>{icons[3]}</Yellow>
              </Green>
              <Purple>true</Purple>
              <Yellow>{icons[4]}</Yellow>
              <White>;</White>
            </div>
            <div>
              <Pink>const</Pink>
              <Green>handlePage</Green>
              <Pink> = </Pink>
              <Orange>{icons[3]}</Orange>
              <Orange>{icons[4]}</Orange>
              <Pink>{icons[2]}</Pink>
              <Green>
                pageSet
                <Orange>
                  {icons[3]}
                  <Red>
                    {icons[3]}
                    <Orange>
                      <i>previousState</i>
                    </Orange>
                    <Red>{icons[4]}</Red>
                  </Red>
                </Orange>
              </Green>

              <Pink>{icons[2]}</Pink>
              <Pink>!</Pink>
              <Orange>
                <i>previousState</i>
                <Orange>{icons[4]}</Orange>
              </Orange>
              <White>;</White>
            </div>
            <br />
            <div>
              <Pink>return</Pink>
              <Orange>{icons[3]}</Orange>
              <br />
            </div>
            <BorderLeft>
              <section>
                <div>
                  <White>{icons[7]}</White>
                </div>
                <BorderLeft>
                  <section>
                    <div>
                      <Orange>{icons[0]}</Orange>
                      <p>page</p>
                      <Pink>?</Pink>
                      <Red>{icons[3]}</Red>
                    </div>
                    <BorderLeft>
                      <section>
                        <div>
                          <White>
                            {icons[9]}
                            <Blue>
                              <i>Container</i>
                            </Blue>
                            <White>{icons[10]}</White>
                          </White>
                        </div>
                        <BorderLeft>
                          <section>
                            <div>
                              <White>
                                {icons[9]}
                                <Blue>
                                  <i>Content</i>
                                </Blue>
                                <White>{icons[10]}</White>
                              </White>
                            </div>
                            <BorderLeft>
                              <section>
                                <div>
                                  <White>
                                    {icons[9]}
                                    <Pink>h1</Pink>
                                    <White>{icons[10]}</White>
                                  </White>
                                  <White>Rodrigo Liberti</White>
                                  <White>
                                    {icons[11]}
                                    <Pink>
                                      h1<White>{icons[10]}</White>
                                    </Pink>
                                  </White>
                                </div>
                                <div>
                                  <White>
                                    {icons[9]}
                                    <Pink>p</Pink>
                                    <White>{icons[10]}</White>
                                  </White>
                                  <White>Desenvolvedor Front-End</White>
                                  <White>
                                    {icons[11]}
                                    <Pink>p</Pink>
                                    <White>{icons[10]}</White>
                                  </White>
                                </div>
                                <div>
                                  <White>
                                    {icons[9]}
                                    <Pink>div</Pink>
                                    <White>{icons[10]}</White>
                                  </White>
                                </div>
                                <BorderLeft>
                                  <section>
                                    <div>
                                      <White>
                                        {icons[9]}
                                        <Blue>
                                          <i>CodeButton</i>
                                        </Blue>
                                      </White>
                                      <Green>onClick</Green>
                                      <Pink> =</Pink>
                                      <Brown>
                                        {icons[0]}
                                        <Green>handlePage</Green>
                                        <Brown>{icons[1]}</Brown>
                                        <White>{icons[10]}</White>
                                      </Brown>
                                    </div>
                                    <BorderLeft>
                                      <section>
                                        <div>
                                          <White>
                                            {icons[9]}
                                            <Blue>
                                              <i>BsFileEarmarkCode</i>
                                            </Blue>
                                          </White>
                                          <White>{icons[12]}</White>
                                        </div>
                                        <White>Ver código fonte...</White>
                                      </section>
                                    </BorderLeft>
                                    <div>
                                      <White>{icons[11]}</White>
                                      <Blue>
                                        <i>CodeButton</i>
                                        <White>{icons[10]}</White>
                                      </Blue>
                                    </div>
                                    <div>
                                      <White>
                                        {icons[9]}
                                        <Blue>
                                          <i>CodeButton</i>
                                        </Blue>
                                      </White>
                                    </div>
                                    <BorderLeft>
                                      <section>
                                        <div>
                                          <White>
                                            {icons[9]}
                                            <Blue>NavLink</Blue>
                                          </White>
                                          <Green>
                                            to<Pink>=</Pink>
                                            <Yellow>"/projetos"</Yellow>
                                            <White>{icons[10]}</White>
                                          </Green>
                                        </div>
                                        <BorderLeft>
                                          <section>
                                            <div>
                                              <White>
                                                {icons[9]}
                                                <Blue>
                                                  <i>MdDoubleArrow</i>
                                                </Blue>
                                              </White>
                                              <White>{icons[12]}</White>
                                            </div>
                                            <White>Meus Projetos...</White>
                                          </section>
                                        </BorderLeft>
                                        <div>
                                          <White>{icons[11]}</White>
                                          <Blue>
                                            NavLink<White>{icons[10]}</White>
                                          </Blue>
                                        </div>
                                      </section>
                                    </BorderLeft>

                                    <div>
                                      <White>{icons[11]}</White>
                                      <Blue>
                                        <i>CodeButton</i>
                                        <White>{icons[10]}</White>
                                      </Blue>
                                    </div>
                                  </section>
                                </BorderLeft>
                                <div>
                                  <White>
                                    {icons[9]}
                                    <Pink>div</Pink>
                                  </White>
                                  <White>{icons[12]}</White>
                                </div>
                              </section>
                            </BorderLeft>
                            <div>
                              <White>{icons[11]}</White>
                              <Blue>
                                <i>Content</i>
                                <White>{icons[10]}</White>
                              </Blue>
                            </div>
                            <div>
                              <White>
                                {icons[9]}
                                <Pink>img</Pink>
                              </White>
                              <Green>
                                src<Pink>=</Pink>
                                <Brown>{icons[0]}</Brown>
                                <Purple>programmer</Purple>
                                <Brown>{icons[1]}</Brown>
                              </Green>
                              <Green>
                                alt<Pink>=</Pink>
                                <Yellow>"programmer img"</Yellow>
                              </Green>
                              <White>{icons[12]}</White>
                            </div>
                          </section>
                        </BorderLeft>
                        <div>
                          <White>{icons[11]}</White>
                          <Blue>
                            <i>Container</i>
                            <White>{icons[10]}</White>
                          </Blue>
                        </div>
                      </section>
                    </BorderLeft>
                  </section>
                </BorderLeft>
                <BorderLeft>
                  <section>
                    <div>
                      <Red>{icons[4]}</Red>
                      <White>:</White>
                      <Red>{icons[3]}</Red>
                    </div>
                    <BorderLeft>
                      <section>
                        <div>
                          <White>
                            {icons[9]}
                            <Blue>HomeCode</Blue>
                          </White>
                          <Green>
                            <i>handlePage</i>
                            <Pink>=</Pink>
                            <Brown>{icons[0]}</Brown>
                            <Green>handlePage</Green>
                            <Brown>{icons[1]}</Brown>
                          </Green>
                          <White>{icons[12]}</White>
                        </div>
                      </section>
                    </BorderLeft>
                  </section>
                </BorderLeft>
                <BorderLeft>
                  <section>
                    <div>
                      <Red>{icons[4]}</Red>
                      <Yellow>{icons[1]}</Yellow>
                    </div>
                  </section>
                </BorderLeft>
                <div>
                  <White>{icons[8]}</White>
                </div>
              </section>
            </BorderLeft>
            <div>
              <Orange>{icons[4]}</Orange>
              <White>;</White>
            </div>
          </section>
        </BorderLeft>
        <div>
          <Yellow>{icons[1]}</Yellow>
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
            <div>
              <Pink>height:</Pink>
              <Blue>
                calc<Yellow>{icons[3]}</Yellow>
                <Purple>
                  100<Pink>%</Pink>
                </Purple>
              </Blue>
              <White> - </White>
              <Purple>
                35<Pink>px</Pink>
                <Yellow>{icons[4]}</Yellow>
                <White>;</White>
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
              <White>{icons[10]}</White>
              <Pink>p</Pink>
              <Yellow>{icons[0]}</Yellow>
            </div>
            <BorderLeft>
              <section>
                <div>
                  <Pink>font-size:</Pink>
                  <Purple>
                    16<Pink>px</Pink>
                    <White>;</White>
                  </Purple>
                </div>
              </section>
            </BorderLeft>
            <Yellow>{icons[1]}</Yellow>
            <br />
            <br />
            <div>
              <White>{icons[10]}</White>
              <Pink>div</Pink>
              <Yellow>{icons[0]}</Yellow>
            </div>
            <BorderLeft>
              <section>
                <div>
                  <Pink>display:</Pink>
                  <Purple>
                    flex
                    <White>;</White>
                  </Purple>
                </div>
                <div>
                  <Pink>alingn-items:</Pink>
                  <Purple>
                    center
                    <White>;</White>
                  </Purple>
                </div>
                <div>
                  <Pink>gap:</Pink>
                  <Purple>
                    20<Pink>px</Pink>
                    <White>;</White>
                  </Purple>
                </div>
              </section>
            </BorderLeft>
            <Yellow>{icons[1]}</Yellow>
            <br />
            <br />
            <div>
              <White>{icons[10]}</White>
              <Pink>h1</Pink>
              <Yellow>{icons[0]}</Yellow>
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
            <Yellow>{icons[1]}</Yellow>
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
              <Pink>gap:</Pink>
              <Purple>
                10<Pink>px</Pink>
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
              <Pink>svg</Pink>
              <Yellow>{icons[0]}</Yellow>
            </div>
            <BorderLeft>
              <section>
                <div>
                  <Pink>font-size:</Pink>
                  <Purple>
                    18<Pink>px</Pink>
                    <White>;</White>
                  </Purple>
                </div>
              </section>
            </BorderLeft>
            <div>
              <Yellow>{icons[1]}</Yellow>
            </div>
            <br />
            <div>
              <Pink>a</Pink>
              <Yellow>{icons[0]}</Yellow>
            </div>
            <BorderLeft>
              <section>
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
                  <Pink>gap:</Pink>
                  <Purple>
                    10<Pink>px</Pink>
                    <White>;</White>
                  </Purple>
                </div>
                <div>
                  <Pink>color:</Pink>
                  <White>#fff;</White>
                </div>
              </section>
            </BorderLeft>
            <div>
              <Yellow>{icons[1]}</Yellow>
            </div>
            <br />
            <div>
              <Pink>
                :<Green>hover</Green>
              </Pink>
              <Yellow>{icons[0]}</Yellow>
            </div>
            <BorderLeft>
              <section>
                <div>
                  <Pink>background-color:</Pink>
                  <White>#1f242870;</White>
                </div>
              </section>
            </BorderLeft>
            <Yellow>{icons[1]}</Yellow>
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
