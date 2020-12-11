import React from "react";
import styled from "styled-components";
import store from "store";

const MemCard = styled.div`
  height: 120px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 20px 0px 20px;
`;

const MemImgBox = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  border: solid 1.5px
    ${(props) =>
      props.selected ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.2)"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const MemImg = styled.img`
  opacity: ${(props) => (props.selected ? "1" : "0.5")};
  transition: 0.3s ease-in-out;
  width: 60px;
  height: 60px;
`;

const MemName = styled.span`
  opacity: ${(props) => (props.selected ? "1" : "0.5")};
  transition: 0.3s ease-in-out;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const MemPosition = styled.span`
  text-align: center;
  font-size: 16px;
  font-weight: 200;
  opacity: 0.5;
`;

const MemberCard = ({ selected, profile, name, position }) => {
  return (
    <MemCard onClick={() => store.dispatch({ type: "select", selected: name })}>
      <MemImgBox selected={selected === name ? true : false}>
        <MemImg
          selected={selected === name ? true : false}
          src={profile}
        ></MemImg>
      </MemImgBox>
      <MemName selected={selected === name ? true : false}>{name}</MemName>
      <MemPosition>{position}</MemPosition>
    </MemCard>
  );
};

export default MemberCard;
