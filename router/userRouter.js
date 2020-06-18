const router = require("express").Router();
const {
  getUsers,
  postUsers,
  updateUsers,
  deleteUsers,
} = require("../controllers/userController");

router.post("/", postUsers);
router.get("/:userId", getUsers);
router.put("/:usersId", updateUsers);
router.delete("/:usersId", deleteUsers);

module.exports = router;
