import styled from "styled-components";

import { GiReturnArrow } from "react-icons/gi";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

import { useState } from "react";

export const HomeCode = ({ handlePage }) => {
  const icons = ["{", "}", "=>", "(", ")", "[", "]", "<>", "</>", "<", ">", "</", "/>"];

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

  return (
    <Container>
      <section>
        <Number>1</Number>
        <Content>
          <div>
            <Pink>import</Pink>
            <White>styled</White>
            <Pink>from</Pink>
            <Yellow>
              "styled-components" <White>;</White>
            </Yellow>
          </div>
        </Content>
      </section>
      <section>
        <Number>2</Number>
        <Content>
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
        </Content>
      </section>
      <section>
        <Number>3</Number>
        <Content>
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
        </Content>
      </section>
      <section>
        <Number>4</Number>
        <br />
      </section>
      <section>
        <Number>5</Number>
        <Content>
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
        </Content>
      </section>
      <section>
        <Number>6</Number>
        <Content>
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
        </Content>
      </section>
      <section>
        <Number>7</Number>
        <br />
      </section>
      <section>
        <Number>8</Number>
        <Content>
          <div>
            <Pink>import</Pink>
            <White>programmer</White>
            <Pink>from</Pink>
            <Yellow>
              "../../assets/Programmer.gif" <White>;</White>
            </Yellow>
          </div>
        </Content>
      </section>
      <section>
        <Number>9</Number>
        <br />
      </section>
      <section>
        <Number>10</Number>
        <Content>
          <div>
            <Pink>import</Pink>
            <Yellow>{icons[0]}</Yellow>
            <White>HomeCode</White>
            <Yellow>{icons[1]}</Yellow>
            <Pink>from</Pink>
            <Yellow>"./HomeCode"</Yellow>
            <White>;</White>
          </div>
        </Content>
      </section>
      <section>
        <Number>11</Number>
        <br />
      </section>
      <section>
        <Number>12</Number>
        <Content>
          <div>
            {!exportToggle && <MdKeyboardArrowRight style={{ opacity: 1 }} onClick={handleExport} />}
            {exportToggle && <MdKeyboardArrowDown onClick={handleExport} />}
            <Pink>export</Pink>
            <Pink>const</Pink>
            <Green>Home</Green>
            <Pink> = </Pink>
            <Orange>{icons[3]}</Orange>
            <Orange>{icons[4]}</Orange>
            <Pink>{icons[2]}</Pink>
            <Yellow>{icons[0]}</Yellow>
          </div>
        </Content>
      </section>
      {exportToggle && (
        <>
          <section>
            <Number>13</Number>
            <Content>
              <BorderLeft>
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
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>14</Number>
            <Content>
              <BorderLeft>
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
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>15</Number>
            <BorderLeft>
              <br />
            </BorderLeft>
          </section>

          <section>
            <Number>16</Number>
            <Content>
              <BorderLeft>
                <div>
                  {!returnToggle && <MdKeyboardArrowRight style={{ opacity: 1 }} onClick={handleReturn} />}
                  {returnToggle && <MdKeyboardArrowDown onClick={handleReturn} />}
                  <Pink>return</Pink>
                  <Orange>{icons[3]}</Orange>
                </div>
              </BorderLeft>
            </Content>
          </section>
          {returnToggle && (
            <>
              <section>
                <Number>17</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <div>
                        <White>{icons[7]}</White>
                      </div>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>18</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <div>
                          <Orange>{icons[0]}</Orange>
                          <p>page</p>
                          <Pink>?</Pink>
                          <Red>{icons[3]}</Red>
                        </div>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>19</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <div>
                            <White>
                              {icons[9]}
                              <Blue>
                                <i>Container</i>
                              </Blue>
                              <White>{icons[10]}</White>
                            </White>
                          </div>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>20</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <BorderLeft>
                            <div>
                              <White>
                                {icons[9]}
                                <Blue>
                                  <i>Content</i>
                                </Blue>
                                <White>{icons[10]}</White>
                              </White>
                            </div>
                          </BorderLeft>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>21</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <BorderLeft>
                            <BorderLeft>
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
                            </BorderLeft>
                          </BorderLeft>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>22</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <BorderLeft>
                            <BorderLeft>
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
                            </BorderLeft>
                          </BorderLeft>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>23</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <BorderLeft>
                            <BorderLeft>
                              <div>
                                <White>
                                  {icons[9]}
                                  <Pink>div</Pink>
                                  <White>{icons[10]}</White>
                                </White>
                              </div>
                            </BorderLeft>
                          </BorderLeft>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>24</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <BorderLeft>
                            <BorderLeft>
                              <BorderLeft>
                                <div>
                                  <White>
                                    {icons[9]}
                                    <Blue>
                                      <i>CodeButton</i>
                                    </Blue>
                                  </White>
                                  <Green>
                                    <i>onClick</i>
                                    <Pink>=</Pink>
                                    <Brown>
                                      {icons[0]}
                                      <Green>handlePage</Green>
                                      <Brown>{icons[1]}</Brown>
                                      <White>{icons[10]}</White>
                                    </Brown>
                                  </Green>
                                </div>
                              </BorderLeft>
                            </BorderLeft>
                          </BorderLeft>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>25</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <BorderLeft>
                            <BorderLeft>
                              <BorderLeft>
                                <BorderLeft>
                                  <div>
                                    <White>
                                      {icons[9]}
                                      <Blue>
                                        <i>BsFileEarmarkCode</i>
                                      </Blue>
                                    </White>
                                    <White>{icons[12]}</White>
                                  </div>
                                </BorderLeft>
                              </BorderLeft>
                            </BorderLeft>
                          </BorderLeft>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>26</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <BorderLeft>
                            <BorderLeft>
                              <BorderLeft>
                                <BorderLeft>
                                  <White>Ver código fonte...</White>
                                </BorderLeft>
                              </BorderLeft>
                            </BorderLeft>
                          </BorderLeft>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>27</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <BorderLeft>
                            <BorderLeft>
                              <BorderLeft>
                                <div>
                                  <White>{icons[11]}</White>
                                  <Blue>
                                    <i>CodeButton</i>
                                    <White>{icons[10]}</White>
                                  </Blue>
                                </div>
                              </BorderLeft>
                            </BorderLeft>
                          </BorderLeft>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>28</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <BorderLeft>
                            <BorderLeft>
                              <BorderLeft>
                                <div>
                                  <White>
                                    {icons[9]}
                                    <Blue>
                                      <i>CodeButton</i>
                                    </Blue>
                                  </White>
                                </div>
                              </BorderLeft>
                            </BorderLeft>
                          </BorderLeft>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>29</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <BorderLeft>
                            <BorderLeft>
                              <BorderLeft>
                                <BorderLeft>
                                  <div>
                                    <White>
                                      {icons[9]}
                                      <Blue>
                                        <i>NavLink</i>
                                      </Blue>
                                    </White>
                                    <Green>
                                      <i>to</i>
                                      <Pink>=</Pink>
                                      <Yellow>"/projetos"</Yellow>
                                      <White>{icons[10]}</White>
                                    </Green>
                                  </div>
                                </BorderLeft>
                              </BorderLeft>
                            </BorderLeft>
                          </BorderLeft>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>30</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <BorderLeft>
                            <BorderLeft>
                              <BorderLeft>
                                <BorderLeft>
                                  <BorderLeft>
                                    <div>
                                      <White>
                                        {icons[9]}
                                        <Blue>
                                          <i>MdDoubleArrow</i>
                                        </Blue>
                                      </White>
                                      <White>{icons[12]}</White>
                                    </div>
                                  </BorderLeft>
                                </BorderLeft>
                              </BorderLeft>
                            </BorderLeft>
                          </BorderLeft>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>31</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <BorderLeft>
                            <BorderLeft>
                              <BorderLeft>
                                <BorderLeft>
                                  <BorderLeft>
                                    <White>Meus Projetos...</White>
                                  </BorderLeft>
                                </BorderLeft>
                              </BorderLeft>
                            </BorderLeft>
                          </BorderLeft>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>32</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <BorderLeft>
                            <BorderLeft>
                              <BorderLeft>
                                <BorderLeft>
                                  <div>
                                    <White>{icons[11]}</White>
                                    <Blue>
                                      <i>NavLink</i>
                                      <White>{icons[10]}</White>
                                    </Blue>
                                  </div>
                                </BorderLeft>
                              </BorderLeft>
                            </BorderLeft>
                          </BorderLeft>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>33</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <BorderLeft>
                            <BorderLeft>
                              <BorderLeft>
                                <div>
                                  <White>{icons[11]}</White>
                                  <Blue>
                                    <i>CodeButton</i>
                                    <White>{icons[10]}</White>
                                  </Blue>
                                </div>
                              </BorderLeft>
                            </BorderLeft>
                          </BorderLeft>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>34</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <BorderLeft>
                            <BorderLeft>
                              <div>
                                <White>
                                  {icons[9]}
                                  <Pink>div</Pink>
                                </White>
                                <White>{icons[12]}</White>
                              </div>
                            </BorderLeft>
                          </BorderLeft>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>35</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <BorderLeft>
                            <div>
                              <White>{icons[11]}</White>
                              <Blue>
                                <i>Content</i>
                                <White>{icons[10]}</White>
                              </Blue>
                            </div>
                          </BorderLeft>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>36</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <BorderLeft>
                            <div>
                              <White>
                                {icons[9]}
                                <Pink>img</Pink>
                              </White>
                              <Green>
                                <i>src</i>
                                <Pink>=</Pink>
                                <Brown>{icons[0]}</Brown>
                                <Purple>programmer</Purple>
                                <Brown>{icons[1]}</Brown>
                              </Green>
                              <Green>
                                <i>alt</i>
                                <Pink>=</Pink>
                                <Yellow>"programmer img"</Yellow>
                              </Green>
                              <White>{icons[12]}</White>
                            </div>
                          </BorderLeft>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>37</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <div>
                            <White>{icons[11]}</White>
                            <Blue>
                              <i>Container</i>
                              <White>{icons[10]}</White>
                            </Blue>
                          </div>
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>38</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <div>
                          <Red>{icons[4]}</Red>
                          <White>:</White>
                          <Red>{icons[3]}</Red>
                        </div>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>39</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <BorderLeft>
                          <div>
                            <White>
                              {icons[9]}
                              <Blue>
                                <i>HomeCode</i>
                              </Blue>
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
                        </BorderLeft>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>40</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <BorderLeft>
                        <div>
                          <Red>{icons[4]}</Red>
                          <Yellow>{icons[1]}</Yellow>
                        </div>
                      </BorderLeft>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
              <section>
                <Number>41</Number>
                <Content>
                  <BorderLeft>
                    <BorderLeft>
                      <div>
                        <White>{icons[8]}</White>
                      </div>
                    </BorderLeft>
                  </BorderLeft>
                </Content>
              </section>
            </>
          )}
          <section>
            <Number>42</Number>
            <Content>
              <BorderLeft>
                <div>
                  <Orange>{icons[4]}</Orange>
                  <White>;</White>
                </div>
              </BorderLeft>
            </Content>
          </section>
        </>
      )}
      <section>
        <Number>43</Number>
        <Content>
          <div>
            <Yellow>{icons[1]}</Yellow>
            <White>;</White>
          </div>
        </Content>
      </section>
      <section>
        <Number>44</Number>
        <Content>
          <div>
            <br />
          </div>
        </Content>
      </section>
      <section>
        <Number>45</Number>
        <Content>
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
        </Content>
      </section>
      {const1 && (
        <>
          <section>
            <Number>46</Number>
            <Content>
              <BorderLeft>
                <div>
                  <Pink>display:</Pink>
                  <Purple>
                    grid<White>;</White>
                  </Purple>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>47</Number>
            <Content>
              <BorderLeft>
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
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>48</Number>
            <Content>
              <BorderLeft>
                <div>
                  <Pink>align-items:</Pink>
                  <Purple>
                    center<White>;</White>
                  </Purple>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>49</Number>
            <Content>
              <BorderLeft>
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
              </BorderLeft>
            </Content>
          </section>
        </>
      )}
      <section>
        <Number>50</Number>
        <Content>
          <div>
            <Yellow>
              `<White>;</White>
            </Yellow>
          </div>
        </Content>
      </section>
      <section>
        <Number>51</Number>
        <Content>
          <br />
        </Content>
      </section>
      <section>
        <Number>52</Number>
        <Content>
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
        </Content>
      </section>
      {const2 && (
        <>
          <section>
            <Number>53</Number>
            <Content>
              <BorderLeft>
                <div>
                  <Pink>padding:</Pink>
                  <Purple>
                    50<Pink>px</Pink>
                    <White>;</White>
                  </Purple>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>54</Number>
            <Content>
              <BorderLeft>
                <br />
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>55</Number>
            <Content>
              <BorderLeft>
                <div>
                  <White>{icons[10]}</White>
                  <Pink>p</Pink>
                  <Yellow>{icons[0]}</Yellow>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>56</Number>
            <Content>
              <BorderLeft>
                <BorderLeft>
                  <div>
                    <Pink>font-size:</Pink>
                    <Purple>
                      16<Pink>px</Pink>
                      <White>;</White>
                    </Purple>
                  </div>
                </BorderLeft>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>57</Number>
            <Content>
              <BorderLeft>
                <Yellow>{icons[1]}</Yellow>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>58</Number>
            <Content>
              <BorderLeft>
                <br />
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>59</Number>
            <Content>
              <BorderLeft>
                <div>
                  <White>{icons[10]}</White>
                  <Pink>div</Pink>
                  <Yellow>{icons[0]}</Yellow>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>60</Number>
            <Content>
              <BorderLeft>
                <BorderLeft>
                  <div>
                    <Pink>display:</Pink>
                    <Purple>
                      flex
                      <White>;</White>
                    </Purple>
                  </div>
                </BorderLeft>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>61</Number>
            <Content>
              <BorderLeft>
                <BorderLeft>
                  <div>
                    <Pink>alingn-items:</Pink>
                    <Purple>
                      center
                      <White>;</White>
                    </Purple>
                  </div>
                </BorderLeft>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>62</Number>
            <Content>
              <BorderLeft>
                <BorderLeft>
                  <div>
                    <Pink>gap:</Pink>
                    <Purple>
                      20<Pink>px</Pink>
                      <White>;</White>
                    </Purple>
                  </div>
                </BorderLeft>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>63</Number>
            <Content>
              <BorderLeft>
                <Yellow>{icons[1]}</Yellow>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>64</Number>
            <Content>
              <BorderLeft>
                <br />
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>65</Number>
            <Content>
              <BorderLeft>
                <div>
                  <White>{icons[10]}</White>
                  <Pink>h1</Pink>
                  <Yellow>{icons[0]}</Yellow>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>66</Number>
            <Content>
              <BorderLeft>
                <BorderLeft>
                  <div>
                    <Pink>font-size:</Pink>
                    <Purple>
                      2.5<Pink>rem</Pink>
                      <White>;</White>
                    </Purple>
                  </div>
                </BorderLeft>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>67</Number>
            <Content>
              <BorderLeft>
                <BorderLeft>
                  <div>
                    <Pink>margin-bottom:</Pink>
                    <Purple>
                      10<Pink>px</Pink>
                      <White>;</White>
                    </Purple>
                  </div>
                </BorderLeft>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>68</Number>
            <Content>
              <BorderLeft>
                <Yellow>{icons[1]}</Yellow>
              </BorderLeft>
            </Content>
          </section>
        </>
      )}
      <section>
        <Number>69</Number>
        <Content>
          <div>
            <Yellow>
              `<White>;</White>
            </Yellow>
          </div>
        </Content>
      </section>
      <section>
        <Number>70</Number>
        <Content>
          <br />
        </Content>
      </section>
      <section>
        <Number>71</Number>
        <Content>
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
        </Content>
      </section>
      {const3 && (
        <>
          <section>
            <Number>72</Number>
            <Content>
              <BorderLeft>
                <div>
                  <Pink>widht:</Pink>
                  <Purple>
                    200<Pink>px</Pink>
                    <White>;</White>
                  </Purple>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>73</Number>
            <Content>
              <BorderLeft>
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
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>74</Number>
            <Content>
              <BorderLeft>
                <div>
                  <Pink>margin-top:</Pink>
                  <Purple>
                    50<Pink>px</Pink>
                    <White>;</White>
                  </Purple>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>75</Number>
            <Content>
              <BorderLeft>
                <div>
                  <Pink>display:</Pink>
                  <Purple>
                    flex
                    <White>;</White>
                  </Purple>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>76</Number>
            <Content>
              <BorderLeft>
                <div>
                  <Pink>align-items:</Pink>
                  <Purple>
                    center
                    <White>;</White>
                  </Purple>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>77</Number>
            <Content>
              <BorderLeft>
                <div>
                  <Pink>gap:</Pink>
                  <Purple>
                    10<Pink>px</Pink>
                    <White>;</White>
                  </Purple>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>78</Number>
            <Content>
              <BorderLeft>
                <div>
                  <Pink>cursor:</Pink>
                  <Purple>
                    pointer
                    <White>;</White>
                  </Purple>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>79</Number>
            <Content>
              <BorderLeft>
                <div>
                  <Pink>border-radius:</Pink>
                  <Purple>
                    10<Pink>px</Pink>
                    <White>;</White>
                  </Purple>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>80</Number>
            <Content>
              <BorderLeft>
                <div>
                  <Pink>border:</Pink>
                  <Purple>
                    1<Pink>px</Pink>
                  </Purple>
                  <Purple>solid</Purple>
                  <White>#191d20;</White>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>81</Number>
            <Content>
              <BorderLeft>
                <div>
                  <Pink>background-color:</Pink>
                  <White>#1f2428;</White>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>82</Number>
            <Content>
              <BorderLeft>
                <div>
                  <Pink>transition:</Pink>
                  <Purple>
                    .3<Pink>s</Pink>
                    <White>;</White>
                  </Purple>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>83</Number>
            <Content>
              <BorderLeft>
                <br />
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>84</Number>
            <Content>
              <BorderLeft>
                <div>
                  <White>{icons[10]}</White>
                  <Pink>svg</Pink>
                  <Yellow>{icons[0]}</Yellow>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>85</Number>
            <Content>
              <BorderLeft>
                <BorderLeft>
                  <div>
                    <Pink>font-size:</Pink>
                    <Purple>
                      18<Pink>px</Pink>
                      <White>;</White>
                    </Purple>
                  </div>
                </BorderLeft>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>86</Number>
            <Content>
              <BorderLeft>
                <div>
                  <Yellow>{icons[1]}</Yellow>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>87</Number>
            <Content>
              <BorderLeft>
                <br />
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>88</Number>
            <Content>
              <BorderLeft>
                <div>
                  <White>{icons[10]}</White>
                  <Pink>a</Pink>
                  <Yellow>{icons[0]}</Yellow>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>89</Number>
            <Content>
              <BorderLeft>
                <BorderLeft>
                  <div>
                    <Pink>display:</Pink>
                    <Purple>
                      flex
                      <White>;</White>
                    </Purple>
                  </div>
                </BorderLeft>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>90</Number>
            <Content>
              <BorderLeft>
                <BorderLeft>
                  <div>
                    <Pink>align-items:</Pink>
                    <Purple>
                      center
                      <White>;</White>
                    </Purple>
                  </div>
                </BorderLeft>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>91</Number>
            <Content>
              <BorderLeft>
                <BorderLeft>
                  <div>
                    <Pink>gap:</Pink>
                    <Purple>
                      10<Pink>px</Pink>
                      <White>;</White>
                    </Purple>
                  </div>
                </BorderLeft>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>92</Number>
            <Content>
              <BorderLeft>
                <BorderLeft>
                  <div>
                    <Pink>color:</Pink>
                    <White>#fff;</White>
                  </div>
                </BorderLeft>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>93</Number>
            <Content>
              <BorderLeft>
                <div>
                  <Yellow>{icons[1]}</Yellow>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>94</Number>
            <Content>
              <BorderLeft>
                <br />
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>95</Number>
            <Content>
              <BorderLeft>
                <div>
                  <Pink>
                    <i>
                      : <Green>hover</Green>
                    </i>
                  </Pink>
                  <Yellow>{icons[0]}</Yellow>
                </div>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>96</Number>
            <Content>
              <BorderLeft>
                <BorderLeft>
                  <div>
                    <Pink>background-color:</Pink>
                    <White>#1f242870;</White>
                  </div>
                </BorderLeft>
              </BorderLeft>
            </Content>
          </section>
          <section>
            <Number>97</Number>
            <Content>
              <BorderLeft>
                <div>
                  <Yellow>{icons[1]}</Yellow>
                </div>
              </BorderLeft>
            </Content>
          </section>
        </>
      )}
      <section>
        <Number>98</Number>
        <Content>
          <div>
            <Yellow>
              `<White>;</White>
            </Yellow>
          </div>
        </Content>
      </section>
      <section>
        <Number>99</Number>
        <Content>
          <br />
        </Content>
      </section>
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
  padding: 0 30px;

  section {
    display: grid;
    grid-template-columns: 30px auto;
  }

  @media screen and (max-width: 648px) {
    padding: 5px 10px 15px;
    font-size: 12px;

    section {
      grid-template-columns: 30px auto;
      width: calc(100vw - 110px);
      white-space: nowrap;
    }
  }
`;

const Number = styled.div`
  padding-right: 25px;
  color: #5f43a1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  @media screen and (max-width: 648px) {
    padding-left: 10px;
  }
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
  @media screen and (max-width: 648px) {
    padding-right: 20px;
  }
`;

const BorderLeft = styled.div`
  border-left: 1px solid #7774746f;
  padding-left: 15px;
`;

const CodeButton = styled.div`
  position: fixed;
  top: 100px;
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

  @media screen and (max-width: 648px) {
    top: 90vh;
    right: 12px;
    width: 150px;
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
