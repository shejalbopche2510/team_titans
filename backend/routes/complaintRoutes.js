const express = require("express");

const {
  createComplaint,
  getComplaints,
  getComplaintById,
  updateComplaint,
} = require("../controllers/complaintController");

const router = express.Router();

router.post("/", createComplaint);
router.get("/", getComplaints);
router.get("/:id", getComplaintById);
router.put("/:id", updateComplaint);

module.exports = router;