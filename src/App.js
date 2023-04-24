import './App.css';
import Header from './components/Header';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import Content from './components/Content';

import { useState, useEffect } from 'react';

function App() {

const [ items, setItems ] = useState([])
const [ newItem, setNewItem ] = useState('')
const [ search, setSearch ] = useState('')
const [ fetchError, setFetchError ] = useState(null)
const [ isLoading, setIsloading ] = useState(true)


const DATA_URL = 'http://localhost:3500/items'

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


useEffect(() => {
  const fetchItems = async () => {
    try {
      const response = await fetch(DATA_URL)
      if (!response.ok) throw new Error('Could not fetch items from json server')
      const listItems = await response.json()
      setItems(listItems)
      setFetchError(null)
    } catch(err) {
      setFetchError(err.message)
    }finally {
      setIsloading(false)
    }    
  }
  setTimeout(() => (async () => await fetchItems())(), 2000)
}
, [])

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
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && !isLoading && <p style={{color: 'red', margin: '10px'}}>{`Error: ${fetchError}`}</p>}
        <Content 
          items={items.filter((item) => (item.item).toLowerCase().includes(search.toLowerCase()))} 
          handleCheck={handleCheck} 
          handleDelete={handleDelete}/>
      </main>
    </div>
  );
}

export default App;
