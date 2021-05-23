const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    test: {
      type: String,
    },
  },
  {
    collection: "test",
  } //The collection I want
);

const Test = mongoose.model("Test", testSchema);
module.exports = Test;
