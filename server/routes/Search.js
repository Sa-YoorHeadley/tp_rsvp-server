const express = require("express");
const router = express.Router();

const {
  SearchList,
  GetAll,
  GetDetails,
  GetPendings,
  GetYeses,
  GetNos,
  RespondYes,
  RespondNo,
} = require("../controllers/Search");

router.get("/", SearchList);
router.get("/all", GetAll);
router.get("/details", GetDetails);
router.get("/pendings", GetPendings);
router.get("/yeses", GetYeses);
router.get("/nos", GetNos);
router.get("/wake", (req, res) => {
  res.status(200);
  res.json({ status: "Awake" });
});
router.patch("/no", RespondNo);
router.patch("/yes", RespondYes);

module.exports = router;
