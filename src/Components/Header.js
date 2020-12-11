import React from "react";
import styled from "styled-components";
import logo_big from "Img/logo_big.png";
import useStage from "useStage";
import store from "store";
import { isMobile } from "react-device-detect";

const Box = styled.div`
  z-index: 1;
  display: flex;
  width: 100%;
  height: ${(props) => (props.stage === 0 ? "100vh" : "200px")};
  transition: 1.5s ease-in-out;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleImg = styled.img`
  transition: 1s ease-in-out;
  transition-delay: 0.5s;
  transform: ${(props) => (props.stage === 0 ? "scale(1)" : "scale(0.8)")};
  z-index: 1;
  margin-top: ${(props) => (props.stage === 0 ? "0px" : "40px")};
  margin-bottom: ${(props) => (props.stage === 0 ? "10px" : "0px")};
  height: 60px;
`;

const Desc = styled.div`
  z-index: 1;
  font-size: 16px;
  line-height: 24px;
  font-weight: 200;
  text-align: center;
  transition: 1s ease-in-out;
  opacity: ${(props) => (props.stage === 0 ? "1" : "0")};
`;

function Header() {
  const stage = useStage();
  return (
    <Box stage={stage} className="dD">
      <TitleImg
        stage={stage}
        src={logo_big}
        onClick={() =>
          !isMobile && stage === 1 ? store.dispatch({ type: "toStage0" }) : ""
        }
      ></TitleImg>
      <Desc stage={stage}>Side Project Team</Desc>
    </Box>
  );
}

export default Header;
