const {
    checkExistByUserName,
    checkExistByEmail,
    createUser,
    updateUser,
    updateUserPassword,
    getUsers,
    getUserByUserName,
    getUserByFuzzy,
    login
} = require("../../backend/controller/users");

const { checktoken } = require("../../backend/controller/token_validation");
const router = require("express").Router();

router.get("/", getUsers);
router.get("/fuzzy", getUserByFuzzy);
router.get("/:user_name", getUserByUserName);
router.get("/exist_user_name/:user_name", checkExistByUserName);
router.get("/exist_email/:email", checkExistByEmail);

router.post("/", createUser);
router.post("/login", login);

router.put("/", updateUser); //token
router.put("/pw", updateUserPassword); //token

module.exports = router;