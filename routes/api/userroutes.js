const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,

} = require('../../controllers/userscontrollers');

// /api/users
router.route('/').get(getUser).post(createUser);

// /api/users/:userId
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

router.route('/:userId/friends/:friendId')

    .post(addFriend)
    .delete(removeFriend)

module.exports = router;