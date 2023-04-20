import React from 'react'

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className='addForm' onSubmit={(e) => e.  preventDefault}>
        <label htmlFor='search'>Search</label>
        <input 
            id='search' 
            type='text' 
            role='searchbox' 
            placeholder='Type search here...'
            value={search} 
            onChange={(e) => setSearch(e.target.value)} />
    </form>
  )
}

export default SearchItem