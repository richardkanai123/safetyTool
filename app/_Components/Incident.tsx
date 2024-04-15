import { Incident } from "@/Libs/Types";

export default function IncidentItem({ reportData }: { reportData: Incident }) {
	return (
		<div className='w-full  md:min-w-[400px] shadow-md bg-slate-100 py-2 px-4 hover:bg-slate-50 flex flex-col gap-2'>
			<p className=' border-b text-lg'>
				{reportData.subCategory} at {reportData.location}
			</p>
			<div className='w-full flex items-center justify-around border mb-2 rounded'>
				<p>Time: {reportData.dateTime}</p>
				<p>Region: {reportData.region}</p>
			</div>
			<p>Cause: {reportData.Factor}</p>
			<p>{reportData.description}</p>
			<p>Action_Taken: {reportData.actionTaken}</p>
		</div>
	);
}
