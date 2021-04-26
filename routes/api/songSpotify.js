const router = require("express").Router();
const fetchSongController = require("../../controllers/fetchSongController");

router.route("/:id")
  .get(fetchSongController.getSong);


module.exports = router;
