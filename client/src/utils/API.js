import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=";
const APIKEY = "&api-key=b9f91d369ff59547cd47b931d8cbc56b%3A0%3A74623931";

export default {
  searchArticles: function(query) {
    if (query[1].length === 4 && query[2].length === 4) {
        return axios.get(BASEURL + query[0] + "&begin_date=" + query[1] + "0101&end_date=" + query[2] + "0101" + APIKEY);
    } else { 
      return axios.get(BASEURL + query[0] + APIKEY);
    }
  },
  getArticles: function() {
    return axios.get("/api/articles")
  },
  getArticle: function(id) {
    return axios.get("/api/articles/" + id)
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id)
  },
  saveArticle: function(articleData) {
    console.log(articleData)
    return axios.post("/api/articles", articleData)
  },
};
