const Doctor = require("../../models/Doctor");

const approved = async (req, res) => {
    try {
        const { doctorId } = req.body;

        if (!doctorId) {
            return res.status(400).json({ message: "Doctor ID is required" });
        }

        const doctor = await Doctor.findByIdAndUpdate(
            doctorId,
            { is_approved: true, updatedAt: new Date() },
            { new: true }
        );

        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }

        res.status(200).json({ message: "Doctor approved successfully", doctor });
    } catch (error) {
        console.error("Error approving doctor:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { approved };
