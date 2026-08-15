const Complaint = require("../models/Complaint");

const createComplaint = async (req, res) => {
  try {
    const { student, title, description, category } = req.body;

    const complaint = await Complaint.create({
      student,
      title,
      description,
      category,
    });

    res.status(201).json({
      success: true,
      message: "Complaint submitted successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find()
      .populate("student", "name email")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      complaints,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getComplaintById = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id).populate(
      "student",
      "name email"
    );

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    res.json({
      success: true,
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateComplaint = async (req, res) => {
  try {
    const { status, adminReply } = req.body;

    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      {
        status,
        adminReply,
      },
      {
        new: true,
      }
    );

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    res.json({
      success: true,
      message: "Complaint updated successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createComplaint,
  getComplaints,
  getComplaintById,
  updateComplaint,
};