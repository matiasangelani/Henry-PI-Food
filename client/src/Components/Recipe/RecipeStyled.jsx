import styled from 'styled-components';

export const RecipeContainer = styled.div`
  background-color: #103141df;
  width: 75%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 50px;
  box-shadow: 10px 5px 5px #1c1d381f, 10px 10px 10px #38261cff;
`;

export const ImageContainer = styled.div`
  padding: 30px 0px 30px 0px;
  margin: 20px 100px 20px 50px;
  color: white;
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
  color: #e29971;
  margin: 0;
  font-family: monospace;
  padding: 30px 15px 0 0;
  font-size: 15px;
`;
