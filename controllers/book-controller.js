const Book=require('../models/Book')

const getAllBook = async (req, res) => {
    try {
        const allbooks=await Book.find();
        if(allbooks.length>0){
            res.status(200).json({
                success:true,
                message:'All Books fetched successfully',
                data:allbooks
            })
        }else{
            res.status(404).json({
                success:false,
                message:'No Books found',
            })
        }
    } catch (error) {
        console.log('Error :',error) 
        res.status(500).json({
            success:false,
            message:'Internal Server Error',
            error:error.message
        })
        
    }
};

const getSingleBookByID = async (req, res) => {};
const addNewBook = async (req, res) => {
    try {
        const newlycreatedbook=await Book.create(req.body);
        if(newlycreatedbook){
            res.status(201).json({
                success:true,
                message:'Book Added Successfully ',
                data :newlycreatedbook

            })
        }
    } catch (error) {
        console.log('Error :',error) 
    }
};
const updateBook = async (req, res) => {};
const DeleteBook = async (req, res) => {};

module.exports = {
  getAllBook,
  getSingleBookByID,
  addNewBook,
  updateBook,
  DeleteBook,
};
