import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import AddItem from './components/AddItem';

import { useState } from 'react';

function App() {

const [ items, setItems ] = useState([
  { id: 1, checked: true, item: 'push ups' },
  { id: 2, checked: false, item: 'squats' },
  { id: 3, checked: false, item: 'sit ups' }
])

const [ newItem, setNewItem ] = useState('')

const addItem = (item) => {
  const id = items.length ? items[items.length -1].id + 1 : 1
  const myNewItem = { id, checked: false, item}
  const listItems = [ ...items, myNewItem] 
  setItems(listItems)
}

const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked }: item )
  setItems(listItems)
}

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id)
  setItems(listItems)
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(newItem)
  addItem(newItem)
  setNewItem('')
}

  return (
    <div className="App">
      <Header />
      <AddItem 
        newItem={newItem} 
        setNewItem={setNewItem} 
        handleSubmit={handleSubmit}
         />
      <Content 
        items={items} 
        setItems={setItems} 
        handleCheck={handleCheck} 
        handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
