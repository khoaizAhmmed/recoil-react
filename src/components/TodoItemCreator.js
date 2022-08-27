import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import {todoListState} from '../store'

export default function TodoItemCreator() {
    const setTodoList = useSetRecoilState(todoListState)
    const [inputValue, setInputValue] = useState('')

    const onChangeHandler = (e)=>{
        setInputValue(e.target.value)
    }
    const addHandler =(e)=>{
        e.preventDefault()
        setTodoList((oldTodoList)=>[...oldTodoList,{
            id:getId(),
            text:inputValue,
            isComplete: false
        }])
        setInputValue('')
    }
  return (
    <div><input type="text" placeholder='...todo item' value={inputValue} onChange={onChangeHandler} />
        <button onClick={addHandler}>Add</button>
    </div>
  )
}

// utility for creating unique Id

let id = 0;
function getId() {
  return id++;
}