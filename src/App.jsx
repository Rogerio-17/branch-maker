import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./global.css";

import { MainBranchMaker } from "./v3";

export function App() {
  return (
    <div className={"w-full max-w-[720px] mx-auto mt-10"}>
      <ToastContainer />
      <h1 className="text-4xl font-medium text-center">Branch Maker</h1>
      <MainBranchMaker />
    </div>
  );
}
