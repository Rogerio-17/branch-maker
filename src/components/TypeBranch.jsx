import { useState } from "react";
import PropTypes from "prop-types";
import style from "./TypeBranch.module.css";

const branchTypes = {
  feat: "Task",
  bug: "Bug",
  enh: "Enhancement",
  hotfix: "Hotfix",
};

export function TypeBranch({ onTypeSelect }) {
  const [selectedType, setSelectedType] = useState(null);

  //Passa o tipo da branch para o componente pai
  const handleTypeClick = (event, type) => {
    event.preventDefault();
    setSelectedType(type);
    onTypeSelect(type);
  };

  return (
    <div>
      <ul className={style.types}>
        {Object.keys(branchTypes).map((key) => (
          <li key={key}>
            <a
              href=""
              className={selectedType === key ? style.selected : ""}
              onClick={(event) => {
                handleTypeClick(event, key);
              }}
            >
              {branchTypes[key]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

TypeBranch.propTypes = {
  onTypeSelect: PropTypes.func.isRequired,
};
