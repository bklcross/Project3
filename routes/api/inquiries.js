const router = require("express").Router();
const inquiriesController = require("../../controllers/inquiriesController");

// Matches with "/api/inquiries"
router.route("/")
  .get(inquiriesController.findAll)
  .post(inquiriesController.create);

// Matches with "/api/inquiries/:id"
router
  .route("/:id")
  .get(inquiriesController.findById)
  .put(inquiriesController.update)
  .delete(inquiriesController.remove);

module.exports = router;
