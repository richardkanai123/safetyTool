import { workshops } from "@/Libs/workshops";
import { Teams } from "@/Libs/Teams";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

const DetailsForm = ({
	IncidentSubcategories,
	reg,
	errors,
}: {
	IncidentSubcategories: string[];
	reg: UseFormRegister<FieldValues>;
	errors: FieldErrors<FieldValues>;
}) => {
	const Regions = ["Eastern", "Western", "Central"];

	return (
		<div>
			<p className='text-lg font-semibold mb-4'>Incident Details</p>
			<div className='w-full px-4 py-2 mx-auto md:max-w-[700px]'>
				<label
					htmlFor='Subcategory'
					className='block'>
					Select Type
				</label>
				<select
					className='form-select w-full rounded-full p-2'
					{...reg("subCategory")}
					name='Subcategory'
					id='Subcategory'
					required>
					{IncidentSubcategories.map((item) => (
						<option
							value={item}
							key={item}>
							{item}
						</option>
					))}
				</select>

				{errors.subCategory && (
					<p className='text-red-400 my-4'>
						{errors.subCategory.message as string}
					</p>
				)}
			</div>

			<div className='w-full px-4 py-2 mx-auto md:max-w-[700px]'>
				<label
					htmlFor='dateTime'
					className='block'>
					Date and Time of Incidence
				</label>
				<input
					{...reg("dateTime")}
					name='dateTime'
					id='dateTime'
					type='datetime-local'
					className='w-full rounded-full form-input'
					required
				/>
				{errors.dateTime && (
					<p className='text-red-400 my-4'>
						{errors.dateTime.message as string}
					</p>
				)}
			</div>
			<div className='w-full px-4 py-2 mx-auto md:max-w-[700px]'>
				<label
					htmlFor='location'
					className='block'>
					Enter location
				</label>
				<input
					{...reg("location")}
					id='location'
					name='location'
					type='text'
					required
					className='w-full form-input rounded-full inline-block'
					placeholder='Location eg. K24+400 / K24 / station name'
				/>
				{errors.location && (
					<p className='text-red-400 my-4'>
						{errors.location.message as string}
					</p>
				)}
			</div>
			<div className='w-full px-4 py-2 mx-auto md:max-w-[700px]'>
				<label
					htmlFor='Workshop'
					className='block'>
					Enter Workshop
				</label>
				<select
					className='form-select w-full rounded-full p-2'
					{...reg("workshop")}
					required>
					{workshops.map((item) => (
						<option
							value={item.name}
							key={item.id}>
							{item.name}
						</option>
					))}
				</select>
				{errors.workshop && (
					<p className='text-red-400 my-4'>
						{errors.workshop.message as string}
					</p>
				)}
			</div>

			<div className='w-full px-4 py-2 mx-auto md:max-w-[700px]'>
				<label
					className='block'
					htmlFor='region'>
					Region
				</label>
				<select
					className='form-select w-full rounded-full p-2'
					id='region'
					{...reg("region")}
					name='region'
					required>
					{Regions.map((item) => (
						<option
							value={item}
							key={item}>
							{item}
						</option>
					))}
				</select>
				{errors.region && (
					<p className='text-red-400 my-4'>{errors.region.message as string}</p>
				)}
			</div>

			<div className='w-full px-4 py-2 mx-auto md:max-w-[700px]'>
				<label
					htmlFor='description'
					className='block'>
					Briefly describe the incidence
				</label>
				<textarea
					{...reg("description")}
					name='description'
					id='description'
					placeholder='Type description here'
					rows={10}
					required
					className='w-full form-textarea'></textarea>

				{errors.description && (
					<p className='text-red-400 my-4'>
						{errors.description.message as string}
					</p>
				)}
			</div>

			<div className='w-full px-4 py-2 mx-auto md:max-w-[700px]'>
				<label
					htmlFor='Factor'
					className='block'>
					Briefly describe the contributing factors
				</label>
				<textarea
					{...reg("Factor")}
					name='Factor'
					id='Factor'
					required
					placeholder='Type Factor / Possible or established cause here '
					rows={5}
					className='w-full form-textarea'></textarea>
				{errors.Factor && (
					<p className='text-red-400 my-4'>{errors.Factor.message as string}</p>
				)}
			</div>

			<div className='w-full px-4 py-2 mx-auto md:max-w-[700px]'>
				<label
					htmlFor='actionTaken'
					className='block'>
					Immediate Action taken
				</label>
				<textarea
					{...reg("actionTaken")}
					name='actionTaken'
					id='actionTaken'
					required
					placeholder='Describe the action taken here'
					rows={5}
					className='w-full form-textarea'></textarea>
				{errors.actionTaken && (
					<p className='text-red-400 my-4'>
						{errors.actionTaken.message as string}
					</p>
				)}
			</div>

			<div className='w-full px-4 py-2 mx-auto md:max-w-[700px]'>
				<label
					htmlFor='Team'
					className='block'>
					Select Responsible Team
				</label>
				<select
					className='form-select w-full rounded-full p-2'
					{...reg("Team")}
					id='Team'
					name='Team'
					required>
					{Teams.map((item) => (
						<option
							value={item}
							key={item}>
							{item}
						</option>
					))}
				</select>

				{errors.Team && (
					<p className='text-red-400 my-4'>{errors.Team.message as string}</p>
				)}
			</div>

			<div className='w-full px-4 py-2 mx-auto md:max-w-[700px]'>
				<label
					htmlFor='weather'
					className='block'>
					Describe weather conditions
				</label>
				<input
					{...reg("weather")}
					required
					name='weather'
					id='weather'
					type='text'
					className='w-full form-input rounded-full inline-block'
					placeholder='Weather eg.sunny, rainy, snowy, drizzling, heavy winds'
				/>

				{errors.weather && (
					<p className='text-red-400 my-4'>
						{errors.weather.message as string}
					</p>
				)}
			</div>
		</div>
	);
};

export default DetailsForm;
