const express = require("express");
const { getAllUsers, getSingleUserById, createNewUser, updateUserById, deleteUser, getSubscriptionDetailsById } = require("../controllers/user-controller");

const { users } = require("../data/users.json");

const router = express.Router();
/**
 *Route: /users
 *Method: GET
 *Description: get all users
 * Access: Public
 * Parameters : None
 */
router.get("/", getAllUsers);

/**
 *Route:/users/:id
 *Method: GET
 *Description: get single user by id
 * Access: Public
 * Parameters : id
 */
router.get("/:id", getSingleUserById);
/**
 *Route: /users
 *Method: POST
 *Description: create new user route.
 * Access: Public
 * Parameters : None
 */
router.post("/", createNewUser);

/**
 *Route: /users/:id
 *Method: PUT
 *Description: updating user data
 * Access: Public
 * Parameters : id
 */
router.put("/:id", updateUserById);

/**
 * Route: /users/:id
 * Method: DELETE
 * Description: Delete a user by id
 * Access: Public
 * Parameters: id
 */
router.delete("/:id", deleteUser);
/**
 * Route: /users/subscription-details/:id
 * Method: GET
 * Description: Get all user subscription details
 * Access: Public
 * Parameters:id 
 */

router.get("/subscription-details/:id", getSubscriptionDetailsById);

module.exports = router;