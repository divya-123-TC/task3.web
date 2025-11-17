const express = require("express");
const app = express();

app.use(express.json()); // middleware for JSON body

// In-memory book data
let books = [
    { id: 1, title: "Book One", author: "Author A" }
];

// GET all books
app.get("/books", (req, res) => {
    res.json(books);
});

// POST add a new book
app.post("/books", (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT update book by ID
app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;

    res.json({ message: "Book updated", book });
});

// DELETE remove a book
app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);

    books = books.filter(b => b.id !== id);

    res.json({ message: "Book deleted" });
});

// Start server
app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
});