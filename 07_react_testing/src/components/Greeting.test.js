import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

/* tests could be grouped into one testing suite using global describe()  */
describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    /*  get() after screen. will throw an error if an element is not found
            query() will not do that
            find() will return a promise 
        */

    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders It's good to see you when button is NOT clicked", () => {
    render(<Greeting />);

    const goodToSeeYouElement = screen.getByText("It's good to see you!");

    expect(goodToSeeYouElement).toBeInTheDocument();
  });

  test("renders It's good to see you when button is clicked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const changedTextElement = screen.getByText("Changed!");
    expect(changedTextElement).toBeInTheDocument();
  });

  test("does not render good to see you! if button was cliked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const changedTextElement = screen.queryByText("It's good to see you!");
    expect(changedTextElement).toBeNull();
  });
});
