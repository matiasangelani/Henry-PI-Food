import styled from 'styled-components';

export const ContainerForm = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  position: relative;
  display: grid;
  grid-template-rows: 80px 100px 80px 80px 100px 200px 50px;
  gap: 40px;
  width: 25%;
  height: 100%;
  justify-content: center;
  align-content: center;
  font-family: monospace;
`;

export const Input = styled.input`
  color: #ffffff;
  background-color: #103141;
  border: 2px solid #315162;
  border-radius: 10px;
  font-size: 17px;
  font-family: monospace;
  padding-left: 10px;
  width: 400px;
  height: 30px;
  caret-color: #ffffff;
  &:focus {
    outline: none;
  }
`;

export const InputDiet = styled.input``;

export const LabelDiet = styled.label`
  color: #ffffff;
  padding-left: 10px;
`;

export const TextArea = styled.textarea`
  color: #ffffff;
  font-family: monospace;
  font-size: 17px;
  background-color: #103141;
  border: 2px solid #315162;
  border-radius: 10px;
  padding-top: 10px;
  padding-left: 10px;
  caret-color: #ffffff;
  &:focus {
    outline: none;
  }
`;

export const Submit = styled.button`
  align-self: center;
  justify-self: center;
  font-family: monospace;
  color: #fff;
  background-color: #103141;
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
    background-color: #315162;
    cursor: pointer;
  }
  &:disabled {
    background-color: #666666df;
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

export const ErrorContainer = styled.div`
  color: #ffffff;
`;

export const InputError = styled.p`
  color: #df0000;
  padding-left: 20px;
  margin: 20px 0 0 0;
  font-size: 15px;
`;
