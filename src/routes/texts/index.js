const express = require( 'express' );
const textController = require("../../controllers/Texts");

let router = express.Router();

router.get( '/get', textController.getText);
router.post( '/save', textController.saveText);

module.exports = router;