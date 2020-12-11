import React from "react";
import styled from "styled-components";
import ProjCard from "Components/ProjectCard";
import ProjectList from "Data/ProjectList";
import useStage from "useStage";
import useSelected from "useSelected";

const Box = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const WhosBox = styled.div`
  width: 300px;
  background-color: rgba(0, 0, 0, 0.5);
  border: solid 1px rgba(255, 255, 255, 0.2);
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Whos = styled.span`
  opacity: 0.4;
`;

const Project = () => {
  const stage = useStage();
  const selected = useSelected();
  return stage === 0 ? (
    ""
  ) : (
    <Box className="dD">
      <WhosBox>
        <Whos>{selected}'s Project</Whos>
      </WhosBox>
      {ProjectList.map((project, index) => {
        return project.person[selected] ? (
          project.condition ? (
            <ProjCard
              selected={selected}
              key={index}
              condition={project.condition}
              img={project.img}
              title={project.title}
              desc={project.desc}
              date={project.date}
              link={project.link ? project.link : null}
              profile={project.person[selected][0]}
              position={project.person[selected][1]}
              comment={project.person[selected][2]}
            ></ProjCard>
          ) : (
            <ProjCard
              selected={selected}
              key={index}
              img={project.img}
              title={project.title}
              desc={project.desc}
              date={project.date}
            ></ProjCard>
          )
        ) : (
          ""
        );
      })}
    </Box>
  );
};

export default Project;
