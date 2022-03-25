import styled from 'styled-components';

export const MenuOrder = styled.div`
  font-family: monospace;
  z-index: 1;
`;

export const ListOrder = styled.ul`
  //background-color: #2c5282;
  //background-color: #28381c;
  background-color: #1c2e38;
  list-style: none;
  margin: 0;
  padding-left: 0;
  li ul {
    background: orange;
    visibility: hidden;
    opacity: 0;
    min-width: 5rem;
    position: absolute;
    transition: all 0.5s ease;
    margin-top: 1rem;
    left: 0;
    display: none;
  }
  li:hover > ul,
  li ul:hover {
    visibility: visible;
    opacity: 1;
    display: inline;
    top: -16px;
    left: 230px;
  }
  li ul li {
    clear: both;
    width: 100%;
  }
`;

export const ItemOrder = styled.li`
  color: #fff;
  //background-color: #2c5282;
  //background-color: #28381c;
  background-color: #1c2e38;
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
