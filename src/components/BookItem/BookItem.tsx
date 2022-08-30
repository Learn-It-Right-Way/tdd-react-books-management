import React, { useState } from "react";
import { Book } from "../../data";
import EditForm from "../Form";

type Props = {
    book: Book;
    index: number;
    handleEditBook: (selectedBook: Book) => void;
};

const BookItem = ({ book, index, handleEditBook }: Props) => {
    const [showEditForm, setShowEditForm] = useState(false);

    const handleEdit = () => {
        setShowEditForm(true);
    };

    const handleClose = () => {
        setShowEditForm(false);
    };

    return (
        <div className="book-item" data-testid="book-item">
            <h4>{book.title}</h4>
            <p data-testid={`description-${index}`}>{book.description}</p>
            <p>
                <small>{book.author}</small>
            </p>
            <p>
                <small>
                    <i>{book.datePublished}</i>
                </small>
            </p>
            <div>
                <button onClick={handleEdit}>Edit</button>
                <button>Delete</button>
            </div>
            {showEditForm && (
                <EditForm
                    handleClose={handleClose}
                    handleSave={handleEditBook}
                    formData={book}
                />
            )}
        </div>
    );
};

export default BookItem;
