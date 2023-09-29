import { useState } from "react";
import style from "./TypeBranch.module.css";

export function TypeBranch({typeClick}) {
  const [selectedType, setSelectedType] = useState(null);

  //Passa o tipo da branch para o componente pai
  const handleTypeClick = (type) => {
    event.preventDefault();
    setSelectedType(type);
  };

  return (
    <div>
      <ul className={style.types}>
        <li>
          <a
            href=""
            className={selectedType === "Task" ? style.selected : ""}
            onClick={() => {typeClick("Task"), handleTypeClick("Task")}}
          >
            Task
          </a>
        </li>
        <li>
          <a
            className={selectedType === "Bug" ? style.selected : ""}
            onClick={() => {typeClick("Bug"), handleTypeClick("Bug")}}
            href=""
          >
            Bug
          </a>
        </li>
        <li>
          <a
            className={selectedType === "Enhancement" ? style.selected : ""}
            onClick={() => {typeClick("Enhancement"), handleTypeClick("Enhancement")}}
            href=""
          >
            Enhancement
          </a>
        </li>
        <li>
          <a
            className={selectedType === "Hotfix" ? style.selected : ""}
            onClick={() => {typeClick("Hotfix"), handleTypeClick("Hotfix")}}
            href=""
          >
            Hotfix
          </a>
        </li>
      </ul>
    </div>
  );
}
