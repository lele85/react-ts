const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const compiler = webpack(require("./webpack.config.js"));
const express = require("express");
const app = express();

app.use(webpackDevMiddleware(compiler, {}));
app.use(express.static("dist"));

app.get("/api/shows", (req, res) => {
    res.json([
        {
            id: 0,
            title: "First show"
        },
        {
            id: 1,
            title: "Second show"
        },
        {
            id: 2,
            title: "Third show"
        }
    ]);
})
app.listen(3000, () => console.log("Example app listening on port 3000!"))