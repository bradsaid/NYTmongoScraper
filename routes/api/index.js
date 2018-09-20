const router = require("express").Router();
const router1 = require("express").Router();
const bookRoutes = require("./books");
const articleRoutes = require("./articles")

// Book routes
//router.use("/books", bookRoutes);
//module.exports = router;

router.use("/articles", articleRoutes);

module.exports = router;