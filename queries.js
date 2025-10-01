// Basic CRUD Operations
db.books.find({ genre: "Fantasy" });
db.books.find({ published_year: { $gt: 2015 } });
db.books.find({ author: "J.K. Rowling" });
db.books.updateOne({ title: "The Alchemist" }, { $set: { price: 12.00 } });
db.books.deleteOne({ title: "1984" });

// Advanced Queries
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });
db.books.find().sort({ price: 1 });
db.books.find().sort({ price: -1 });
db.books.find().limit(5).skip(0);
db.books.find().limit(5).skip(5);

// Aggregation Pipelines
db.books.aggregate([{ $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }]);
db.books.aggregate([{ $group: { _id: "$author", bookCount: { $sum: 1 } } }, { $sort: { bookCount: -1 } }, { $limit: 1 }]);
db.books.aggregate([{ $group: { _id: { $subtract: [ { $divide: [ "$published_year", 10 ] }, { $mod: [ { $divide: [ "$published_year", 10 ] }, 1 ] } ] }, count: { $sum: 1 } } }, { $sort: { _id: 1 } }]);

// Indexing
db.books.createIndex({ title: 1 });
db.books.createIndex({ author: 1, published_year: -1 });
db.books.find({ title: "The Alchemist" }).explain("executionStats");
