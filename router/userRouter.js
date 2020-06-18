const router = require('express').Router();
const {
    getUsers,
    postUsers,
    updateUsers,
    deleteUsers
} = require('../controllers/userController')

router.get('/:userId', getUsers);
router.post('/:userId', postUsers);
router.put('/:usersId', updateUsers);
router.delete('/users', deleteUsers);



module.exports = router;