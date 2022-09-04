import React from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: antiquewhite;
  position: relative;
`;

const ArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
`;

const Slider = () => {
  return (
    <Container>
      <ArrowContainer direction="left">
        <ArrowLeftOutlinedIcon />
      </ArrowContainer>
      <ArrowContainer direction="right">
        <ArrowRightOutlinedIcon />
      </ArrowContainer>
    </Container>
  );
};

export default Slider;
