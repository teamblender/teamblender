import React from "react";
import styled from "styled-components";
import useStage from "useStage";

const Box = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Top = styled.div`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 15px;
`;

const Bottom = styled.div`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.4);
`;

function Contact() {
  const stage = useStage();
  return stage === 0 ? (
    ""
  ) : (
    <Box>
      <Top className="dD">- contact -</Top>
      <Bottom>blender.cowork@gmail.com</Bottom>
    </Box>
  );
}

export default Contact;
