import React from 'react';
import TodoItem from './TodoItem/TodoItem';

const todoList = (props) => {

  return (
    <div className='TodoList'>
      {props.todolist.map((todoItem, index) => {
        return <TodoItem
          title={todoItem.title}
          text={todoItem.text}
          date={todoItem.date}
          key={todoItem.id}
          clicked={() => props.deleteClicked(index)}/>
      })}
    </div>
  )

};

export default todoList;
