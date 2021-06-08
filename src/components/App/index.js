import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import sun from "../../images/icons/icon-sun.svg";
import cross from  "../../images/icons/icon-cross.svg"
import bgDarkMobile from "../../images/bg-mobile-dark.jpg";

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 50px;
  position: relative;
  z-index: 1;
  &:before {
    content: "";
    display: block;
    width: 100%;
    max-height: 200px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: url(${bgDarkMobile}) no-repeat;
    z-index: -1;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const TitleWrapper = styled.h1`
  text-transform: uppercase;
  letter-spacing: 10px;
  color: #fafafa;
  font-size: 32px;
`;

const ThemeSwitchButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
`;

const TaskWrapper = styled.div`
  display: block;
`;

const InputWrapperContainer = styled.div`
  background: ${props => props.veryDarkDesaturatedBlue};
  border-radius: 5px;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0 15px;
`;

const CheckBoxWrapper = styled.div`
  width: 20px;
  height: 19px;
  border-radius: 50%;
  border: 1px solid ${props => props.veryDarkGrayishBlue};
  margin-right: 10px;
`;

const InputWrapper = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  color: #e4e5f1;
  outline: none;
`;

const CrossWrapper = styled.div`
  color: ${props => props.veryDarkGrayishBlue};
  height: 20px;
  width: 20px;
`;

const App = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  const selectedTheme = isDarkMode ? theme.dark : theme.light;

  return (
    <MainWrapper>
      <div className="container">

        <HeaderWrapper className="header">
          <TitleWrapper className="title">todo</TitleWrapper>

          <ThemeSwitchButton
            className="switch-theme"
            onClick={() => {
              setDarkMode(!isDarkMode)
            }}
          >
            <img src={sun} alt="Sun"/>
          </ThemeSwitchButton>
        </HeaderWrapper>

        <TaskWrapper>
          <InputWrapperContainer
            veryDarkDesaturatedBlue={selectedTheme.veryDarkDesaturatedBlue}
          >
            <CheckBoxWrapper veryDarkGrayishBlue={selectedTheme.veryDarkGrayishBlue} />
            <InputWrapper type="text" placeholder="Create a new todo..." />
            <CrossWrapper
              veryDarkGrayishBlue={selectedTheme.veryDarkGrayishBlue}
            >
              <img src={cross} alt="Cross"/>
            </CrossWrapper>
          </InputWrapperContainer>
        </TaskWrapper>
      </div>
    </MainWrapper>
  )
}

export default App