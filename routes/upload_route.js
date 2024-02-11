const express = require('express');
const router = express.Router();
const upload = require("../middleware/multer_middleware"); // Changed from 'upl' to 'upload'
const uploadf = require("../controllers/upload_controller");

router.route("/").post(upload.single('file'), uploadf); // Changed 'upl.single' to 'upload.single'

module.exports = router;
