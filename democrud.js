import React,{useState} from 'react';
function CrudComponent(){
const [items, setItems] = useState([]);
const [newItem, setNewItem] = useState('');
const [selectedItem,setSelectedItem] =  useState(null);

const  createItem =()=>{


if(newItem.trim()!== ''){
setItems([...items,{ id:Date.now(), name:newItem }]);
setNewItem('');

}
};

const updateItem = () => {
    if(selectedItem){
const updatedItems = items.map((item)=>

    item.id  === selectedItem.id ? {...item, name:selectedItem.name } : item

);
setItems(updatedItems);
setSelectedItem(null);

    }
};
 const dele

 

}