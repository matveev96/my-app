import styled, { css } from "styled-components";
import { mytheme } from "../styles/Theme.styled";
import { url } from "inspector";

type BoxPropsType = {
  BoxType: "little" | "big";
  image?: string;
};

export const Box = styled.div<BoxPropsType>`
  border: 1px solid ${mytheme.colors.gray.light};
  border-radius: 20px;

  ${(props) =>
    props.BoxType === "little" &&
    css<BoxPropsType>`
      height: 300px;
      width: 100%;
      background-image: url(${(props) => props.image});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    `}

  ${(props) =>
    props.BoxType === "big" &&
    css<BoxPropsType>`
      height: 600px;
      width: 600px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      box-shadow: 0px 0px 10px 5px ${mytheme.colors.gray.dark};
    `}

  @media ${mytheme.media.tablet} {
    flex-direction: column;
  }
`;
