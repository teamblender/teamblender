import React from "react";
import styled from "styled-components";
import store from "store";
import useStage from "useStage";

const Cont = styled.div`
  position: ${(props) => (props.stage === 0 ? "fixed" : "relative")};
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: ${(props) => (props.stage === 0 ? "hidden" : "")};
`;

const Box = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Container({ children, pointer }) {
  const stage = useStage();
  return (
    <Cont
      pointer={pointer}
      stage={stage}
      onClick={() => (stage === 0 ? store.dispatch({ type: "toStage1" }) : "")}
    >
      <Box>{children}</Box>
    </Cont>
  );
}

export default Container;
