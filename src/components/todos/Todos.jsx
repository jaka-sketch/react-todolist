/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Todo from "../todo/TodoClass";
import Container from "../../layout/Container";
import Item from "../../layout/Item";
// import styles from "./todos.module.css";
import * as styles from "./todos.styles.js";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos-component">
      <Container flexDirection="column" maxHeight="500px">
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
          <React.Fragment>
            <div css={styles.todoPlaceholderText}>
              Harap click tombol{""}
              <span css={styles.addButtonPlaceholderText}>Add</span> yang berada
              di pojok kiri
            </div>
            <Container justifyContent="center">
              <Item>
                <span css={styles.seeAboutPagePlaceholderText}>
                  <Link to="/about">Or Visit About Page</Link>
                </span>
              </Item>
            </Container>
          </React.Fragment>
        )}
      </Container>
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
