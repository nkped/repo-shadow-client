import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Item</label>
            <input 
                type='text' 
                id='addItem'
                placeholder='Add exercize here...' 
                value={newItem} 
                required
                onChange={(e) => setNewItem(e.target.value)}/>
                <button
                    type='submit'
                >
                    <FaPlus />
                </button>
    </form>
  )
}

export default AddItem


//onSubmit={() => handleSubmit()}