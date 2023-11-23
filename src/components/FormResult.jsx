import { useState, useRef } from "react";
import { TypeBranch } from "./TypeBranch";
import styles from "./FormResult.module.css";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

export function FormResult() {
  const [typeSelected, setTypeSelected] = useState("");
  const [idBranch, setIdBranch] = useState("");
  const [branchName, setBranchName] = useState("");
  const divRef = useRef(null);

  //Pega o tipo da branch selecionada
  function handleTypeClick(type) {
    setTypeSelected(type);
  }

  //adiciona o id da branch
  function handleAddId(idBranch) {
    //So deixar adicionar namo se tiver com uma brach selecionada
    if (!typeSelected) {
      return toast.error("Selecione uma branch!");
    }

    setIdBranch(idBranch);
  }

  //Adiciona nome da branch
  function handleAddNameBranch(name) {
    //So deixar adicionar namo se tiver com uma brach selecionada
    if (!typeSelected) {
      return toast.error("Selecione uma branch!");
    }
    setBranchName(name);
  }

  //Copia texto da div
  function handleCopy() {
    // Verifica se todos os campos estão preenchidos
    if (!typeSelected || !idBranch || !branchName) {
      return toast.error("Preencha todos os campos para copiar o conteúdo.");
    }

    //Prepara texto para copia
    const content = divRef.current.textContent;
    const commandGit = "git checkout -b";
    const textCopy = `${commandGit} ${content}`;

    //Copia o texto
    navigator.clipboard.writeText(textCopy);
    toast.success("Texto copiado com sucesso!");

    //Zera valores
    setIdBranch("");
    setBranchName("");
  }

  const branchNameResult = branchName.trim().replace(/\s+/g, "-").toLowerCase();
  const textContent = !typeSelected
    ? ""
    : `${typeSelected}/${idBranch}-${branchNameResult}`;

  const buttonDisabled = !typeSelected || !idBranch || !branchName;

  return (
    <div className={styles.formresult}>
      <TypeBranch onTypeSelect={handleTypeClick} />

      <label>ID</label>
      <input
        type="number"
        placeholder="123"
        title="Id da sua branch"
        value={idBranch}
        onChange={(e) => handleAddId(e.target.value)}
      />

      <label>Branch name</label>
      <input
        type="text"
        placeholder="Branch name"
        value={branchName}
        onChange={(e) => handleAddNameBranch(e.target.value)}
      />

      <div ref={divRef} className={styles.task} data-testid="result-box">
        {textContent}
      </div>
      <div className={styles.copy}>
        <button disabled={buttonDisabled} onClick={handleCopy}>
          Copy
        </button>
      </div>
    </div>
  );
}
