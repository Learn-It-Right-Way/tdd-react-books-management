import React, { useState } from "react";
import "./App.css";
import AddNewBook from "./components/AddNewBook";
import BooksList from "./components/BooksList";
import Search from "./components/Search";
import { Book, booksList } from "./data";
import { addBook, editBook } from "./use-cases";

function App() {
    const [books, setBooks] = useState(booksList);

    const handleAddBook = (book: Book) => {
        addBook(book, setBooks);
    };

    const handleEditBook = (book: Book) => {
        editBook(book, setBooks);
    };

    return (
        <main className="main-wrapper">
            <h1>Bookish</h1>
            <AddNewBook handleAddBook={handleAddBook} />
            <Search />
            <BooksList books={books} handleEditBook={handleEditBook} />
        </main>
    );
}

export default App;
