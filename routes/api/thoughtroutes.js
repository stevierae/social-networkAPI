const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');


router.route('/').get(getThoughts).post(createThoughts);


router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);


router.route('/:thoughtId/tags').post(addReaction);


router.route('/:thoughtId/tags/:tagId').delete(removeReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;