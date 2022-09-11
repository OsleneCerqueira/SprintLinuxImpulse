import React from 'react';
import { Button } from '../../Button/Button';
import { CardStyle } from './styledCard';

function Card({
  img, name, description, oldValue, newValue, times, or,
}) {
  return (
    <CardStyle>
      <section>
        <img src={img} alt="produto" />
      </section>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{`De: R$ ${oldValue},00`}</p>
        <h4>{`Por: R$ ${newValue},00`}</h4>
        <p>
          ou
          {' '}
          {`${times}x`}
          {' '}
          de:
          {' '}
          {`R$ ${or}`}
        </p>
        <Button>Comprar</Button>
      </div>
    </CardStyle>
  );
}

export default Card;
