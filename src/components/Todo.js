import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import PropTypes from 'prop-types';
import TodoForm from './TodoForm';

const Todo = ({
  todos,
  completeTodo,
  removeTodo,
  updateTodo,
}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  Todo.propTypes = {
    todos: PropTypes.instanceOf(Array).isRequired,
    completeTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  };

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={todo.id}
    >
      <div
        role="button"
        tabIndex={0}
        key={todo.id}
        onClick={
          () => completeTodo(todo.id)
        }
        onKeyDown={
          () => completeTodo(todo.id)
        }
      >
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
