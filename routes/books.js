const express = require('express');
const {
    getAllBooks,
    getSingleBookById,
    getAllIssuedBooks,
    addNewBook,
    updateBookById,
    getSingleBookByName,
    getAllIssuedBooksWithfine
} = require('../controllers/book-controller');
const router = express.Router();

const { books } = require('../data/books.json');
const { users } = require('../data/users.json');

/**
 * Route: /books
 * Method: GET
 * Description: Get all books
 * Access: Public
 * Parameters: none
 */
router.get('/', getAllBooks);
/**
 * Route: /books/:id
 * Method: GET
 * Description: Get book by id
 * Access: Public
 * Parameters: id
 */
router.get('/:id', getSingleBookById);
router.get("/getbook/name/:name", getSingleBookByName);
/**
 * Route: /books/issued/by-users
 * Method: GET
 * Description: Get issued books
 * Access: Public
 * Parameters: none
 */

router.get("/issued/by-users", getAllIssuedBooks);
/**
 * Route: /books
 * Method: POST
 * Description: Creating new book
 * Access: Public
 * Parameters: none
 * data: auther ,name, genre, price,publisher,id
 */

router.post("/", addNewBook);
/**
 * Route: /books/:id
 * Method: PUT
 * Description: Updating a book
 * Access: Public
 * Parameters: id
 * data : auther ,name, genre, price,publisher,id etc..
 */

router.put("/:id", updateBookById);
/** -Homework-
 * Route: /books/issued/with-fine
 * Method: GET
 * Description: Get issued books with fine
 * Access: Public
 * Parameters: none
 */
router.get("/issued/with-fine", getAllIssuedBooksWithfine);

//default export
module.exports = router;