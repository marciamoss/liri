const router = require("express").Router();
const songRoutes = require("./songSpotify");

router.use("/songSpotify", songRoutes);

module.exports = router;
