/** @jsx jsx */
import { jsx } from "@emotion/react";
// import React from "react";
import PropTypes from "prop-types";

import Todo from "../todo/Todo";

// import styles from "./todos.module.css";
import * as styles from "./todos.styles.js";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section css={styles.todos}>
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
        <div css={styles.todoPlaceholderText}>
          Harap click tombol{""}
          <span css={styles.addButtonPlaceholderText}>Add</span> yang berada di
          pojok kiri
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
