import "./global.css";
import style from "./App.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import formStyles from "./components/FormResult.module.css";
import { toast } from "react-toastify";

import { FormResult } from "./components/FormResult";
import { useRef, useState } from "react";

function OldVersion() {
  const classNames = [
    style.content__forms__old,
    style.content__forms__item,
  ].join(" ");
  return (
    <div className={classNames}>
      <ToastContainer />
      <FormResult />
    </div>
  );
}

function NewVersion() {
  const [value, setValue] = useState("");

  const divRef = useRef(null);

  function handleCopy() {
    const content = divRef.current.textContent;
    const commandGit = "git checkout -b";
    const textCopy = `${commandGit} ${content}`;

    navigator.clipboard.writeText(textCopy);
    toast.success("Texto copiado com sucesso!");

    setValue("");
  }

  // version 3 - extract from id and title
  // rdar://119949401 ([FRONT][BUG][QA]: i am the face)
  const radar = value;

  const regex = {
    radar: /rdar:\/\/\d+/,
    brackets: /\(|\[\w+\]|:|\)/g,
    spaces: /\s+/g,
    nan: /\D+/,
  };

  const types = ["bug", "task"]; // enh

  const radarNumber = radar.match(regex.radar)?.[0]?.replace(regex.nan, "");

  const type = types.find((t) => radar.toLowerCase().includes(t));

  const removeRadarNumber = radar.replace(regex.radar, "").trim();

  const removeTags = removeRadarNumber.replace(regex.brackets, "").trim();

  const formatText = removeTags.replace(regex.spaces, "-").toLowerCase();

  const result = value ? `${type}/${radarNumber}-${formatText}` : "";

  return (
    <div className={style.content__forms__item}>
      <div className={formStyles.formresult}>
        <input
          type="text"
          style={{
            marginTop: "4rem",
          }}
          value={value}
          onChange={(ev) => {
            setValue(ev.target.value);
          }}
          placeholder="Past here..."
        />

        <div ref={divRef} className={formStyles.task} data-testid="result-box">
          {result}
        </div>
        <div className={formStyles.copy}>
          <button disabled={!value} onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <div className={style.content}>
      <h1>Branch Maker</h1>
      <div className={style.content__forms}>
        <OldVersion />
        <NewVersion />
      </div>
    </div>
  );
}
