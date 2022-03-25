import styled from 'styled-components';

export const RecipeContainer = styled.div`
  //background-color: #28381cbf;
  background-color: #1c2e38df;
  width: 75%;
  height: 90%;
  display: flex;
  flex-direction: row;
  //justify-content: space-around;
  align-items: center;
  border-radius: 50px;
  box-shadow: 10px 5px 5px #1c1d381f, 10px 10px 10px #38261cff;
`;

export const ImageContainer = styled.div`
  //display: flex;
  //justify-content: center;
  //align-items: center;
  padding: 30px 0px 30px 0px;
  margin: 20px 100px 20px 50px;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 30px;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const RecipeTitle = styled.h3`
  color: #ffffff;
  //color: #e29971;
  text-align: center;
  padding-top: 40px;
  font-family: monospace;
  font-size: 20px;
`;

export const DietsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 10px;
`;

export const Diet = styled.p`
  color: #28381c;
  color: #624331;
  color: #e29971;
  margin: 0;
  font-family: monospace;
  padding: 30px 15px 0 0;
  font-size: 15px;
`;
