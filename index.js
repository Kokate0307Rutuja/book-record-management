const express = require("express");
//json data import
const { users } = require("./data/users.json");

const app = express();
app.use(express.json());
const PORT = 8081;

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is up and running",
    });
});

/**
 *Route: /users
 *Method: GET
 *Description: get all users
 * Access: Public
 * Parameters : None
 */
app.get("/users", (req, res) => {
    res.status(200).json({
        success: true,
        data: users,
    });
});

/**
 *Route:/users/:id
 *Method: GET
 *Description: get single user by id
 * Access: Public
 * Parameters : id
 */
app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find((each) => each.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "user not found",
        });
    }
    return res.status(200).json({
        success: true,
        data: user,
    });
});
/**
 *Route: /users
 *Method: POST
 *Description: create new user route.
 * Access: Public
 * Parameters : None
 */
app.post("/users", (req, res) => {
    const {
        id,
        name,
        sirname,
        email,
        subscriptionType,
        subscriptionDate
    } =
    req.body;
    const user = users.find((each) => each.id === id);
    if (user) {
        return res.status(404).json({
            success: false,
            message: "user exists with this id",
        });
    }
    users.push({
        id,
        name,
        sirname,
        email,
        subscriptionType,
        subscriptionDate
    });
    return res.status(201).json({
        success: true,
        data: users,
    });
});

/**
 *Route: /users/:id
 *Method: PUT
 *Description: updating user data
 * Access: Public
 * Parameters : id
 */
app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    const user = users.find((each) => each.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "user not found",
        });
    }
    const updatedUser = users.map((each) => {
        if (each.id === id) {
            return {
                ...each,
                ...data,
            };
        }
        return each;
    });
    return res.status(200).json({
        success: true,
        data: updatedUser,
    });
});

app.get("*", (req, res) => {
    res.status(404).json({
        message: "This route does not exist",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});