import styled, { css } from "styled-components";
import { MyAnimation } from "../styles/animations/Animations";
import { mytheme } from "../styles/Theme.styled";

type StyledBtnPropsType = {
  color?: string;
  fontSize?: string;
  btnType: "active" | "nonactive";
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border-radius: 10px;
  width: 150px;
  height: 50px;
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: bold;

  //active
  ${(props) =>
    props.btnType === "active" &&
    css<StyledBtnPropsType>`
      border: 2px solid ${mytheme.colors.primary};
      background-color: ${mytheme.colors.primary};
      color: ${mytheme.colors.third};

      &:hover {
        color: ${mytheme.colors.primary};
        background-color: ${mytheme.colors.secondary};
      }
    `}

  //nonactive
  ${(props) =>
    props.btnType === "nonactive" &&
    css<StyledBtnPropsType>`
      background-color: ${(props) => props.color || "white"};
      border: 2px solid ${mytheme.colors.primary};
      color: ${mytheme.colors.primary};

      &:hover {
        color: ${mytheme.colors.third};
        background-color: ${mytheme.colors.primary};
      }
    `}

`;
