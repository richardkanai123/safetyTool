import { CostImplicationItem, Incident } from "@/Libs/Types";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from "react";

// gets data by ID
async function GetIncidentDetails(IncidenceId: string) {
	const res = await fetch(
		`${process.env.BASEAPIURL}/incidences?id=${IncidenceId}`,
		{
			cache: "no-store",
		},
	);

	if (res.status != 200) {
		throw new Error("Fetch error Occured");
	}
	const IncidentData = await res.json();

	return IncidentData;
}

function CalculateCost(costData: CostImplicationItem[]): number {
	let totalCost = 0;
	if (costData.length != 0) {
		costData.map((cost) => {
			totalCost += cost.quantity * cost.unit_cost;
		});
		return totalCost;
	}
	return totalCost;
}

export default async function IncidentPage({ params }: { params: any }) {
	const data: Incident = await GetIncidentDetails(params.id);

	if (!data) {
		return (
			<h1 className='text-red-400 text-center'>Error! Incident Not Found! </h1>
		);
	}

	const {
		dateTime,
		people_involved,
		severity,
		location,
		region,
		reportedBy,
		Team,
		description,
		Factor,
		weather,
		actionTaken,
		category,
		subCategory,
		cost_implication,
	} = data;

	return (
		<div className='w-full text-main flex flex-col px-4 py-4 animate-in duration-800 fade-in animate-out slide-out delay-200 transition-all ease-in '>
			<div className='mt-2 mb-4 w-full flex items-center bg-slate-300 justify-between p-4 rounded-lg'>
				<Link
					className='text-lg font-bold hover:underline flex items-center gap-1 transition-all delay-100 group '
					href='/Incidents'
					replace>
					<IoMdArrowRoundBack className='text-lg font-bold hover:underline flex items-center gap-1 group-hover:animate-bounce ' />
					Go Back
				</Link>

				<p className='font-bold'> {subCategory}</p>
			</div>

			<div className='w-full flex flex-col md:flex-row justify-around mb-4 p-2  border'>
				{severity < 3 && (
					<p className='text-xl font-bold text-green-400'>Low</p>
				)}
				{severity === 3 && (
					<p className='text-xl font-bold text-yellow-600'>Moderate</p>
				)}
				{severity > 3 && <p className='text-xl font-bold text-red-400'>High</p>}
				<span className='font-semibold'>Time: {dateTime}</span>
				<span className='font-semibold'>Location: {location}</span>
			</div>

			<div className='w-full flex flex-col md:flex-row gap-4 p-2'>
				<div className='w-full mb-4'>
					<p className='font-semibold mb-2'>Incident: {subCategory}</p>
					<h3 className='text-lg font-bold'>Description:</h3>
					<p className='my-2'>{description}</p>
					<p>Injuries: {people_involved.injured} </p>
					<p>Fatality: {people_involved.fatalities} </p>
					<p>Staff Involved: {people_involved.staff_involved ? "Yes" : "No"}</p>
				</div>

				<div className='w-full mb-4'>
					<h3 className='text-lg font-bold'>Action:</h3>
					<p>{actionTaken}</p>
				</div>

				<div className='w-full mb-4'>
					<h3 className='text-lg font-bold'>Possible Cause:</h3>
					<p>{Factor}</p>
				</div>

				<div className='w-full mb-4 flex flex-col gap-2'>
					<h3 className='text-lg font-bold'>Other Details Details:</h3>
					<p>Weather: {weather}</p>
					<p>Department: {Team}</p>
					<p>Region: {region}</p>
					<p>ReportedBy: {reportedBy ? reportedBy : "Anonymous"}</p>
				</div>
			</div>

			<div className='w-full mt-4 mx-auto max-w-[750px]'>
				<h3 className='text-lg font-bold my-6'>Cost Implication:</h3>
				{cost_implication ? (
					<table className='w-full table-auto pb-4'>
						<thead>
							<tr className='p-2'>
								<th>Item</th>
								<th className='hidden md:block'>Units</th>
								<th>Qnt</th>
								<th>Unit Price</th>
								<th>Total</th>
							</tr>
						</thead>

						<tbody>
							{cost_implication?.map((item) => (
								<tr
									key={item.item}
									className='odd:bg-white even:bg-slate-50 p-5 text-center spacing-y-4'>
									<td>{item.item}</td>
									<td className='hidden md:block'>{item.measure}</td>
									<td>{item.quantity}</td>
									<td>{item.unit_cost}</td>
									<td>{item.quantity * item.unit_cost}</td>
								</tr>
							))}
						</tbody>

						<tfoot>
							<tr className='p-2 text-xl font-extrabold text-center'>
								<td>Total Cost </td>
								<td className='hidden md:block'></td>
								<td></td>
								<td></td>
								<td>{CalculateCost(cost_implication)}</td>
							</tr>
						</tfoot>
					</table>
				) : (
					<>
						<p className='text-lg my-2'>Cost Implication not added</p>
						<button className='bg-main text-white rounded shadow-md hover:opacity-70 text-lg font-semibold mx-auto p-3 w-[250px] hover:bg-gradient-to-b  from-current to-amber-800 '>
							Add Cost Implication
						</button>
					</>
				)}
			</div>
		</div>
	);
}

const sampleIncident = {
	subCategory: "Electrical Fault",
	dateTime: "2024-04-13T14:30:00Z",
	location: "Mombasa Substation Line 2",
	workshop: "Port Reitz",
	region: "Eastern",
	description:
		"A malfunctioning electrical wire caused sparks and minor smoke near a control panel.",
	Factor: "Faulty equipment",
	actionTaken:
		"Equipment powered down and isolated. Maintenance team notified.",
	Team: "Power",
	weather: "Clear",
	people_involved: {
		injuries: 0,
		fatalities: 0,
		staff_involved: false,
	},
	cost_implication: [
		{
			item: "Replacement control panel wire",
			quantity: 1,
			measure: "Meter",
			unit_cost: 50.0,
		},
	],
	severity: 2,
	reportedBy: "John Smith",
};
