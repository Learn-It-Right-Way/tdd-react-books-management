import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "./Search";

/**
 ********************************* UNIT TESTS ******************************************
 */
describe("Search Component Initial Loading", () => {
    it("should have a input text field for enter the search text", () => {
        render(<Search />);

        const input = screen.getByRole("textbox");
        expect(input).toHaveValue("");
        expect(input).toBeInTheDocument();
    });

    it("should have a 'Search' button for trigger the search", () => {
        render(<Search />);

        const button = screen.getByRole("button", {
            name: "Search",
            exact: true,
        });
        expect(button).toBeInTheDocument();
    });
});
