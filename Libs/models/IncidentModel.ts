import mongoose, { Schema } from "mongoose";

// Create a Mongoose schema based on the interface
const incidentSchema = new Schema({
	subCategory: { type: String, required: true },
	dateTime: { type: String, required: true },
	location: { type: String, required: true },
	workshop: { type: String, required: true },
	region: {
		type: String,
		enum: ["Western", "Eastern", "Central"],
		required: true,
	},
	description: { type: String, required: true },
	Factor: { type: String, required: true },
	actionTaken: { type: String, required: true },
	Team: { type: String, required: true },
	weather: { type: String, required: true },
	people_involved: {
		injuries: { type: Number, min: 0, default: 0 },
		fatalities: { type: Number, min: 0, default: 0 },
		staff_involved: { type: Boolean, default: false },
	},
	cost_implication: [
		{
			item: { type: String, required: false },
			quantity: { type: Number, required: false },
			measure: { type: String, required: false },
			unit_cost: { type: Number, required: false },
		},
	],
	severity: { type: Number, required: true },
	reportedBy: { type: String, default: "Anonymous" },
});

const IncidentSchemaModel =
	mongoose.models.Incidents || mongoose.model("Incidents", incidentSchema);

export default IncidentSchemaModel;
