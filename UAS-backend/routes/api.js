const AlumniController = require("../controllers/AlumniController");
const express = require("express");
const router = express.Router();


router.get('/hello', (req, res) => {
    res.send("Hello Express");
})

router.get("/alumni", AlumniController.index);
router.post("/alumni", AlumniController.store);
router.put("/alumni/:id", AlumniController.update);
router.delete("/alumni/:id", AlumniController.delete);
router.get("/alumni/:id", AlumniController.show);
router.get('/alumni/search/:name', AlumniController.search);
router.get('/alumni/status/fresh-graduate', AlumniController.freshGraduate);
router.get('/alumni/status/employed', AlumniController.employed);
router.get('/alumni/status/unemployed', AlumniController.unemployed);


module.exports = router;