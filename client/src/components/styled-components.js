import styled from 'styled-components';
import React from 'react';

const colors = {
  mainBackground: '#F2F3F7',
  innerBackground: '#FFFFFF',
  mainColor: '#0190FF',
  color_1: '#0190AD',
  color_2: '#a29bfe',
};

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


const Nav = styled.nav`
  display: flex;
  height: 80px;
  align-items: center;
  padding-left: 3em;
  margin-bottom: 1em;
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

const TableContainer = styled.div`
  height: 400px;
  padding: 0 3em;
  margin-bottom: 2em;
`;

const ListTable = styled.table`
  box-shadow: inset 0px 0px 4px 1px ${colors.color_2};
  border-radius: 12px;
  height: 100%;
  width: 100%;

  & tbody {
    display: block;
    height: 100%;
    width: 100%;
    padding: 1px;
    max-height: 100%;
    overflow-y: auto;
  }
  & tr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 25%;
    width: 100%;
    padding: 0 1em;
    border-radius: 12px;

    &:hover {
      background-color: ${colors.mainBackground};
    }

    & td {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
`;

const Btn = ({
  className, type, handleClick, text,
}) => (
    <button className={className} type={type} onClick={handleClick}>
      {text}
    </button>
  );

const Button = styled(Btn)`
  ${props => props.size && props.size === 'big' ? 'padding: 1em;' : props.size === 'small' ? 'padding: .25em' : 'padding: .5em;'}
  border-radius: .5rem;
  background-color: ${props => props.bgColor || colors.color_1};
  color: ${props => props.color || colors.color_1};
  font-family: RobotoSlab;
  font-size: 13px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  transition: transform .5s ease-out;

  &:hover {
    transform: scale(1.1);
    background-color: ${props => props.color || colors.color_1};
    color: ${props => props.bgColor || colors.color_1};
  }
`;

const StyledText = styled.span`
  font: Montserrat;
  ${props => props.size && (props.size === 'big' ? 'font-size: 30px;' : props.size === 'small' ? 'font-size: 12px;' : 'font-size: 16px;')}
  font-weight: ${props => props.important ? '800' : '400'};
  color: ${props => props.color || 'black'};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.2px;
  `;

const FormContainer = styled.div`
    padding: 0 3em;

    & form {
      display: flex;
      padding: 1em;
      border-radius: 10px;
      box-shadow: inset 0 0 1px 1px ${colors.color_2};

      &:hover {
        background-color: ${colors.mainBackground};
      }

      .title {
        font-family: Monteserrat;
        padding: .5em;
        text-align: center;
        font-size: 14px;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.2px;
        color: ${colors.color_2};
        background-color: ${colors.mainBackground};

        width: 350px;
        border-radius: 5px;
        box-shadow: inset 0 0 2px 2px ${colors.color_2};
        margin-right: 5%;

        &:focus {
          color: black;
        }
      }

      .ctg {
        font-family: Monteserrat;
        padding: .5em;
        font-size: 14px;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.2px;
        color: ${colors.color_2};

        width: 150px;
        border-radius: 5px;
        box-shadow: inset 0 0 2px 2px ${colors.color_2};
        margin-right: 10%;

        &:focus {
          color: black;
        }
      }
    }
  `;

const FilterContainer = styled.div`
    padding: .5em 3em;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & select {
      font-family: Monteserrat;
      padding: .5em;
      font-size: 14px;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.2px;
      color: ${colors.color_2};

      width: 100px;
      border-radius: 5px;
      box-shadow: inset 0 0 2px 2px ${colors.color_2};
      margin-left: 1%;
    }
  `;

export {
  Nav, Container, InnerRoot, Logo, NavElements, Link, TableContainer, ListTable, Button, StyledText, FormContainer, FilterContainer,
};
