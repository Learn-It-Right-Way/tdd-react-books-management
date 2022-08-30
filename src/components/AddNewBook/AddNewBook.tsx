import React, { useState } from "react";
import { Book } from "../../data";
import Form from "../Form";

type Props = {
    handleAddBook: (book: Book) => void;
};

const AddNewBook = (props: Props) => {
    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddBook = () => {
        setShowAddForm(true);
    };

    const handleClose = () => {
        setShowAddForm(false);
    };

    return (
        <div>
            <button onClick={handleAddBook}>Add</button>
            {showAddForm && (
                <Form
                    formData={{} as Book}
                    handleClose={handleClose}
                    handleSave={props.handleAddBook}
                />
            )}
        </div>
    );
};

export default AddNewBook;
