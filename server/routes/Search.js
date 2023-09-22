const express = require('express')
const router = express.Router()

const { SearchList, RespondYes, RespondNo } = require('../controllers/Search')

router.get("/", SearchList);
router.patch("/no", RespondNo);
router.patch("/yes", RespondYes);


module.exports = router