import React from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import Pic1 from "../Media/Pic1.jpg";
import Pic2 from "../Media/Pic2.jpg";
import Pic3 from "../Media/Pic3.jpg";
import Pic4 from "../Media/Pic4.jpg";
import Pic5 from "../Media/Pic5.jpg";
import Pic6 from "../Media/Pic6.jpg";
import Pic7 from "../Media/Pic7.jpg";
import Pic8 from "../Media/Pic8.jpg";
import Pic9 from "../Media/Pic9.jpg";
import Pic10 from "../Media/Pic10.jpg";

const Header = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  position: fixed;
  z-index: 99;

  .left {
    height: 100%;
    width: 50%;
    background: none;
    display: flex;
    align-items: center;
    margin-left: 50px;
    font-size: 40px;
    @media only screen and (max-width: 600px) {
      font-size: 15px;
    }
  }

  .right {
    height: 100%;
    width: 35%;
    background: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 40px;
    @media only screen and (max-width: 600px) {
      font-size: 15px;
      width: 50%;
      margin-right: 15px;
    }
  }
`;

const Container = styled.div`
  height: 3000px;
  width: 100%;
  background-color: white;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    height: 1300px;
  }
`;

const Picture1 = styled.div`
  height: 400px;
  width: 750px;
  background-image: url(${Pic1});
  background-size: cover;
  transform: rotate(20deg);
  position: absolute;
  z-index: 1;
  margin-left: 400px;
  margin-top: 900px;

  @media only screen and (max-width: 600px) {
    height: 100px;
    width: 200px;
    margin-left: 50px;
    margin-top: 200px;
  }
`;

const Picture2 = styled.div`
  height: 400px;
  width: 750px;
  background-image: url(${Pic2});
  background-size: cover;
  transform: rotate(-4deg);
  position: absolute;
  z-index: 2;
  margin-left: 1700px;
  margin-top: 2000px;

  @media only screen and (max-width: 600px) {
    height: 100px;
    width: 200px;
    margin-left: 100px;
    margin-top: 500px;
  }
`;

const Picture3 = styled.div`
  height: 400px;
  width: 750px;
  background-image: url(${Pic3});
  background-size: cover;
  transform: rotate(0deg);
  position: absolute;
  margin-left: -100px;
  margin-top: 1200px;
  z-index: 3;

  @media only screen and (max-width: 600px) {
    height: 100px;
    width: 200px;
    margin-left: 200px;
    margin-top: 300px;
  }
`;

const Picture4 = styled.div`
  height: 400px;
  width: 750px;
  background-image: url(${Pic4});
  background-size: cover;
  transform: rotate(-10deg);
  position: absolute;
  margin-left: 400px;
  margin-top: 100px;
  z-index: 4;

  @media only screen and (max-width: 600px) {
    height: 100px;
    width: 200px;
    margin-left: 20px;
    margin-top: 1000px;
  }
`;

const Picture5 = styled.div`
  height: 400px;
  width: 750px;
  background-image: url(${Pic5});
  background-size: cover;
  transform: rotate(-10deg);
  position: absolute;
  margin-left: 900px;
  margin-top: 100px;
  z-index: 4;

  @media only screen and (max-width: 600px) {
    height: 100px;
    width: 200px;
    margin-left: 50px;
    margin-top: 200px;
  }
`;

const Picture6 = styled.div`
  height: 400px;
  width: 750px;
  background-image: url(${Pic6});
  background-size: cover;
  transform: rotate(-10deg);
  position: absolute;
  margin-left: 1400px;
  margin-top: 1100px;
  z-index: 4;

  @media only screen and (max-width: 600px) {
    height: 100px;
    width: 200px;
    margin-left: 10px;
    margin-top: 600px;
  }
`;

const Picture7 = styled.div`
  height: 400px;
  width: 750px;
  background-image: url(${Pic7});
  background-size: cover;
  transform: rotate(-10deg);
  position: absolute;
  margin-left: 1000px;
  margin-top: 800px;
  z-index: 4;

  @media only screen and (max-width: 600px) {
    height: 100px;
    width: 200px;
    margin-left: 90px;
    margin-top: 40px;
  }
`;

const Picture8 = styled.div`
  height: 400px;
  width: 750px;
  background-image: url(${Pic8});
  background-size: cover;
  transform: rotate(10deg);
  position: absolute;
  margin-left: 700px;
  margin-top: 2600px;
  z-index: 4;

  @media only screen and (max-width: 600px) {
    height: 100px;
    width: 150px;
    margin-left: 0px;
    margin-top: 0px;
  }
`;

const Picture9 = styled.div`
  height: 400px;
  width: 750px;
  background-image: url(${Pic9});
  background-size: cover;
  transform: rotate(30deg);
  position: absolute;
  margin-left: 1400px;
  margin-top: 1500px;
  z-index: 4;

  @media only screen and (max-width: 600px) {
    height: 100px;
    width: 200px;
    margin-left: 100px;
    margin-top: 1100px;
  }
`;

const Picture10 = styled.div`
  height: 400px;
  width: 750px;
  background-image: url(${Pic10});
  background-size: cover;
  transform: rotate(-10deg);
  position: absolute;
  margin-left: 400px;
  margin-top: 2100px;
  z-index: 4;

  @media only screen and (max-width: 600px) {
    height: 100px;
    width: 250px;
    margin-left: 30px;
    margin-top: 70px;
  }
`;

const Test = () => {
  return (
    <div>
      <Header>
        <div className="left">
          <div>Logo?</div>
        </div>
        <div className="right">
          <div>Insta</div>
          <div>Social</div>
          <div>Bio</div>
        </div>
      </Header>
      <Container>
        <Draggable>
          <div>
            <Picture1 />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <Picture2 />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <Picture3 />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <Picture4 />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <Picture5 />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <Picture6 />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <Picture7 />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <Picture8 />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <Picture9 />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <Picture10 />
          </div>
        </Draggable>
      </Container>
    </div>
  );
};

export default Test;
