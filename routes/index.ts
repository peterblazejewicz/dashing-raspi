'use strict';

import * as express from 'express';
const router:express.Router = express.Router();

/* GET sample. */
router.get('/sample', (req, res, next) => {
  res.render('sample');
});

/* GET sampletv. */
router.get('/sampletv', (req, res, next) => {
  res.render('sampletv');
});

module.exports = router;
