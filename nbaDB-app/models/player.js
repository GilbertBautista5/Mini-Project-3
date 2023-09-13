const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  id: { type: Number, trim: true, required: true },
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true, unique: true },
  position: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("player", playerSchema);