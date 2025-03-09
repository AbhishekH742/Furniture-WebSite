// name in caps because its a model

const mongoose = require("mongoose");
const { Schema } = mongoose;
const currentdate = new Date();
const formatteddate = currentdate.toDateString();
const ReviewsSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, //its like a foreign key
    ref: "user",
  },
  user_name: {
    type: String,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  category_type: {
    type: String,
    required: true,
  },
  reviewpara: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: formatteddate,
  },
});

module.exports = mongoose.model("review", ReviewsSchema);
