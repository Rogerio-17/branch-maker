import { fireEvent, render, screen } from "@testing-library/react";
import { App } from "./App";

function renderApp() {
  return render(<App />);
}

describe("Branch Maker", () => {
  it("renders title", () => {
    renderApp();
    const title = screen.getByText(/branch maker/i);
    expect(title).toBeInTheDocument();
  });

  it("renders branch types", () => {
    renderApp();
    const listitems = screen.getAllByRole("listitem");
    // 4 branch types
    expect(listitems.length).toBe(4);
  });

  it("renders inputs", () => {
    renderApp();
    const inputID = screen.getByRole("spinbutton");
    const inputName = screen.getByRole("textbox");
    expect(inputID).toBeInTheDocument();
    expect(inputName).toBeInTheDocument();
  });

  it("renders result box", () => {
    renderApp();
    const resultBox = screen.getByTestId("result-box");
    expect(resultBox).toBeInTheDocument();
  });

  it("renders button", () => {
    renderApp();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("renders branch on result", () => {
    renderApp();
    const listitems = screen.getAllByRole("listitem");

    const task = listitems[0].getElementsByTagName("a")[0];

    fireEvent.click(task);

    const resultBox = screen.getByTestId("result-box");

    const inputID = screen.getByRole("spinbutton");
    const inputName = screen.getByRole("textbox");

    fireEvent.change(inputID, { target: { value: "123" } });
    fireEvent.change(inputName, { target: { value: "new app" } });

    expect(resultBox).toHaveTextContent("feat/123-new-app");
  });
});
