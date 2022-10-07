import styled from "styled-components";

import { BiGitBranch, BiCloudUpload, BiCodeCurly, BiCheckDouble } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiAlertTriangle } from "react-icons/fi";
import { RiSignalTowerFill } from "react-icons/ri";
import { VscRemote } from "react-icons/vsc";

export const Footer = () => {
  return (
    <Container>
      <div>
        <span>
          <VscRemote />
          <p>WSL: Ubuntu</p>
        </span>
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
          <BiCheckDouble />
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
  padding-right: 10px;
  height: 25px;
  font-size: 14px;
  background: #1f2428;
  border-top: 1px solid #191d20;
  overflow-x: auto;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
    height: 100%;

    > span {
      height: 100%;
      background-color: #a74fa7;
      color: black;
      font-size: 12px;
      display: flex;
      gap: 5px;
      align-items: center;
      padding: 0 10px;
    }

    > div {
      padding: 0 5px;
      :hover {
        background-color: #30363d;
      }
    }
  }
  @media screen and (max-width: 648px) {
    white-space: nowrap;
  }
`;
