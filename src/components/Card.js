import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="Card">
      <button
        onClick={() => {
          console.log(props);
          props.onDeleteItem(props.listId, props.id);
        }}
        type="button"
      >
        delete
      </button>
      <h3 className="cardTitle">{props.title}</h3>
      <p className="cardContent">{props.content}</p>
    </div>
  );
}

export default Card;
