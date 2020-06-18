const router = require('express').Router();
const {
    getUsers,
    postUsers,
    updateUsers,
    deleteUsers
} = require('../controllers/userController')

router.get('/:userId', getUsers);
router.post('/', postUsers);
router.put('/:usersId', updateUsers);
router.delete('/:usersId', deleteUsers);



module.exports = router;