import React from 'react'
import { useRecoilState } from 'recoil';
import { todoListState } from '../store';

export default function TodoItem({item}) {
    const [todoList, setTodoList] = useRecoilState(todoListState)
    const index = todoList.findIndex((listItem) => listItem === item);


    const editItemText = ({target:{value}})=>{

           const newList = replaceItemAtIndex(todoList,index,{...item,text:value})
           setTodoList(newList);
    }

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
          ...item,
          isComplete: !item.isComplete,
        });
    
        setTodoList(newList);
      };

      
  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
       
        <input value={item.text}  onChange = {editItemText} />
        <input
        type="checkbox"
        checked={item.isComplete}
        onChange= {toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}


function replaceItemAtIndex(arr, index, newValue) {

console.log({arr, index, newValue})
    
const rr = [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
    return rr ;
  }

  function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }