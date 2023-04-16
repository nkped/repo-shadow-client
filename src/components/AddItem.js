import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem }) => {
    //onClick={() => handleSubmit(item.id)}
  return (
    <form className='addForm'>
        <input 
            type='text' 
            placeholder='type exercize here...' 
            value={newItem} 
            onChange={(e) => setNewItem(e.target.value)}/>
            <button
                type='submit'
                tabIndex={0}
            >
                <FaPlus />
            </button>
    </form>
  )
}

export default AddItem


//onSubmit={() => handleSubmit()}