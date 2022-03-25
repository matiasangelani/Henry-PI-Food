import styled from 'styled-components';

export const PaginationNav = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NumberList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  width: 50%;
`;

export const NumberItem = styled.li`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  list-style: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #1c2e38df;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Number = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
