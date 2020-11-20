import React from "react";
import "./styles.css";
import { Themeprovider } from "@emotion/react";

import TodoList from "./pages/TodoList";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e06262"
    }
  },
  background: {
    color: {
      primary: "#f2eecb"
    }
  }
};

export default function App() {
  return (
    <Themeprovider theme={theme}>
      <TodoList />
    </Themeprovider>
  );
}
