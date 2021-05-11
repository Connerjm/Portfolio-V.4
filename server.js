//Imports.
const express = require("express");
const path = require("path");

//Set port and app.
const PORT = process.env.PORT || 8008;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production")
{
    app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res)
{
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Start server.
app.listen(PORT, function()
{
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});