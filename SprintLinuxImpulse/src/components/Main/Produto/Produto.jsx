import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import { Button } from '../../Button/Button';
import { ProdutosStyle, Separador, ProdutoButton } from './styledProduto';

function Produtos() {
  const [card, setNewCard] = useState([]);
  const [section, setSection] = useState(1);

  const handleApi = async () => {
    const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1${section}`;
    const response = await fetch(url);
    const json = await response.json();
    setNewCard([...card, ...json.products]);
  };

  function maisProdutos() {
    setSection(section + 1);
  }

  useEffect(() => {
    handleApi();
  }, [section]);

  return (
    <section>
      <Separador>
        <hr />
        <h4>
          Sua seleção especial
        </h4>
        <hr />
      </Separador>
      <ProdutosStyle>
        {card.length > 0
                    && card.map((card, index) => (
                      <Card
                        img={card.image}
                        name={card.name}
                        description={card.description}
                        oldValue={card.oldPrice}
                        newValue={card.price}
                        times={card.installments.count}
                        or={card.installments.value}
                        key={index}
                      />
                    ))}
      </ProdutosStyle>
      <ProdutoButton>
        <Button onClick={maisProdutos}>Ainda mais produtos aqui!</Button>
      </ProdutoButton>
      <Separador>
        <hr />
        <h4>
          Compartilhe a novidade
        </h4>
        <hr />
      </Separador>
    </section>
  );
}

export default Produtos;
