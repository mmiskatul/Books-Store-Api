const {
  getAllBook,
  getSingleBookByID,
  addNewBook,
  updateBook,
  DeleteBook,
} = require("../controllers/book-controller");
const express = require("express");

// create Express Router
const router = express.Router();

// all the Route related to the book
router.get("/get",getAllBook);
router.get("/get/:id",getSingleBookByID);
router.post("/add",addNewBook);
router.put("/update/:id",updateBook);
router.delete("/delete/:id",DeleteBook);


module.exports =router;