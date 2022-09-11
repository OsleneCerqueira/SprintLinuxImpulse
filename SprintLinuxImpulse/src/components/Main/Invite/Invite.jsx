import React from 'react';
import { Input, Label } from '../../Input/Input';
import { Button } from '../../Button/Button';
import { InviteContainer } from './styledInvite';

export function Invite() {
  function chamada(e) {
    e.preventDefault();
    alert('Amigo Convidado!');
  }
  return (
    <InviteContainer>
      <p>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>
      <section>
        <div>
          <Label>Nome do seu amigo:</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>E-mail:</Label>
          <Input type="email" />
        </div>
      </section>
      <Button onClick={chamada}>Enviar agora</Button>
    </InviteContainer>
  );
}

export default Invite;
