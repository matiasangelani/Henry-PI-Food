import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

export const HomeContainer = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  position: fixed;
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
  top: 150px;
`;

export const Section = styled.section`
  display: grid;
  padding-top: 30px;
  top: 130px;
  margin-left: 350px;
  align-items: center;
  justify-items: center;
  ${LoadingContainer} {
    position: absolute;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    &:after {
      content: ' ';
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid #fff;
      border-color: #fff transparent #fff transparent;
      animation: ${move} 1.2s linear infinite;
    }
  }
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
`;

// export const ButtonHomeContainer = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100px;
//   height: 50px;
// `;

export const ButtonHome = styled.button`
  position: absolute;
  font-family: monospace;
  color: #ffffff;
  background-color: #103141;
  border: none;
  width: 100px;
  padding: 1rem;
  z-index: 1;
  text-align: center;
  transition-duration: 0.5s;
  margin-top: 50px;
  left: 5%;
  &:hover {
    background-color: #315162;
    cursor: pointer;
  }
`;
