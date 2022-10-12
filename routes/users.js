const express = require("express");

const { users } = require("../data/users.json");

const router = express.Router();
/**
 *Route: /users
 *Method: GET
 *Description: get all users
 * Access: Public
 * Parameters : None
 */
router.get("/", (req, res) => {
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
router.get("/:id", (req, res) => {
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
router.post("/", (req, res) => {
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
router.put("/:id", (req, res) => {
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

/**
 * Route: /users/:id
 * Method: DELETE
 * Description: Delete a user by id
 * Access: Public
 * Parameters: id
 */
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find((each) => each.id === id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User to be deleted was not found",
        });
    }
    const index = users.indexOf(users);
    users.splice(index, 1);
    return res.status(202).json({ success: true, data: users /* message: "Deleted the user successfully"*/ });
});
module.exports = router;