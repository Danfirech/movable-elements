import React from "react";
import styled from "styled-components";
import Draggable from "react-draggable"; // The default
import Pic1 from "../Media/Pic1.jpg";

const Container = styled.div`
  height: 3000px;
  width: 100%;
  background-color: white;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Picture1 = styled.div`
  height: 200px;
  width: 350px;
  position: fixed;
  background-image: url(${Pic1});
  background-size: cover;
  transform: rotate(20deg);

  .transform {
    transform: rotate(20deg);
    margin-top: 700px;
    margin-right: 400px;
  }
`;

const MovableBox2 = styled.div`
  height: 100px;
  width: 200px;
  background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovableBox3 = styled.div`
  height: 140px;
  width: 130px;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovableBox4 = styled.div`
  height: 200px;
  width: 200px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Test = () => {
  return (
    <div>
      <Container>
        <Draggable>
          <div className="transform">
            <Picture1 />
          </div>
        </Draggable>
        <Draggable>
          <MovableBox2>
            <h5>Move Me Spencer!</h5>
          </MovableBox2>
        </Draggable>
        <Draggable>
          <MovableBox3>
            <h5>Move Me Spencer!</h5>
          </MovableBox3>
        </Draggable>
        <Draggable>
          <MovableBox4>
            <h5>Move Me Spencer!</h5>
          </MovableBox4>
        </Draggable>
      </Container>
    </div>
  );
};

export default Test;
