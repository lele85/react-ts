const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const compiler = webpack(require("./webpack.config.js"));
const express = require("express");
const app = express();

const showsDetails = [
    {
        image_url: "http://via.placeholder.com/200x200/ffc107/ffffff"
    },
    {
        image_url: "http://via.placeholder.com/200x200/ff6666/ffffff"
    },
    {
        image_url: "http://via.placeholder.com/200x200/57b6f9/ffffff"
    }
];

const shows = [
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
];

app.use(webpackDevMiddleware(compiler, {}));
app.use(express.static("dist"));

app.get("/api/shows", (req, res) => {
    res.json(shows);
});

app.get("/api/shows/:id",(req, res) => {
    res.json({
        ...shows[req.params.id],
        ...showsDetails[req.params.id]
    });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"))