const router = require("express").Router();
const inquiryRoutes = require("./inquiries");

// Inquiry routes
router.use("/inquiries", inquiryRoutes);

module.exports = router;
