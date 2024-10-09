import styled from "styled-components";
import { mytheme } from "../styles/Theme.styled";

type HeaderPropsType = {
  fontSize?: string
}

export const Header = styled.h1<HeaderPropsType>`
  color: ${mytheme.colors.fourth};
  font-size: ${props => props.fontSize || "2rem"};
`;