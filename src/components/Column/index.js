import React from "react";

const Column = props => {
  return (
    <div className="col-3">
      <div className="title text-light p-3 mb-1" style={{ backgroundColor: props.color }}>{props.title}</div>
      {props.cards.map((text, cardIndex) => (
        <div className="k-card border d-flex justify-content-between p-2 mb-1">
          <button className="border-0" onClick={() => props.onMove(props.index, cardIndex, -1)}>&lt;</button>
          {text}
          <button className="border-0" onClick={() => props.onMove(props.index, cardIndex, 1)}>&gt;</button>
        </div>
      ))}
      <div className="add-card text-left text-muted mt-3" onClick={() => props.onAddCard(props.index)}>+ Add a card</div>
    </div>
  )
};

export default Column;