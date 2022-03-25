import styled from 'styled-components';
import { ButtonCreate } from '../Home/HomeStyled';

export const ContainerForm = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  position: relative;
  display: grid;
  grid-template-rows: 30px 100px 30px 30px 100px 200px 50px;
  gap: 40px;
  width: 25%;
  height: 100%;
  justify-content: center;
  align-content: center;
`;

export const Input = styled.input`
  background-color: #1c2e38;
  border: 2px solid #315162;
  border-radius: 10px;
  font-size: 15px;
  padding-left: 10px;
  width: 400px;
`;

export const InputDiet = styled.input``;

export const LabelDiet = styled.label`
  color: #ffffff;
  padding-left: 10px;
`;

export const TextArea = styled.textarea`
  background-color: #1c2e38;
  border: 2px solid #315162;
  border-radius: 10px;
  padding-top: 10px;
  padding-left: 10px;
`;

export const Submit = styled.button`
  align-self: center;
  justify-self: center;
  font-family: monospace;
  color: #fff;
  //background-color: #2c5282;
  //background-color: #28381c;
  background-color: #1c2e38;
  border: none;
  display: block;
  width: 200px;
  text-align: center;
  float: left;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
  &:hover {
    //background-color: #2a4365;
    //background-color: #26291c;
    background-color: #315162;
    cursor: pointer;
  }
`;

export const DietsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(4, 50px);
`;

export const DivDiet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
