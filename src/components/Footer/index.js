import React from 'react';
import { Container } from "react-bootstrap";

import { StyledFooter } from './styles';

function Footer () {
  return (
    <StyledFooter>
      <Container>
        <p>Todos os direitos reservados - Joacy Mesquita</p>
      </Container>
    </StyledFooter>
  );
}

export default Footer;