import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "@/Libs/Mongo";
import IncidentSchemaModel from "@/Libs/models/IncidentModel";
export async function GET(req: NextRequest) {
	await ConnectDB();

	const IncidenceId = req.nextUrl.searchParams.get("id");
	const data = await IncidentSchemaModel.findById(IncidenceId);

	if (data.length === 0) {
		return NextResponse.json(
			{ message: "No Incidents  data Found" },
			{ status: 404 },
		);
	}

	console.log(data);
	return NextResponse.json(data, { status: 200 });
}

// export async function PUT(req: NextRequest) {
// 	const data = await req.json();
// 	try {
// 		await ConnectDB();
// 		await IncidentSchemaModel.create(data);
// 		return NextResponse.json(
// 			{ message: "New Incident Added" },
// 			{ status: 201 },
// 		);
// 	} catch (error) {
// 		return NextResponse.json({ message: "error occured" }, { status: 400 });
// 	}
// }
