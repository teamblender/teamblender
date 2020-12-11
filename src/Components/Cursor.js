import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import useStage from "useStage";
import { isMobile } from "react-device-detect";

const Round = styled.div`
  position: fixed;
  width: 100px;
  height: 100px;
  transform: ${(props) => (props.stage === 0 ? "scale(1)" : "scale(0.15)")};
  border-radius: 50px;
  mix-blend-mode: ${(props) => (props.stage === 0 ? "difference" : "")};
  background-color: white;
  display: flex;
  justify-content: center;
  pointer-events: none;
  align-items: center;
  transition: transform 0.5s;
  z-index: 2000;
`;

const Enter = styled.span`
  color: black;
  font-weight: 700;
`;

const useCursor = () => {
  const cursor = useRef();
  const setPosition = (e) => {
    if (cursor.current) {
      cursor.current.style.top = e.y - cursor.current.offsetHeight / 2 + "px";
      cursor.current.style.left = e.x - cursor.current.offsetWidth / 2 + "px";
    } else {
      return;
    }
  };
  useEffect(() => {
    window.addEventListener("mousemove", setPosition);
    return () => {
      window.removeEventListener("mousemove", setPosition);
    };
  }, []);
  return cursor;
};

const Cursor = () => {
  const cursor = useCursor();
  const stage = useStage();
  return isMobile ? (
    ""
  ) : (
    <Round ref={cursor} stage={stage}>
      {stage === 0 ? <Enter>ENTER</Enter> : ""}
    </Round>
  );
};

export default Cursor;
