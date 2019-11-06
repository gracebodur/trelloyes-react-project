import React from 'react';
import Card from './Card';
import './list.css';

function List(props){
    console.log(props.header)
    console.log(props.cards)

    return(
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map(card => (
                    <Card
                    key = {card.id}
                    title = {card.title}
                    content={card.content}
                />))}
            </div>
        </section>
    )
}

export default List