import React, { ChangeEvent, useState } from "react";
import { Book } from "../../data";

type Props = {
    handleClose: () => void;
    handleSave: (book: Book) => void;
    formData: Book;
};

const Form = (props: Props) => {
    const [inputs, setInputs] = useState<Book>(props.formData);

    const handleSave = () => {
        props.handleSave(inputs);
        setInputs({} as Book);
        props.handleClose();
    };

    const handleValueChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs((prevInputs) => ({
            ...prevInputs,
            ...{ [name]: value },
            ...{ id: prevInputs.id || Math.random() },
        }));
    };

    return (
        <div data-testid="form">
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={inputs?.title || ""}
                    onChange={handleValueChange}
                />
            </div>
            <div>
                <textarea
                    placeholder="Description"
                    name="description"
                    value={inputs?.description || ""}
                    onChange={handleValueChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    value={inputs?.author || ""}
                    onChange={handleValueChange}
                />
            </div>
            <div>
                <input
                    type="date"
                    name="datePublished"
                    value={inputs?.datePublished || new Date().toDateString()}
                    onChange={handleValueChange}
                />
            </div>
            <div>
                <button onClick={handleSave}>Save</button>
                <button onClick={props.handleClose}>Close</button>
            </div>
        </div>
    );
};

export default Form;
