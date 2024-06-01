const router = require('express').Router();

const noteRouter = require('./notes');

router.use('./notes', noteRouter);

router.get('/')

module.exports = router;