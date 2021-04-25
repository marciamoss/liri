const router = require("express").Router();
const fetchSongController = require("../../controllers/fetchSongController");

router.route("/")
  .post(fetchSongController.getSong);


module.exports = router;
