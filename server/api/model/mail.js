const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MailSchema = new Schema (
  {
    id: int,
    firstname: String,
    lastname: String,
    mail: String,
    message: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mail", MailSchema);

