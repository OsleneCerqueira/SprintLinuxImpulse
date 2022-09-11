import React from 'react';
import { FormContainer } from './styledSectionOne';
import { Input, Label } from '../../Input/Input';
import { Button } from '../../Button/Button';

function Form() {
  return (
    <FormContainer>
      <div>
        <Label>Seu nome:</Label>
        <Input type="text" required />
      </div>

      <div>
        <Label>E-mail:</Label>
        <Input type="email" required />
      </div>

      <div>
        <Label>CPF:</Label>
        <Input type="text" required />
      </div>

      <section>
        <section>
          <input type="radio" />
          <Label>Feminino</Label>
        </section>
        <section>
          <input type="radio" />
          <Label>Maculino</Label>
        </section>

      </section>
      <Button>Enviar</Button>
    </FormContainer>
  );
}

export default Form;
