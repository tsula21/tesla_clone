import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ title, description, image, rightBtn, leftBtn, icon }) {
  return (
    <Wrap image={image}>
      <Fade bottom cascade>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <ButtonGroup>
          <Fade left>
            <LeftButton>{leftBtn}</LeftButton>
          </Fade>
          <Fade right>{rightBtn && <RightButton>{rightBtn}</RightButton>}</Fade>
        </ButtonGroup>
        {icon == "true"
          ? // <DownArrow src="/images/down-arrow.svg" />
            ""
          : ""}
      </Buttons>
    </Wrap>
    // 1:46:10
  );
}

export default Section;

const Wrap = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(../images/model-s.jpg);
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.image}")`};
  @media (max-width: 768px) {
    height: 70vh;
  }
  @media (max-width: 468px) {
    height: 60vh;
  }
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  font-weight: 600;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: #000;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 2s;
  cursor: pointer;
  overflow-x: hidden;
`;
