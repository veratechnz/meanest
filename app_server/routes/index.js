var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');


// Locations Pages
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

router.post('/locations', ctrlLocations.locationsCreate);


/* GET home page. */
router.get('/about', ctrlOthers.about);

module.exports = router;
