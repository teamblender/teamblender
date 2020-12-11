import React from "react";
import styled from "styled-components";
import MemCard from "Components/MemberCard";
import MemberList from "Data/MemberList";
import useStage from "useStage";
import useSelected from "useSelected";

const Box = styled.div`
  height: 200px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const TopArea = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  height: 1.5px;
  max-width: 270px;
  width: calc((100% - 180px) / 2);
  background-color: rgba(255, 255, 255, 0.2);
  @media screen and (max-width: 800px) {
    width: calc((100% - 200px) / 2);
  }
`;

const Title = styled.span`
  font-size: 16px;
  margin: 0px;
  opacity: 0.2;
  font-weight: 400;
  margin-right: 10px;
  margin-left: 10px;
`;

const BotArea = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
  @media screen and (max-width: 800px) {
    justify-content: flex-start;
  }
`;

const Member = () => {
  const stage = useStage();
  const selected = useSelected();
  return stage === 0 ? (
    ""
  ) : (
    <Box className="dD">
      <TopArea>
        <Line></Line>
        <Title>Member & Project</Title>
        <Line></Line>
      </TopArea>
      <BotArea>
        {MemberList.map((member, index) => {
          return (
            <MemCard
              selected={selected}
              key={index}
              profile={member.profile}
              name={member.name}
              position={member.position}
            ></MemCard>
          );
        })}
      </BotArea>
    </Box>
  );
};

export default Member;
