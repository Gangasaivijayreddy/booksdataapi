const mongoose=require("mongoose")
const express=require("express")
const cors = require("cors");
const app=express()
const {connectDataBase} =require("./db/db.connection")
const booksModel=require("./models/books.model")


connectDataBase()
app.use(express.json())
app.use(cors());

// 1,2

async function addBookData(bookData){
try {
    const newBook=await new booksModel(bookData)
    console.log(bookData)
    const savedBook=await newBook.save()
    console.log(savedBook)
    return savedBook
} catch (error) {
    console.log("an error occured while trying to add book to data base",error)
}
}

app.post("/books/addBook",async(req,res)=>{
    try {
        const savedBook=await addBookData(req.body)
        if(savedBook){
        res.status(201).json({message: "new book added successfully",savedBook})
        }else{
          res.status(404),json({message: "new book not found "})  
        }
    } catch (error) {
        res.status(500).json({message:"some thing went wrong while adding the book"})
    }
})

//3. read all the books in the data base 

app.get("/books/allbooks",async(req,res)=>{
    try {
        const allBooks=await booksModel.find()
        if(allBooks.length>0){
            res.status(200).json({message :"successfully fetched all books from data base",allBooks})
        }else{
          res.status(404).json({error :"books not found",error})  
        }
       
    } catch (error) {
       res.status(500).json({error :"some thing went wrong while fetching the data",error})  
    }
}) 

//4. read all the books by title in the data base 

app.get("/books/:allbooksbytitle",async(req,res)=>{
    try {
        const bookTitle=await req.params.allbooksbytitle
        const allBooks=await booksModel.find({title:bookTitle})
        if(allBooks.length>0){
            res.status(200).json({message :"successfully fetched all books from data base",allBooks})
        }else{
          res.status(404).json({error :"books not found",error})  
        }
       
    } catch (error) {
       res.status(500).json({error :"some thing went wrong while fetching the data",error})  
    }
}) 


//5. read all the books by author in the data base 

app.get("/books/author/:author",async(req,res)=>{
    try {
        const bookAuthor=await req.params.author
        const allBooks=await booksModel.find({author:bookAuthor})
        if(allBooks.length>0){
            res.status(200).json({message :"successfully fetched all books from data base",allBooks})
        }else{
          res.status(404).json({error :"books not found",error})  
        }
       
    } catch (error) {
       res.status(500).json({error :"some thing went wrong while fetching the data",error})  
    }
})

//6. read all the books which are of bussiness genre

app.get("/books/genre/business", async (req, res) => {
  try {
    const allBooks = await booksModel.find({ genre: "Bussiness" });

    if (allBooks.length > 0) {
      res.status(200).json({
        message: "Successfully fetched all books from database",
        allBooks,
      });
    } else {
      res.status(404).json({ error: "Books not found" });
    }
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({
      error: "Something went wrong while fetching the data",
      details: error.message,
    });
  }
});


//7. read all the books which are released in the year 2012

app.get("/books/publishedyear/year", async (req, res) => {
  try {
    const allBooks = await booksModel.find({ 
publishedYear: 2012 });

    if (allBooks.length > 0) {
        console.log("hai vijay")
      res.status(200).json({
        message: "Successfully fetched all books from database",
        allBooks,
      });
    } else {
      res.status(404).json({ error: "Books not found" });
    }
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({
      error: "Something went wrong while fetching the data",
      details: error.message,
    });
  }
});

// 8.update the rating by id

app.post("/books/update/:id",async (req,res)=>{
    try {
       
       const bookToUpdate= await booksModel.findOneAndUpdate({_id:req.params.id},req.body,{new:true} )
             res.status(200).json({
        message: "Successfully  updated the rating",
        bookToUpdate,
      });
    } catch (error) {
        console.log(error)
        res.status(500).json({
      error: "Something went wrong updating the rating",
      details: error.message,
    });
    }
})


// 9.update the rating by id

app.post("/books/updatedata/:title",async (req,res)=>{
    try {
       
       const bookToUpdate= await booksModel.findOneAndUpdate({title:req.params.title},req.body,{new:true} )
             res.status(200).json({
        message: "Successfully  updated data",
        bookToUpdate,
      });
    } catch (error) {
        console.log(error)
        res.status(500).json({
      error: "Something went wrong updating the rating",
      details: error.message,
    });
    }
})


// 10. delete data by id

app.delete("/books/delete/:id",async (req,res)=>{
    try {
        const deletedData=await booksModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
        message: "Successfully  updated data",
        deletedData})
    } catch (error) {
        console.log(error)
        res.status(500).json({
      error: "Something went wrong deleting the data",
      details: error.message,
    }); 
    }
})


const PORT=3000

app.listen(PORT,()=>{
    console.log("server running in thr port",PORT)
})
