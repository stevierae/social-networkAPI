const router = require('express').Router();
const {
  getThought,
  getThoughts,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtscontrollers');


router.route('/').get(getThoughts).post(createThought);


router
  .route('/:thoughtId')
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);


router.route('/:thoughtId/reactions').post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;