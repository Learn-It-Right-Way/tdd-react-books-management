import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddNewBook from "./AddNewBook";
import { Book } from "../../data";

const handleAddBook = jest.fn((book: Book) => {});

/**
 ********************************* UNIT TESTS ******************************************
 */
describe("Add New Book Component Initial Loading", () => {
    it("should have 'Add' button when initial loading", async () => {
        render(<AddNewBook handleAddBook={handleAddBook} />);

        const button = screen.getByRole("button", { name: "Add", exact: true });
        expect(button).toBeInTheDocument();
    });

    it("should not have the form when initial loading", async () => {
        render(<AddNewBook handleAddBook={handleAddBook} />);

        const form = screen.queryByTestId("form");
        expect(form).not.toBeInTheDocument();
    });
});

describe("Add New Book Component Event Handling", () => {
    it("should not have the form when initial loading", async () => {
        const user = userEvent.setup();
        render(<AddNewBook handleAddBook={handleAddBook} />);

        await user.click(
            screen.getByRole("button", { name: "Add", exact: true })
        );

        const form = screen.queryByTestId("form");
        expect(form).toBeInTheDocument();
    });
});
