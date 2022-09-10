import React from 'react';
import { HeaderStyle, HeaderNav } from './styledHeader';
import { Button } from '../Button/Button';

function Header() {
  return (
    <HeaderStyle>
      <h2>uma seleção de produtos</h2>
      <p>especial para você</p>
      <span>
        Todos os produtos desta lista foram selecionados a partir da sua
        navegação. Aproveite!
      </span>

      <HeaderNav>
        <Button>Conheça a Linx</Button>
        <Button>Ajude o algoritmo</Button>
        <Button>Seus Produtos</Button>
        <Button>Compartilhe</Button>
      </HeaderNav>
    </HeaderStyle>
  );
}

export default Header;
