import React, { Component } from "react";
import "./App.css";
import List from "./List";
import STORE from "./store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: { STORE }
    };
    console.log(this.state.store.STORE.allCards);
  }

  handleDeleteItem = (listId, itemId) => {
    console.log("Delete item clicked", "list", { listId }, "item", { itemId });
    function omit(obj, keyToOmit) {
      return Object.entries(obj).reduce(
        (newObj, [key, value]) =>
          key === keyToOmit ? newObj : { ...newObj, [key]: value },
        {}
      );
    }

    // console.log(this.state.store.STORE.lists[listId - 1]);
    // const newLists = omit(
    //   this.state.store.STORE.lists,
    //   this.state.store.STORE.lists[listId - 1].itemId
    // );

    const newLists = this.state.store.STORE.lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== itemId)
    }));
    const newCards = omit(this.state.store.STORE.allCards, itemId);
    // console.log("new store", newStore);
    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    });
  };

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.store.STORE.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              onDeleteItem={this.handleDeleteItem}
              header={list.header}
              cards={list.cardIds.map(
                id => this.state.store.STORE.allCards[id]
              )}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
