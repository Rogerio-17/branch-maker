import "./global.css"
import style from "./App.module.css"
import { TypeBranch } from "./components/TypeBranch"
import { FormResult } from "./components/FormResult"

export function App() {
  return (
    <div className={style.content}>
      <h1>Branch Maker</h1>
      <TypeBranch/>
      <FormResult/>
    </div>
  )
}

