# task3.web
Project Title:

Task 3 – REST API for Managing Books

📌 Objective

Build a simple REST API using Node.js and Express to perform CRUD operations (Create, Read, Update, Delete) on a list of books.
The data is stored in memory, no database required.


---

🚀 Features

✅ Get all books

✅ Add a new book

✅ Update a book by ID

✅ Delete a book by ID

✔ JSON responses

✔ Runs on localhost (port 3000)

✔ Tested using PowerShell curl commands



---

🛠 Tech Stack

Node.js

Express.js

JavaScript

curl (PowerShell) for API testing



---

📂 Project Structure

task3_api/
│── node_modules/
│── package.json
│── package-lock.json
│── server.js   ← main API file


---

📦 Installation & Setup

✔ Step 1: Initialize project

npm init -y

✔ Step 2: Install Express

npm install express

✔ Step 3: Run the Server

node server.js

You should see:

🚀 Server running on port 3000


---

🖥 API Endpoints

1️⃣ GET /books – Get all books

Command:

curl http://localhost:3000/books

Response Example:

[
  { "id": 1, "title": "Book One", "author": "Author A" }
]


---

2️⃣ POST /books – Add a new book

PowerShell curl command:

curl -Method POST -Uri "http://localhost:3000/books" -Headers @{"Content-Type"="application/json"} -Body '{"title":"Divya Book","author":"Divya"}'

Response:

{
  "id": 2,
  "title": "Divya Book",
  "author": "Divya"
}


---

3️⃣ PUT /books/:id – Update a book

Update book with ID 2:

curl -Method PUT -Uri "http://localhost:3000/books/2" -Headers @{"Content-Type"="application/json"} -Body '{"title":"Updated Title"}'

Response:

{
  "message": "Book updated",
  "book": { "id": 2, "title": "Updated Title", "author": "Divya" }
}


---

4️⃣ DELETE /books/:id – Delete a book

Delete book with ID 2:

curl -Method DELETE -Uri "http://localhost:3000/books/2"

Response:

{ "message": "Book deleted" }


---

🏁 Outcome

By completing this task, you learned:

✨ How to build APIs using Express

✨ Handling GET, POST, PUT, DELETE requests

✨ Sending and receiving JSON

✨ Running servers with Node.js

✨ Testing APIs using curl
