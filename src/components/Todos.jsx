import React from "react";
import PropTypes from "prop-types";

import Todo from "./todo/Todo";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="Todos">
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}
      {todos.length === 0 && (
        <div className="todo-placeholder-text">
          Harap click tombol{""}
          <span className="add-button-placeholder-text">Add</span> yang berada
          di pojok kiri
        </div>
      )}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
