const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    author: {
      type: String,
      required: true,
      trim: true
    },
    publishedYear: {
      type: Number,
      required: true
    },
    genre: {
      type: [String],
      enum: [
        'Fiction',
        'Non-Fiction',
        'Mystery',
        'Thriller',
        'Science Fiction',
        'Fantasy',
        'Romance',
        'Historical',
        'Autobiography',
        'Biography',
        'Self-help',
        'Bussiness',
        'Other'
      ],
      default: ['Other']
    },
    language: {
      type: String,
      required: true,
      trim: true
    },
    country: {
      type: String,
      default: 'United States',
      trim: true
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0
    },
    summary: {
      type: String,
      default: ""
    },
    coverImageUrl: {
      type: String,
      default: ""
    }
  },
  { timestamps: true } // Adds createdAt and updatedAt automatically
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
