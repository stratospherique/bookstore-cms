import React from 'react';
import {
  Nav, Logo, NavElements, Link,
} from './styled-components';

const Navigation = () => (
  <Nav>
    <Logo>BookStore CMS</Logo>
    <NavElements>
      <li className="link"><Link href="#" baseColor="#828282" hoverColor="#F28282">Books</Link></li>
    </NavElements>
  </Nav>
);

export default Navigation;
