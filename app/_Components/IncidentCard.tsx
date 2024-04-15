import { Incident } from "../../Libs/Types";
import Link from "next/link";
export default function IncidentCard({ Item }: { Item: Incident }) {
	const {
		subCategory,
		dateTime,
		severity,
		location,
		description,
		region,
		Team,
	} = Item;

	return (
		<Link
			href={`/Incidents/${Item._id}?id=${Item._id}`}
			scroll={true}
			className='w-full text-main shadow-sm transition-all ease-linear duration-400 cursor-pointer hover:shadow-xl bg-gray-50  p-4  gap-2 flex flex-col text-base md:w-[350px] rounded-lg hover:rounded-none'>
			<div className='w-full flex text-red-400 justify-around p-2'>
				{severity < 3 && (
					<p className='text-lg font-bold text-green-400'>Low</p>
				)}
				{severity === 3 && (
					<p className='text-lg font-bold text-yellow-400'>Moderate</p>
				)}
				{severity > 3 && <p className='text-lg font-bold text-red-400'>High</p>}
			</div>
			<p className='text-lg font-semibold'>{subCategory}</p>
			<p className='italic'>{location}</p>
			<p>
				{Team}, {region}
			</p>
			<p>{dateTime}</p>
			<p className='text-sm'>{description}</p>
		</Link>
	);
}
