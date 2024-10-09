import styled from "styled-components";
import { mytheme } from "../styles/Theme.styled";

type ParagraphPropsType = {
  fontSize?: string
}

export const Paragraph = styled.p<ParagraphPropsType>`
  color: ${mytheme.colors.gray.dark};
  font-size: ${props => props.fontSize || "1rem"};
`;