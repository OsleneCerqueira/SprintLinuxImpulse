import React from 'react';
import Form from './SectionOne/Form';
import Texto from './SectionOne/Texto';
import Produtos from './Produto/Produto';
import { SectionOne } from './SectionOne/styledSectionOne';
import { Invite } from './Invite/Invite';

function Main() {
  return (
    <main>
      <SectionOne>
        <Texto />
        <Form />
      </SectionOne>
      <Produtos />
      <Invite />
    </main>
  );
}

export default Main;
