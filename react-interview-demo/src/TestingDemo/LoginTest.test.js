import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LoginTest from "./LoginTest.jsx";

describe("Testing suite for LoginTest component", () => {
  beforEach(() => {
    render(<LoginTest />); //runs before every test in the suite
  });

  afterEach(() => {
    // some cleanup - runs after every test in the suite
  });

  test("Test if the component renders correctly", () => {
    render(<LoginTest />);
    const usernameInput = screen.getByLabelText(/Username/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /LoginTest/i })
    ).toBeInTheDocument();
  });

  test("Test if the input field works", () => {
    render(<LoginTest />);
    const usernameInput = screen.getByLabelText(/Username/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(usernameInput.value).toBe("testuser");
    expect(passwordInput.value).toBe("password123");
  });

  test("Test if the button works and Mock the call", () => {
    const consoleSpy = jest.spyOn(console, "log");

    render(<LoginTest />);

    const usernameInput = screen.getByLabelText(/Username/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const submitButton = screen.getByRole("button", { name: /LoginTest/i });

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(consoleSpy).toHaveBeenCalledWith({
      username: "testuser",
      password: "password123",
    });

    consoleSpy.mockRestore();
  });

  test("Validate username input length", () => {
    render(<LoginTest />);
    const usernameInput = screen.getByLabelText(/Username/i);
    fireEvent.change(usernameInput, { target: { value: "verylongusername" } });
    expect(usernameInput.value.length).toBeLessThanOrEqual(8);
  });

  test("Validate password input length", () => {
    render(<LoginTest />);
    const passwordInput = screen.getByLabelText(/Password/i);
    fireEvent.change(passwordInput, { target: { value: "short" } });
    expect(passwordInput.value.length).toBeLessThan(8);
  });

  test("Display error when username is not provided", () => {
    render(<LoginTest />);
    const passwordInput = screen.getByLabelText(/Password/i);
    const submitButton = screen.getByRole("button", { name: /LoginTest/i });

    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(screen.getByLabelText(/Username/i)).toBeInvalid();
  });

  test("Display error when password is not provided", () => {
    render(<LoginTest />);

    const usernameInput = screen.getByLabelText(/Username/i);
    const submitButton = screen.getByRole("button", { name: /LoginTest/i });

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.click(submitButton);

    expect(screen.getByLabelText(/Password/i)).toBeInvalid();
  });
});
