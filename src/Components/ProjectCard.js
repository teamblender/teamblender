import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

const ProjCard = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  border: solid 2px rgba(255, 255, 255, 0.1);
  margin-bottom: 10px;
  :hover {
    border: solid 2px rgba(255, 255, 255, 1);
    transition: 0.3s ease-in-out;
  }
`;

const Top = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const ImgBox = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 180px;
  margin-right: 10px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Img = styled.img`
  height: 160px;
  width: 160px;
`;

const TextBox = styled.div`
  width: calc(100% - 190px);
  background-color: rgba(0, 0, 0, 0.5);
  padding-left: 30px;
  padding-right: 30px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
  }
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 12px;
`;

const Desc = styled.span`
  font-size: 18px;
  opacity: 0.4;
  margin-bottom: 8px;
`;

const DateBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Date = styled.span`
  font-size: 14px;
  opacity: 0.3;
  margin-bottom: ${(props) => (props.condition ? "20px" : "0px")};
`;

const Now = styled.span`
  display: ${(props) => (props.condition ? "none" : "flex")};
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-left: 5px;
  background-color: red;
  animation-name: now;
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Button = styled.div`
  margin-right: 10px;
  height: 40px;
  color: rgba(255, 255, 255, 0.3);
  border: solid 0.5px rgba(255, 255, 255, 0.3);
  background-color: rgba(0, 0, 0, 1);
  transition: 0.3s ease-in-out;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  :hover {
    color: rgba(255, 255, 255, 1);
    border: solid 1px rgba(255, 255, 255, 1);
  }
`;

const Bottom = styled.div`
  height: 100px;
  width: 100%;
  padding: 0 10px 10px 10px;
  margin: 0;
  position: relative;
`;

const FloatBox = styled.div`
  position: absolute;
  top: -10px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Float = styled.div`
  color: rgba(255, 255, 255, 0.3);
  font-size: 10px;
  /* position: absolute; */
  background-color: rgba(14, 14, 14, 1);
  border: 1px solid rgba(21, 21, 21, 1);
  /* left: 25px;
  top: -10px; */
  width: 70px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const LeftLine = styled.div`
  margin-right: 5px;
  height: 1.5px;
  width: 10px;
  background-color: rgba(255, 255, 255, 0.1);
`;

const RightLine = styled.div`
  margin-left: 5px;
  height: 1.5px;
  width: calc(100% - 110px);
  background-color: rgba(255, 255, 255, 0.1);
`;

const MessageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 90px;
  background-color: rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 600px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const BotImgBox = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  margin-right: 5px;
  justify-content: center;
  margin-top: ${(props) => (props.mobile ? "10px" : "0px")};
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 50px;
    height: 50px;
    margin-right: 8px;
  }
`;

const BotImg = styled.img`
  width: 50px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  @media screen and (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

const CommentBox = styled.div`
  display: flex;
  margin-top: ${(props) => (props.mobile ? "10px" : "0px")};
  justify-content: center;
  flex-direction: column;
`;

const CommentTop = styled.span`
  font-size: 18px;
  margin-bottom: 6px;
`;

const CommentBottom = styled.span`
  font-size: 16px;
  opacity: 0.4;
`;

const ProjectCard = ({
  selected,
  condition,
  img,
  title,
  desc,
  date,
  link,
  profile,
  position,
  comment,
}) => {
  function openInNewTab(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <ProjCard>
      <Top>
        <ImgBox>
          <Img src={img}></Img>
        </ImgBox>
        <TextBox>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
          <DateBox>
            <Date condition={condition}>{date}</Date>
            <Now condition={condition}></Now>
          </DateBox>
          {condition ? (
            <ButtonBox>
              {link.map((value, index) => {
                return (
                  <Button key={index} onClick={() => openInNewTab(value.url)}>
                    {value.ch}
                  </Button>
                );
              })}
            </ButtonBox>
          ) : (
            ""
          )}
        </TextBox>
      </Top>
      {condition ? (
        <Bottom>
          {isMobile ? (
            <FloatBox>
              <LeftLine></LeftLine>
              <Float>Comment</Float>
              <RightLine></RightLine>
            </FloatBox>
          ) : (
            ""
          )}
          <MessageBox>
            <BotImgBox mobile={isMobile}>
              <BotImg src={profile}></BotImg>
            </BotImgBox>
            <CommentBox mobile={isMobile}>
              <CommentTop>{comment}</CommentTop>
              <CommentBottom>
                {selected}, {position}
              </CommentBottom>
            </CommentBox>
          </MessageBox>
        </Bottom>
      ) : (
        ""
      )}
    </ProjCard>
  );
};

export default ProjectCard;
