import React, { useState, useEffect } from "react";
import axios from "axios";

const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey`;
const Books = () => {
  const [books, setBooks] = useState([]);
  return <div>Books</div>;
};

export default Books;
