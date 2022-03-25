import styled from 'styled-components';

export const HomeContainer = styled.main`
  /* display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%; */
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  position: fixed;
  //grid-column-start: 1;
  //grid-column-end: 3;
  //display: flex;
  //justify-content: center;
  //margin-top: 40px;
  top: 50px;
  left: 5%;
`;

export const Aside = styled.aside`
  position: fixed;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 50px 650px 50px;
  gap: 30px;
  padding-left: 20px;
  //margin-top: 130px;
  top: 150px;
`;

export const Section = styled.section`
  //position: relative;
  display: grid;
  //gap: 0px;
  //grid-template-columns: 33.33% 33.33% 33.33%;
  //grid-template-rows: 10% 30% 30% 30%;
  //grid-template-rows: 33.33% 33.33% 33.33%;
  //padding-top: 50px;
  //margin-top: 115px;
  padding-top: 135px;
  top: 130px;
  margin-left: 350px;
  //height: 100vh;
  //grid-template-columns: 100%;

  //grid-auto-flow: column;
  //grid-auto-flow: row;
  align-items: center;
  justify-items: center;
`;

export const PaginationContainer = styled.footer`
  position: relative;
  text-align: center;
  padding: 10px 0 10px 0;
  bottom: 0;
  width: 100%;
`;

export const ButtonCreate = styled.button`
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
