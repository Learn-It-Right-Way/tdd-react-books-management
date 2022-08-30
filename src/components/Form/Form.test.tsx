import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Book } from "../../data";
import Form from "./Form";

const handleClose = jest.fn();
const handleSave = jest.fn((book: Book) => {});

describe("Form Component Initial Loading", () => {
    it("Should have default value as empty in all fields", async () => {
        render(
            <Form
                formData={{} as Book}
                handleClose={handleClose}
                handleSave={handleSave}
            />
        );

        const title = screen.getByPlaceholderText("Title", { exact: true });
        expect(title).toHaveValue("");
        expect(title).toBeInTheDocument();

        // TODO: For Other Input Fields
    });
});

describe("Form Component Event Handling", () => {
    it("Should be typeable. User can able to type within input fields", async () => {
        const user = userEvent.setup();
        const title = screen.getByPlaceholderText("Title", { exact: true });

        render(
            <Form
                formData={{} as Book}
                handleClose={handleClose}
                handleSave={handleSave}
            />
        );

        await user.type(title, "My Test Book");
        expect(title).toHaveValue("My Test Book");

        // TODO: For Other Input Fields
    });
});
