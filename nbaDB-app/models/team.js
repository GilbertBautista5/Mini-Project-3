const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  id: { type: Number, trim: true },
  abbreviation: { type: String, trim: true },
  city: { type: String, trim: true },
  conference: { type: String },
  division: { type: String, trim: true},
  fullName: { type: String, trim: true  },
  name: { type: String, trim: true },
  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("team", teamSchema);