import styled from "styled-components";

import { dbProjectCard } from "../db/dbProjectCard";
import { Carousel } from "./Carousel";

export const CardProjects = () => {
  
  const content = item => (
    <ContentGRid>
      <h2>{item.title}</h2>
      <p>{item.content}</p>
      <div>
        <a href={item.url} rel={item.rel} target={item.target}>
          {item.svg}
          {item.svgName}
        </a>
      </div>
    </ContentGRid>
  );

  return (
    <>
      {dbProjectCard.map((item) => {
        return (
          <ContainerGrid key={item.id}>
            {content(item)}
            <ImageGRid>
              <Carousel item={item} />
              <a href={item.url} rel={item.rel} target={item.target}>
                {item.svg}
                {item.svgName}
              </a>
            </ImageGRid>
          </ContainerGrid>
        );
      })}
    </>
  );
};

const ContainerGrid = styled.section`
  background-color: #1f2428;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;

  @media screen and (min-width: 648px) {
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    margin-bottom: 30px;
  }
`;

const ContentGRid = styled.article`
  display: grid;
  gap: 10px;
  padding: 10px;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: red;
  }

  p {
    font-size: 1.1rem;
  }

  div {
    display: none;
  }

  @media screen and (min-width: 648px) {
    text-align: start;
    padding: 30px;
    gap: 60px;

    div {
      display: inline;

      a {
        display: flex;
        color: orangered;
        padding: 10px 30px;
        text-decoration: none;
        cursor: pointer;
        gap: 10px;
        align-items: center;
        transition: 0.5s;

        :hover {
          border-radius: 10px;
          background-color: #171717;
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

const ImageGRid = styled.article`
  a {
    display: flex;
    justify-content: center;
    color: orangered;
    padding: 15px 0;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    gap: 10px;
    align-items: center;
    transition: 0.5s;

    :hover {
      border-radius: 10px;
      background-color: #171717;
    }

    svg {
      display: none;
    }
  }

  @media screen and (min-width: 648px) {
    a {
      display: none;
    }

    svg {
      display: inline;
      width: 20px;
      height: 20px;
    }
  }
`;
