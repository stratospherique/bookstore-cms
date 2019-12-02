import styled, { css } from 'styled-components';

const colors = {
  mainBackground: '#F2F3F7',
  innerBackground: '#FFFFFF',
  mainColor: '#0190FF',
  color_1: '#0190AD',
}


const Nav = styled.nav`
  border: 1px solid;
  display: flex;
  height: 80px;
  align-items: center;
  padding-left: 3em;
  margin-bottom: 2em;
`;

const Logo = styled.span`
  font-family: Montserrat;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #0290ff;
  padding-right: 1em;
  
  &:hover {
    color: ${colors.color_1};
  }
`;

const NavElements = styled.ul`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & .link {
    padding: 5px;
    color: red;
  }
`;

const Link = styled.a`
  width: 59px;
  height: 16px;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.9px;
  color: ${props => props.baseColor || 'gray'};
  text-decoration: none;
  transition: color, font-size .5s ease-out;
  &:hover {
    color: ${props => props.hoverColor || 'red'};
    font-size: 16px;
  }
`;

const Container = styled.div`
  background-color: ${colors.innerBackground};
  border: 1px solid ${colors.mainBackground};
  height: 700px;
  width: 800px;
`;

const InnerRoot = styled.div`
background-color: ${colors.mainBackground};
height: 100vh;
display: grid;
place-content: center;
`;

export { Nav, Container, InnerRoot, Logo, NavElements, Link }