import React from 'react'
import ItemsList from './ItemsList'
const Content = ({items,handleChange,handleDelete}) => {
 
  
  return (
    <div>
        <main>
              {(items.length>0) ? (
                <ItemsList
                items={items}
                handleChange={handleChange}
                handleDelete={handleDelete}
                />
              ) : ( <h1>Your list is empty !!!</h1>)}
        </main>
    </div>
  )
}

export default Content