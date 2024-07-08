import React from "react";
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import { useState} from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
function App() {
  const [items,setItems]=useState(JSON.parse(localStorage.getItem('todo_list')));

  const [newItem,setNewItem] = useState('');
  const [search,setSearch] = useState('');

  const addItem =(item)=>{
    const id= items.length ? (items[items.length-1].id)+1 : 1;
    const addNewItem={id,checked:false,item};
    const listItems = [...items,addNewItem];
    setItems(listItems);
    localStorage.setItem("todo_list",JSON.stringify(listItems));//It will store the array in local storage. we can use this even after the page is reloaded
  }

  const handleSubmit =(e)=>{
    e.preventDefault(); //prevent page from auto reload after form submition
    if(!newItem) return ;

    console.log(newItem);
    addItem(newItem);
    setNewItem('');
    
  }

  
  const handleChange=(id)=>{
      const listItems = items.map(item =>
        item.id===id ? {...item,checked : !item.checked} : item
      );
      console.log(id);
      setItems(listItems);
      localStorage.setItem("todo_list",JSON.stringify(listItems))
  };
  const handleDelete =(id)=>{
      const listItems=items.filter(item => item.id!==id );
      setItems(listItems);
      localStorage.setItem("todo_list",JSON.stringify(listItems))
  }

  
  return ( 
    <div>
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
      items={items.filter(item=> (item.item.toLowerCase().includes(search.toLowerCase())))}
      handleChange={handleChange}
      handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
    
  );
}

export default App;
