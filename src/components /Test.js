import React from "react";
import styled from "styled-components";
import Draggable from "react-draggable"; // The default
import { DraggableCore } from "react-draggable"; // <DraggableCore>

const Container = styled.div`
  height: 1000px;
  width: 100%;
  background-color: pink;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const MovableBox = styled.div`
  height: 100px;
  width: 120px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
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
          <MovableBox>
            <h5>Move Me Spencer!</h5>
          </MovableBox>
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
