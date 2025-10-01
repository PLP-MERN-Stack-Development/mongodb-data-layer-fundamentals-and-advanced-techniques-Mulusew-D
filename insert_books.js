// insert_books.js - Script to populate MongoDB with sample book data
use plp_bookstore;

db.books.insertMany([
  { title: "The Silent Patient", author: "Alex Michaelides", genre: "Thriller", published_year: 2019, price: 15.99, in_stock: true, pages: 336, publisher: "Celadon Books" },
  { title: "Educated", author: "Tara Westover", genre: "Memoir", published_year: 2018, price: 13.50, in_stock: true, pages: 352, publisher: "Random House" },
  { title: "Becoming", author: "Michelle Obama", genre: "Biography", published_year: 2018, price: 20.00, in_stock: false, pages: 448, publisher: "Crown Publishing" },
  { title: "Atomic Habits", author: "James Clear", genre: "Self-help", published_year: 2018, price: 16.00, in_stock: true, pages: 320, publisher: "Penguin Random House" },
  { title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", published_year: 1988, price: 10.00, in_stock: true, pages: 208, publisher: "HarperOne" },
  { title: "Sapiens", author: "Yuval Noah Harari", genre: "History", published_year: 2015, price: 18.99, in_stock: true, pages: 498, publisher: "Harper" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", published_year: 1937, price: 14.00, in_stock: false, pages: 310, publisher: "George Allen & Unwin" },
  { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy", published_year: 1997, price: 12.00, in_stock: true, pages: 309, publisher: "Bloomsbury" },
  { title: "The Power of Habit", author: "Charles Duhigg", genre: "Self-help", published_year: 2012, price: 14.99, in_stock: true, pages: 371, publisher: "Random House" },
  { title: "1984", author: "George Orwell", genre: "Dystopian", published_year: 1949, price: 11.50, in_stock: false, pages: 328, publisher: "Secker & Warburg" }
]);
