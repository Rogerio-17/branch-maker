import { fireEvent, render, screen } from "@testing-library/react";
import { MainBranchMaker } from ".";

function renderApp() {
  return render(<MainBranchMaker />);
}

describe("Branch Maker", () => {
  it("renders input", () => {
    renderApp();
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
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
  describe("result", () => {
    it("happy path", () => {
      renderApp();
      const input = screen.getByRole("textbox");
      const resultBox = screen.getByTestId("result-box");

      // happy path
      fireEvent.change(input, {
        target: { value: "rdar://333111 ([FRONT][BUG][QA]: i am the face)" },
      });
      expect(resultBox).toHaveTextContent("bug/333111-i-am-the-face");
    });

    it("many spaces", () => {
      renderApp();
      const input = screen.getByRole("textbox");
      const resultBox = screen.getByTestId("result-box");

      fireEvent.change(input, {
        target: {
          value: "rdar://333111 ([FRONT][BUG][QA]: i    am the      face)",
        },
      });
      expect(resultBox).toHaveTextContent("bug/333111-i-am-the-face");
    });

    it("task", () => {
      renderApp();
      const input = screen.getByRole("textbox");
      const resultBox = screen.getByTestId("result-box");

      fireEvent.change(input, {
        target: {
          value: "rdar://333111 ([FRONT][TASK][QA]: i am the face)",
        },
      });
      expect(resultBox).toHaveTextContent("task/333111-i-am-the-face");
    });

    it("enhancement", () => {
      renderApp();
      const input = screen.getByRole("textbox");
      const resultBox = screen.getByTestId("result-box");

      fireEvent.change(input, {
        target: {
          value: "rdar://333111 ([FRONT][ENHANCEMENT][QA]: i am the face)",
        },
      });

      expect(resultBox).toHaveTextContent("enh/333111-i-am-the-face");
    });
  });
});
