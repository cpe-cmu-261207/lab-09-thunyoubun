import { useContext, useEffect, useState } from "react";
import Todo from "/components/Todo";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";
import TodoCtn from "/components/TodoCtn";
import { ThemeContext } from "../pages/context/ThemeContext";

export default function Todolist() {
  const { selTheme } = useContext(ThemeContext);

  return (
    <div className="">
      {/* Entire App container (required for centering) */}
      <div style={{ maxWidth: "700px" }} className="mx-auto ">
        {/* App header */}
        <p
          className="display-4  text-center fst-italic p-4"
          style={{
            color: selTheme.foreground,
          }}
        >
          Minimal Todo List <span className="fst-normal">☑️</span>
        </p>

        <TodoCtn />
      </div>
    </div>
  );
}
