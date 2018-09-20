import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "&api-key=b9f91d369ff59547cd47b931d8cbc56b%3A0%3A74623931";


export default {
  // Searches Articles 
  searchArticles: function(query) {
    return axios.get(BASEURL + "SOCCER" + APIKEY);  // + query
  },
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles")
  },
  // Gets aritcle with given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id)
  },
  // Delete article with given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id)
  },
  saveArticle: function(articleData) {
    console.log(articleData)
    return axios.post("/api/articles", articleData)
    
  },


  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
