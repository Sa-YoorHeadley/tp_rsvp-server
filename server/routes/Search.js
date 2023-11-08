const express = require('express')
const router = express.Router()

const { SearchList, GetAll, GetDetails, RespondYes, RespondNo } = require('../controllers/Search')

router.get("/", SearchList);
router.get("/all", GetAll);
router.get("/details", GetDetails);
router.get("/wake", (req, res) => { 
    console.log('Wake')
    res.status(200)
    res.json({status: 'Running'})
});
router.patch("/no", RespondNo);
router.patch("/yes", RespondYes);


module.exports = router