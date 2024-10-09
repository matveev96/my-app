import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { StyledBtn } from "./components/Button.styled";
import { mytheme } from "./styles/Theme.styled";
import { Box } from "./components/Box.styled";
import { ButtonBox } from "./components/ButtonBox.styled";
import { Header } from "./components/Header.styled";
import { Paragraph } from "./components/Paragraph.styled";

function App() {
  return (
    <div className="App">
      <Box BoxType="big">
        <Box BoxType="little" image="https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?t=st=1727881845~exp=1727885445~hmac=2d900698440ec34aff2ab35ba3e91b8a81e69633fa48781c71c3859f4336a102&w=826"></Box>
        <Header fontSize="2.2rem">Headline</Header>
        <Paragraph fontSize="1.6rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, minima. Provident eveniet iure illum esse, molestias consectetur sint.</Paragraph>
        <ButtonBox>
          <StyledBtn  btnType={"active"}>See more</StyledBtn>
          <StyledBtn  btnType={"nonactive"}>Save</StyledBtn>
        </ButtonBox>
        
      </Box>
    </div>
  );
}

export default App;


