import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "@/Libs/Mongo";
import IncidentSchemaModel from "@/Libs/models/IncidentModel";
export async function GET(req: NextRequest) {
	const IncidenceId = req.nextUrl.searchParams.get("id");
	await ConnectDB();

	if (IncidenceId) {
		const data = await IncidentSchemaModel.findById(IncidenceId);
		return NextResponse.json(data, { status: 200 });
	} else {
		const data = await IncidentSchemaModel.find();
		if (data.length === 0) {
			return NextResponse.json(
				{ message: "No Incidents  data Found" },
				{ status: 404 },
			);
		}
		return NextResponse.json(data, { status: 200 });
	}
}

export async function POST(req: NextRequest) {
	const data = await req.json();
	try {
		await ConnectDB();
		await IncidentSchemaModel.create(data);
		return NextResponse.json(
			{ message: "New Incident Added" },
			{ status: 201 },
		);
	} catch (error) {
		return NextResponse.json({ message: "error occured" }, { status: 400 });
	}
}
