import { Dispatch, SetStateAction } from "react";
import { Book } from "../data";

export const addBook = (
    book: Book,
    setBooks: Dispatch<SetStateAction<Book[]>>
) => {
    setBooks((prevState) => {
        return [...prevState, book];
    });
};
