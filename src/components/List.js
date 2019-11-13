import React from 'react';
import Card from './Card';
import './list.css';

function List (props) {
  const cards = props.cards
  let cardComponents = cards.map((card,index) => {
    console.log(card);
    return <Card 
    key={index} 
    cardKey={card.cardKey} 
    title={card.card.title} 
    content={card.card.content} 
    handleDeleteItem = {props.onDeleteItem} />
  });
  return (
    <section className="List">
    <header className="List-header">
      <h2>{props.header}</h2>
    </header>
    <div className="List-cards">
      {cards.map((card,index) => (
        <Card 
        key={index} 
        cardKey={card.cardKey} 
        title={card.card.title} 
        content={card.card.content} 
        onDeleteItem = {props.onDeleteItem} />
      ))}
      <button type="button" onClick={() =>{
        props.onAddItem(props.listId)}
      }>
        Add Card
      </button>
    </div>
  </section>
  )
}

export default List;