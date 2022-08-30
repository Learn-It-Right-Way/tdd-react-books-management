import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import BooksList from "./components/BooksList";
import Search from "./components/Search";

/**
 ********************************* INTEGRATION TESTS ******************************************
 */
describe("Bookish App Initial Loading", () => {
    it("should have 'Bookish' heading", async () => {
        render(<App />);

        const h1 = screen.getByRole("heading", {
            name: "Bookish",
            exact: true,
        });
        expect(h1).toBeInTheDocument();
    });

    it("should have 'Add' button when initial loading", async () => {
        render(<App />);

        const button = screen.getByRole("button", { name: "Add", exact: true });
        expect(button).toBeInTheDocument();
    });

    it("should have a input text field for enter the search text", () => {
        render(<App />);

        const input = screen.getByRole("textbox");
        expect(input).toHaveValue("");
        expect(input).toBeInTheDocument();
    });

    it("should have a 'Search' button for trigger the search", () => {
        render(<App />);

        const button = screen.getByRole("button", {
            name: "Search",
            exact: true,
        });
        expect(button).toBeInTheDocument();
    });

    it("should have two items added when initial loading", async () => {
        render(<App />);

        const wrapper = screen.getByTestId("bookslist-wrapper");
        expect(wrapper).toBeInTheDocument();
        expect(wrapper.childNodes).toHaveLength(2);
    });
});
