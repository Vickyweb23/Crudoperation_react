import React, { useState } from 'react';

function CrudComponent() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const createItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { id: Date.now(), name: newItem }]);
      setNewItem('');
    }
  };

  const updateItem = () => {
    if (selectedItem) {
      const updatedItems = items.map((item) =>
        item.id === selectedItem.id ? { ...item, name: selectedItem.name } : item
      );
      setItems(updatedItems);
      setSelectedItem(null);
    }
  };

  const deleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <div className='target' >
      <h2>CRUD Example</h2>

      <input
        type="text" className='target1'
        placeholder="New Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button  className=' create' onClick={createItem}>Create</button>

      {selectedItem && (
        <div className='main'>
          <input className='target1'
            type="text"
            value={selectedItem.name}
            onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })}
          />
          <button onClick={updateItem}>Update</button>
        </div>
      )}

      <ul className='ul'>
        {items.map((item) => (
          <li className='lilist' key={item.id}>
            {item.name}
            <button  className='btn1' onClick={() => setSelectedItem(item)}>Edit</button>
            <button  className='btn2' onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudComponent;
