import React from 'react'
import List from './List'
import './App.css'

class App extends React.Component {
  constructor() {
   super() 
   this.state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    allCards: {
      'a': { title: 'First card', content: 'lorem ipsum' },
      'b': { title: 'Second card', content: 'lorem ipsum' },
      'c': { title: 'Third card', content: 'lorem ipsum' },
      'd': { title: 'Fourth card', content: 'lorem ipsum' },
      'e': { title: 'Fifth card', content: 'lorem ipsum' },
      'f': { title: 'Sixth card', content: 'lorem ipsum' },
      'g': { title: 'Seventh card', content: 'lorem ipsum' },
      'h': { title: 'Eighth card', content: 'lorem ipsum' },
      'i': { title: 'Ninth card', content: 'lorem ipsum' },
      'j': { title: 'Tenth card', content: 'lorem ipsum' },
      'k': { title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { title: 'Twelth card', content: 'lorem ipsum' },
      'm': { title: 'Thirteenth card', content: 'lorem ipsum' },
    }
  }
}

omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

handleDeleteCard = (key) => { 
  let newObj = this.omit(this.state.allCards, key)
  let newLists = this.state.lists
  newLists.map(list => {
    list.cardIds = list.cardIds.filter(id => {
      return id !== key
    })
  })
  this.setState({
    allCards: newObj,
    lists: newLists
  })
}

newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

handleAddItem = (listId) => {
  console.log('add')
  console.log(listId)

  let newCard = this.newRandomCard()
  const newLists = this.state.lists.map(list => {
    if(list.id === listId) {
    return {
      ...list,
      cardIds: [...list.cardIds, newCard.id]
    }
  }
return list
  })
  console.log(this.state)
  this.setState({
    allCards: {...this.state.allCards, [newCard.Id]: newCard},
    lists: newLists
  })
}
render() {
  const array = this.state.lists
  console.log(this.state)
  return (
    <main className='App'>
        <div className="App-list">
        {array.map(list => (
          <List 
            key={list.id}
            listId={list.id}
            header={list.header}
            handleDeleteItem = {this.handleDeleteItem}
            handleAddItem = {this.handleAddItem}
            cards={list.cardIds.map(id => (
              {
                cardKey: id,
                card: this.state.allCards[id]
              }
              ))}
              />
            ))}
          </div>
      </main>
    )
  }
}

export default App