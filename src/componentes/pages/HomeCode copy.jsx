import styled from "styled-components";

import { GiReturnArrow } from "react-icons/gi";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

import { useState } from "react";

export const HomeCode = ({ handlePage }) => {
  const icons = ["{", "}", "=>", "(", ")", "[", "]", "<>", "</>", "<", ">", "</", "/>"];

  const numeros = [];

  for (let i = 1; i <= 99; i++) {
    numeros.push(i);
  }

  const [exportToggle, exportToggleSet] = useState(true);
  const handleExport = () => exportToggleSet((previousState) => !previousState);

  const [returnToggle, returnToggleSet] = useState(true);
  const handleReturn = () => returnToggleSet((previousState) => !previousState);

  const [const1, const1Set] = useState(true);
  const handleConst1 = () => const1Set((previousState) => !previousState);

  const [const2, const2Set] = useState(true);
  const handleConst2 = () => const2Set((previousState) => !previousState);

  const [const3, const3Set] = useState(true);
  const handleConst3 = () => const3Set((previousState) => !previousState);

  //!exportToggle && returnToggle && const1 && const2 && const3
  const export1 = numeros.slice(0, 12);
  const export2 = numeros.slice(42);
  const numerosExport = export1.concat(export2);

  //exportToggle && !returnToggle && const1 && const2 && const3
  const return1 = numeros.slice(0, 16);
  const return2 = numeros.slice(41);
  const numerosReturn = return1.concat(return2);

  //exportToggle && returnToggle && !const1 && const2 && const3
  const const1n1 = numeros.slice(0, 45);
  const const1n2 = numeros.slice(49);
  const numerosConst1 = const1n1.concat(const1n2);

  //exportToggle && !returnToggle && !const1 && const2 && const3
  const spaceReturnAndConst1 = numeros.slice(41, 45);
  const numberReturnAndConst1 = return1.concat(spaceReturnAndConst1).concat(const1n2);

  //!exportToggle && returnToggle && !const1 && const2 && const3
  const spaceExportAndConst1 = numeros.slice(42, 45);
  const numberExportAndConst1 = export1.concat(spaceExportAndConst1).concat(const1n2);

  //!exportToggle && !returnToggle && !const1 && const2 && const3
  const numberExportOTReturnOrConst1 = export1.concat(spaceExportAndConst1).concat(const1n2);

  //exportToggle && returnToggle && const1 && !const2 && const3
  const const2n1 = numeros.slice(0, 52);
  const const2n2 = numeros.slice(68);
  const numerosConst2 = const2n1.concat(const2n2);

  //exportToggle && returnToggle && !const1 && !const2 && const3
  const spaceConst1AnConst2 = numeros.slice(49, 52);
  const numerosConst1AndConst2 = const1n1.concat(spaceConst1AnConst2).concat(const2n2);

  //exportToggle && !returnToggle && !const1 && !const2 && const3
  const numberReturnOrConst1OrConst2 = return1.concat(spaceReturnAndConst1).concat(spaceConst1AnConst2).concat(const2n2);

  //!exportToggle && !returnToggle && !const1 && !const2 && const3
  const numberExportOrReturnOrConst1OrConst2 = export1.concat(spaceExportAndConst1).concat(spaceConst1AnConst2).concat(const2n2);

  //exportToggle && returnToggle && const1 && const2 && !const3
  const const3n1 = numeros.slice(0, 71);
  const const3n2 = numeros.slice(97);
  const numerosConst3 = const3n1.concat(const3n2);

  //exportToggle && returnToggle && const1 && !const2 && !const3
  const spaceConst2AnConst3 = numeros.slice(68, 71);
  const numerosConst2AndConst3 = const2n1.concat(spaceConst2AnConst3).concat(const3n2);

  //exportToggle && returnToggle && !const1 && !const2 && !const3
  const numberConst1OrConst2OrConst3 = const1n1.concat(spaceConst1AnConst2).concat(spaceConst2AnConst3).concat(const3n2);

  //exportToggle && !returnToggle && !const1 && !const2 && !const3
  const numberReturnORConst1OrConst2OrConst3 = return1.concat(spaceReturnAndConst1).concat(spaceConst1AnConst2).concat(spaceConst2AnConst3).concat(const3n2);

  //!exportToggle && !returnToggle && !const1 && !const2 && !const3
  const numberOfFalse = export1.concat(spaceExportAndConst1).concat(spaceConst1AnConst2).concat(spaceConst2AnConst3).concat(const3n2);

  return (
    <Container>
      <Number>
        {/* {numeros.map((item) => (
          <span key={item}>{item}</span>
        ))} */}
        {exportToggle && returnToggle && const1 && const2 && const3 && numeros.map((item) => <span key={item}>{item}</span>)}
        {!exportToggle && returnToggle && const1 && const2 && const3 && numerosExport.map((item) => <span key={item}>{item}</span>)}
        {exportToggle && !returnToggle && const1 && const2 && const3 && numerosReturn.map((item) => <span key={item}>{item}</span>)}
        {!exportToggle && !returnToggle && const1 && const2 && const3 && numerosExport.map((item) => <span key={item}>{item}</span>)}
        {exportToggle && returnToggle && !const1 && const2 && const3 && numerosConst1.map((item) => <span key={item}>{item}</span>)}
        {exportToggle && !returnToggle && !const1 && const2 && const3 && numberReturnAndConst1.map((item) => <span key={item}>{item}</span>)}
        {!exportToggle && returnToggle && !const1 && const2 && const3 && numberExportAndConst1.map((item) => <span key={item}>{item}</span>)}
        {!exportToggle && !returnToggle && !const1 && const2 && const3 && numberExportOTReturnOrConst1.map((item) => <span key={item}>{item}</span>)}
        {exportToggle && returnToggle && const1 && !const2 && const3 && numerosConst2.map((item) => <span key={item}>{item}</span>)}
        {exportToggle && returnToggle && !const1 && !const2 && const3 && numerosConst1AndConst2.map((item) => <span key={item}>{item}</span>)}
        {exportToggle && !returnToggle && !const1 && !const2 && const3 && numberReturnOrConst1OrConst2.map((item) => <span key={item}>{item}</span>)}
        {!exportToggle && !returnToggle && !const1 && !const2 && const3 && numberExportOrReturnOrConst1OrConst2.map((item) => <span key={item}>{item}</span>)}
        {exportToggle && returnToggle && const1 && const2 && !const3 && numerosConst3.map((item) => <span key={item}>{item}</span>)}
        {exportToggle && returnToggle && const1 && !const2 && !const3 && numerosConst2AndConst3.map((item) => <span key={item}>{item}</span>)}
        {exportToggle && returnToggle && !const1 && !const2 && !const3 && numberConst1OrConst2OrConst3.map((item) => <span key={item}>{item}</span>)}
        {exportToggle && !returnToggle && !const1 && !const2 && !const3 && numberReturnORConst1OrConst2OrConst3.map((item) => <span key={item}>{item}</span>)}
        {(!exportToggle && !returnToggle && !const1 && !const2 && !const3) ||
          (!exportToggle && returnToggle && !const1 && !const2 && !const3 && numberOfFalse.map((item) => <span key={item}>{item}</span>))}
      </Number>
      <Content>
        {/* import */}


          <section>
            <Number>1</Number>
            <Content>
              
            </Content>
          </section>


       
        <br />
        
        {/* import */}
        
        <br />
        {/* import */}
        
        <br />
        {/* import */}
        
        <br />
        {/* export */}
        
        {exportToggle && (
          <>
            <BorderLeft>
              <section>
                
                
                <br />

                
                {returnToggle && (
                  <BorderLeft>
                    <section>
                      
                      <BorderLeft>
                        <section>
                          
                          <BorderLeft>
                            <section>
                              
                              <BorderLeft>
                                <section>
                                  
                                  <BorderLeft>
                                    <section>
                                      
                                      
                                      
                                      <BorderLeft>
                                        <section>
                                          
                                          <BorderLeft>
                                            <section>
                                              
                                              <White>Ver código fonte...</White>
                                            </section>
                                          </BorderLeft>
                                          
                                          
                                          <BorderLeft>
                                            <section>
                                              
                                              <BorderLeft>
                                                <section>
                                                 
                                                  
                                                </section>
                                              </BorderLeft>
                                              
                                            </section>
                                          </BorderLeft>

                                          
                                        </section>
                                      </BorderLeft>
                                      
                                    </section>
                                  </BorderLeft>
                                  
                                  
                                </section>
                              </BorderLeft>
                              
                            </section>
                          </BorderLeft>
                        </section>
                      </BorderLeft>
                      <BorderLeft>
                        <section>
                          
                          <BorderLeft>
                            <section>
                              
                            </section>
                          </BorderLeft>
                        </section>
                      </BorderLeft>
                      <BorderLeft>
                        <section>
                          
                        </section>
                      </BorderLeft>
                      
                    </section>
                  </BorderLeft>
                )}
                
              </section>
            </BorderLeft>
          </>
        )}
        

        
        <div>
          {!const1 && <MdKeyboardArrowRight style={{ opacity: 1 }} onClick={handleConst1} />}
          {const1 && <MdKeyboardArrowDown onClick={handleConst1} />}
          <Pink>Const</Pink>
          <Purple>Container</Purple>
          <Pink>=</Pink>
          <Purple>
            Styled<White>.div</White>
            <Yellow>`</Yellow>
          </Purple>
        </div>
        {const1 && (
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
        )}

        <div>
          <Yellow>
            `<White>;</White>
          </Yellow>
        </div>
        <br />
        <div>
          {!const2 && <MdKeyboardArrowRight style={{ opacity: 1 }} onClick={handleConst2} />}
          {const2 && <MdKeyboardArrowDown onClick={handleConst2} />}
          <Pink>Const</Pink>
          <Purple>Content</Purple>
          <Pink>=</Pink>
          <Purple>
            Styled<White>.span</White>
            <Yellow>`</Yellow>
          </Purple>
        </div>
        {const2 && (
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
        )}
        <div>
          <Yellow>
            `<White>;</White>
          </Yellow>
        </div>
        <br />
        <div>
          {!const3 && <MdKeyboardArrowRight style={{ opacity: 1 }} onClick={handleConst3} />}
          {const3 && <MdKeyboardArrowDown onClick={handleConst3} />}
          <Pink>Const</Pink>
          <Purple>CodeButton</Purple>
          <Pink>=</Pink>
          <Purple>
            Styled<White>.div</White>
            <Yellow>`</Yellow>
          </Purple>
        </div>
        {const3 && (
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
        )}
        
      </Content>
      <CodeButton onClick={handlePage}>
        <GiReturnArrow />
        Voltar a Home...
      </CodeButton>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 90px);
  overflow: auto;
  display: grid;
  grid-template-columns: 30px auto;
  padding: 0 30px;
  span {
    font-size: 16px;
    font-weight: 100;
  }
`;

const Number = styled.div`
  padding-right: 25px;
  color: #5f43a1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const Content = styled.div`
  position: relative;
  div {
    display: flex;
    align-items: center;
    gap: 5px;

    svg {
      position: absolute;
      left: -20px;
      font-size: 20px;
      opacity: 0.4;

      :hover {
        opacity: 1;
      }
    }
  }
`;

const BorderLeft = styled.div`
  border-left: 1px solid #7774746f;

  > section {
    padding-left: 15px;

    > div {
      > svg {
        position: absolute;
        left: -20px;
        font-size: 20px;
        opacity: 0.4;

        :hover {
          opacity: 1;
        }
      }
    }
  }
`;

const CodeButton = styled.div`
  position: absolute;
  margin-top: 30px;
  right: 40px;
  width: 200px;
  padding: 10px 20px;
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
