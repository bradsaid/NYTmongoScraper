const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  headline: { type: Object },
  web_url: { type: String },
  date: { type: Date, default: Date.now },
  id: {type: String}
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;