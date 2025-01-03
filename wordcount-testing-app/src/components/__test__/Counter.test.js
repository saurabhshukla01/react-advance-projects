import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Counter } from "../Counter";

describe("Counter Component Test", () => {
    // Tests using the test function
    // Test 0: Check if the textarea is rendered and is truthy by its data-testid
    test("render the textarea by data-testid", () => {
        const { getByTestId } = render(<Counter />);
        const textArea = getByTestId("textArea");
        expect(textArea).toBeTruthy();
    });

    // Test 1: Check if the textarea is rendered and is truthy by its placeholder text
    test("render the textarea by placeholder", () => {
        const { getByPlaceholderText } = render(<Counter />);
        const textArea = getByPlaceholderText("Type or paste your text");
        expect(textArea).toBeTruthy();
    });

    // Test 2: Verify the initial character count result is "Character: 0"
    test("render the character count result", () => {
        const { getByTestId } = render(<Counter />);
        const charLength = getByTestId("charLength");
        expect(charLength.innerHTML).toBe("Character: 0");
    });

    // Test 3: Verify the word count result element is truthy
    test("render the word count result", () => {
        const { getByTestId } = render(<Counter />);
        const wordLength = getByTestId("wordLength");
        expect(wordLength).toBeTruthy();
    });

    // Test 4: Verify the word count result element is truthy via document 
    test("render the word count result", () => {
        render(<Counter />);
        const wordLength = getByText("Word: 0");
        expect(wordLength).toBeInTheDocument();   // for this need to import "@testing-library/jest-dom";
    });

    // Optional: Tests using the `it` function

    // it("render the textarea by placeholder", () => {
    //     const { getByPlaceholderText } = render(<Counter />);
    //     const textArea = getByPlaceholderText("Type or paste your text");
    //     expect(textArea).toBeTruthy();
    // });

    // it("render the character count result", () => {
    //     const { getByTestId } = render(<Counter />);
    //     const charLength = getByTestId("charLength");
    //     expect(charLength.innerHTML).toBe("Character: 0");
    // });
});

