const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  id: { type: Number, trim: true, required: true },
  abbreviation: { type: String, trim: true, required: true },
  city: { type: String, trim: true, required: true, unique: true },
  conference: { type: String },
  division: { type: String, trim: true, required: true, unique: true },
  fullName: { type: String, trim: true, required: true, unique: true },
  name: { type: String, trim: true, required: true, unique: true },
  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("team", teamSchema);