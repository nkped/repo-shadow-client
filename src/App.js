import './App.css';
import Header from './components/Header';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import Content from './components/Content';

import { useState } from 'react';

function App() {

const [ items, setItems ] = useState(JSON.parse(localStorage.getItem('workoutlist')))

const [ newItem, setNewItem ] = useState('')

const [ search, setSearch ] = useState('')


const setAndSave = (newItems) => {
  setItems(newItems)
  localStorage.setItem('workoutlist', JSON.stringify(newItems))
}


const addItem = (item) => {
  const id = items.length ? items[items.length -1].id + 1 : 1
  const myNewItem = { id, checked: false, item}
  const listItems = [ ...items, myNewItem] 
  setAndSave(listItems)
}

const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked }: item )
  setAndSave(listItems)
}

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id)
  setAndSave(listItems)
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
      <SearchItem 
        search={search} 
        setSearch={setSearch} 
      />
      <Content 
        items={items.filter((item) => (item.item).toLowerCase().includes(search.toLowerCase()))} 
        handleCheck={handleCheck} 
        handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
