import React, { useState, useEffect } from 'react';

import './App.css';
import Column from './components/Column';

const initialState = [
  {
    title: "Winnie",
    color: "#8e6e95",
    cards: [
      "one",
      "two"
    ]
  },
  {
    title: "Bob",
    color: "#39a59c",
    cards: [
      "three",
      "four"
    ]
  },
  {
    title: "George",
    color: "#344759",
    cards: [
      "five",
      "six"
    ]
  },
  {
    title: "Ringo",
    color: "#e8741e",
    cards: [
      "seven",
      "eight"
    ]
  }
];

function App() {
  const loadState = () => JSON.parse(localStorage.getItem("columns")) || initialState;

  const [columns, setColumns] = useState(loadState);

  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns))
  }, [columns]);

  const handleAddCard = fromColIndex => {
    const text = prompt("Please enter card contents:");

    setColumns(
      columns.map((col, index) => {
        if (index === fromColIndex) {
          return { ...col, cards: [...col.cards, text] };
        }

        return col;
      })
    );
  };

  const handleMove = (fromColIndex, fromCardIndex, direction) => {
    const toIndex = fromColIndex + direction;
    if (toIndex < 0 || toIndex > 3) {
      return;
    }

    const fromCard = columns[fromColIndex].cards[fromCardIndex];

    setColumns(
      columns.map((col, colIndex) => {
        if (colIndex === toIndex) {
          return { ...col, cards: [...col.cards, fromCard] };
        }

        if (colIndex === fromColIndex) {
          return { ...col, cards: col.cards.filter((_, cardIndex) => cardIndex !== fromCardIndex) };
        }

        return col;
      })
    );
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row no-gutter" style={{ marginTop: 30 }}>
          {columns.map((col, colIndex) => (
            <Column
              index={colIndex}
              {...col}
              onAddCard={handleAddCard}
              onMove={handleMove}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
