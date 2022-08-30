import React from "react";
import { render, screen, within } from "@testing-library/react";
import BooksList from "./BooksList";
import { Book, booksList } from "../../data";

const handleEditBook = (book: Book) => {};

/**
 ********************************* UNIT TESTS ******************************************X
 */
describe("BooksList Component Initial Loading", () => {
    it("should have two items added when initial loading", async () => {
        render(<BooksList books={booksList} handleEditBook={handleEditBook} />);

        const wrapper = screen.getByTestId("bookslist-wrapper");
        const books = screen.getAllByTestId("book-item");

        expect(wrapper).toBeInTheDocument();
        expect(books).toHaveLength(2);

        books.forEach((book, index) => {
            const heading = within(book).getByRole("heading", {
                name: booksList[index].title,
                exact: true,
            });

            // const description = within(book).getByText(
            //     booksList[index].description,
            //     {
            //         exact: true,
            //     }
            // );`description-${index}`

            const description = within(book).getByTestId(
                `description-${index}`
            );

            const author = within(book).getByText(booksList[index].author, {
                exact: true,
            });

            const date = within(book).getByText(
                booksList[index].datePublished,
                {
                    exact: true,
                }
            );

            const editButton = within(book).getByRole("button", {
                name: "Edit",
                exact: true,
            });

            const deleteButton = within(book).getByRole("button", {
                name: "Delete",
                exact: true,
            });

            expect(heading).toBeInTheDocument();
            expect(description).toBeInTheDocument();
            expect(author).toBeInTheDocument();
            expect(date).toBeInTheDocument();
            expect(editButton).toBeInTheDocument();
            expect(deleteButton).toBeInTheDocument();
        });
    });
});
