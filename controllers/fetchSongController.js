const db = require("../models");

module.exports = {
    getSong: function(req, res) {
        res.json({
            name: 'sample',
            message: 'test.'
          });
    }
};