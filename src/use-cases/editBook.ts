import { Dispatch, SetStateAction } from "react";
import { Book } from "../data";

export const editBook = (
    book: Book,
    setBooks: Dispatch<SetStateAction<Book[]>>
) => {
    console.log("---book---", book);

    setBooks((prevState) => {
        return prevState.map((prevBook) => {
            if (prevBook.id === book.id) {
                return { ...prevBook, ...book };
            }

            return prevBook;
        });
    });
};
