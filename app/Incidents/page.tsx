import { Incident } from "@/Libs/Types";
import IncidentCard from "../_Components/IncidentCard";

const FetchVerifiedReports = async () => {
	const url: string | undefined = process.env.BASEAPIURL;
	if (url === "" || url === undefined) {
		throw new Error("Could not Link to database");
	}
	const res = await fetch(url + "/incidences", {
		cache: "reload",
	});
	
	 if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
	const data: Incident[] = await res.json();
	return data;
};

export default async function IncidentsPage() {
	const data = await FetchVerifiedReports();

		if (!data) return <h1>No data found</h1>;
	if (data)
	{
		return (
			
				<div className='text-main w-full px-2 flex flex-col  md:flex-row md:flex-wrap  justify-center gap-4 py-6'>
					<p>Data was found</p>
				</div>
			
		);
	}
}
