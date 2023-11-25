const express = require("express")
const app = express()
app.get('/', (req, res) => {
    res.send("Express is a web application framework for Node.js. It is designed to simplify the process of building web applications and APIs by providing a set of features and tools for handling common tasks, such as routing, middleware, and template engines. Express is known for its simplicity and flexibility, making it a popular choice for developers working with Node.js")
})
app.listen(5600, () => {
    try {
        console.log("server started");
    }
    catch {
        console.log("404 error !!");
    }
})