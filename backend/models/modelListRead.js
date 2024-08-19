import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ['read', 'reading', 'want to read'],
    required: true,
    default: 'want to read',
  },
}, {
  timestamps: true,  // Enable timestamps (createdAt and updatedAt fields)
});

export const listRead = mongoose.model("listRead", schema);
