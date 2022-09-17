import React, { useContext, useState } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";
import { ThemeContext } from "../pages/context/ThemeContext";

export default function Todo(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { selTheme } = useContext(ThemeContext);
  return (
    <li
      className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onMouseOut={() => {
        setIsMouseOver(false);
      }}
    >
      <span
        className="me-auto"
        style={
          props.Completed
            ? {
                textDecoration: "line-through",
                color: "red",
              }
            : { color: selTheme.foreground }
        }
      >
        {props.title}
      </span>
      {isMouseOver && (
        <>
          <button className="btn btn-success" onClick={() => props.onMark()}>
            <IconCheck />
          </button>
          <button className="btn btn-secondary" onClick={() => props.onUp()}>
            <IconArrowUp />
          </button>
          <button className="btn btn-secondary" onClick={() => props.onDown()}>
            <IconArrowDown />
          </button>
          <button className="btn btn-danger" onClick={() => props.onDelete()}>
            <IconTrash />
          </button>
        </>
      )}
    </li>
  );
}
