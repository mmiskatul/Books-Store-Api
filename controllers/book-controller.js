const Book = require("../models/Book");

const getAllBook = async (req, res) => {
  try {
    const allbooks = await Book.find();
    if (allbooks.length > 0) {
      res.status(200).json({
        success: true,
        message: "All Books fetched successfully",
        data: allbooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No Books found",
      });
    }
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getSingleBookByID = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const BookdetailsById = await Book.findById(getCurrentBookId);
    if (!BookdetailsById) {
      return res.status(404).json({
        success: false,
        message: "Book Is Not Found! Please try with a deferent Id",
      });
    }
    res.status(200).json({
      success: true,
      data: BookdetailsById  
    });
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
const addNewBook = async (req, res) => {
  try {
    const newlycreatedbook = await Book.create(req.body);
    if (newlycreatedbook) {
      res.status(201).json({
        success: true,
        message: "Book Added Successfully ",
        data: newlycreatedbook,
      });
    }
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
const updateBook = async (req, res) => {
    
};
const DeleteBook = async (req, res) => {
    try {
        const getCurrentBookId=req.params.id;
        const deletedBook=await Book.findByIdAndDelete(getCurrentBookId);
        if(!deletedBook){
            return res.status(404).json({
                success:false,
                message: "Book is NOt Found "
            })
        }
        res.status(200).json({
            success:true,
            message:"Book Deleted Successfully",
            data:deletedBook
        })
    } catch (error) {
    console.log("Error :", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  getAllBook,
  getSingleBookByID,
  addNewBook,
  updateBook,
  DeleteBook,
};
