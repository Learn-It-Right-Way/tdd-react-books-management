import React, { useState } from "react";
import { Book } from "../../data";
import BookItem from "../BookItem";

import "./styles.css";

type Props = {
    books: Book[];
    handleEditBook: (book: Book) => void;
};

const BooksList = (props: Props) => {
    return (
        <div className="bookslist-wrapper" data-testid="bookslist-wrapper">
            {props.books.map((book, index) => {
                return (
                    <BookItem
                        book={book}
                        index={index}
                        key={book.id}
                        handleEditBook={props.handleEditBook}
                    />
                );
            })}
        </div>
    );
};

export default BooksList;
