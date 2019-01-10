const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema (
  {
    id: int,
    login: String,
    password: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
