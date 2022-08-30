export interface Book {
    id: number;
    title: string;
    description: string;
    author: string;
    datePublished: string;
}

export const booksList: Book[] = [
    {
        id: 1,
        title: "The Passage",
        description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        author: "Justin Cronin",
        datePublished: "2021/12/01",
    },
    {
        id: 2,
        title: "Little House In The Big Woods",
        description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        author: "Laura Ingalls",
        datePublished: "2001/01/01",
    },
];
