import "./global.css"
import style from "./App.module.css"
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import { FormResult } from "./components/FormResult"

export function App() {
  
  
  return (
    <div className={style.content}>
      <h1>Branch Maker</h1>
      <ToastContainer />
      <FormResult/>
    </div>
  )
}

