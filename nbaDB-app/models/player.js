const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  id: { type: Number, trim: true },
  first_name: { type: String, trim: true  },
  last_name: { type: String, trim: true },
  position: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("player", playerSchema);