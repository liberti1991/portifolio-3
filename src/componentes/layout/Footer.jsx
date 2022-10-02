import styled from "styled-components";

import { BiGitBranch, BiCloudUpload, BiCodeCurly } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiAlertTriangle } from "react-icons/fi";
import { RiSignalTowerFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <Container>
      <div>
        <div>
          <BiGitBranch />
          <small>Master*</small>
        </div>
        <div>
          <BiCloudUpload />
        </div>
        <div>
          <AiOutlineCloseCircle />
          <small>0</small>
          <FiAlertTriangle />
          <small>0</small>
        </div>
        <div>
          <RiSignalTowerFill />
          <small>Shared</small>
        </div>
      </div>
      <div>
        <div>
          <small>Espaços: 2</small>
        </div>
        <div>
          <small>UTF-8</small>
        </div>
        <div>
          <BiCodeCurly />
          <small>JavaSripit React</small>
        </div>
        <div>
          <small>Reload</small>
        </div>
        <div>
          <small>Prettier</small>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 30px;
  font-size: 14px;
  background: #1f2428;

  div {
    display: flex;
    align-items: center;
    gap: 5px;

    > div {
      margin: 5px;
    }
  }
`;
