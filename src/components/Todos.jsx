import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar react"
    },
    {
      text: "Belajar Props di React"
    },
    {
      text: "Belajar React Hooks"
    },
    {
      text: "Belajar State di React"
    },
    {
      text: "Belajar react"
    },
    {
      text: "Belajar react"
    },
    {
      text: "Belajar Props di React"
    },
    {
      text: "Belajar React Hooks"
    },
    {
      text: "Belajar State di React"
    },
    {
      text: "Belajar react"
    }
  ];

  return (
    <section className="Todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
