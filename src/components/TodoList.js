import React from 'react'
import {filteredTodoListState} from '../store'
import { useRecoilValue } from 'recoil'
import TodoItemCreator from './TodoItemCreator'
import TodoItem from './TodoItem'
import TodoListFilters from './TodoListFilters'
import TodoListStatus from './TodoListStatus'
import TodoSearchBar from './TodoSearchBar'


export default function TodoList() {

    const todoList = useRecoilValue(filteredTodoListState)
  return (
    <div>
        <TodoListStatus/>
        <TodoListFilters/>
        <TodoSearchBar/>
        <TodoItemCreator/>
        {todoList.map(item=>(<TodoItem key={item.id} item={item}/>))}
        </div>
  )
}
