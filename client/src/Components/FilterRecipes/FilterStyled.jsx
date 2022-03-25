import styled from 'styled-components';

export const ConteinerFilters = styled.div`
  display: grid;
  grid-template-rows: repeat(11, 50px);
  gap: 10px;
`;

export const ContainerLabelInput = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  /* width: 50px;
  height: 25px; */
`;

export const LabelFilter = styled.label`
  //class=switch
  //color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 25px;
  background-color: #bebebe;
  border-radius: 15px;
  z-index: -2;
  &::after {
    content: '';
    display: block;
    background: #ffffff;
    width: 18px;
    height: 18px;
    margin: 3px;
    border-radius: 50%;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const InputFilter = styled.input`
  z-index: -1;
  opacity: 0;
  border-radius: 50%;
  width: 50px;
  height: 25px;
  cursor: pointer;
  &:checked + ${LabelFilter} {
    //background-color: #2c5282;
    //background-color: #28381c;
    background-color: #1c2e38;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 28px;
      transition: 0.2s;
    }
  }
`;

export const SliderFilter = styled.span`
  position: relative;
  bottom: 7px;
  color: #fff;
  margin-left: 20px;
  font-family: monospace;
  font-size: 20px;
  //display: inline;
`;
