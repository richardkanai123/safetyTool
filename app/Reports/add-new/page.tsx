"use client";
import { IncidentCategories } from "@/Libs/categories";
import React, { useState } from "react";
import PeopleInvolvedForm from "@/app/_Components/PeopleInvolved";
import DetailsForm from "@/app/_Components/DetailsForm ";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import { revalidatePath } from "next/cache";
// import { addIncidence } from "@/Libs/Actions";

// validation schema
const schema = z.object({
	subCategory: z.string(),
	dateTime: z.string(),
	location: z.string(),
	workshop: z.string(),
	region: z.enum(["Western", "Eastern", "Central"]),
	description: z.string().min(30, "Too short, please elaborate more"),
	Factor: z.string().min(20, "Too short, please elaborate more"),
	actionTaken: z.string().min(20, "Too short, please elaborate more"),
	Team: z.enum([
		"Power",
		"Signal",
		"Communication",
		"Rolling stock",
		"Shunting",
		"Mechanical",
		"ICT",
		"Passenger Service",
		"Track, bridges and tunnels",
		"Buildings infrastructure",
		"Security",
		"Other",
	]),
	weather: z.string().min(3),
	people_involved: z.object({
		injuries: z.number().optional().default(0),
		fatalities: z.number().optional().default(0),
		staff_involved: z.boolean(),
	}),
	// cost_implication: z.array(
	//   z.object({
	//     item: z.string(),
	//     quantity: z.number(),
	//     measure: z.string(),
	//     unit_cost: z.number(),
	//   })
	// ),
	severity: z.number().int().min(1).max(5),
});

type IncidentFormData = z.infer<typeof schema>;

const IncidentForm = () => {
	// params filtering to get the right Subcategories of Incident
	const params = useSearchParams();
	const categoryParam = params.get("cat");
	const IncidentSubs = IncidentCategories.filter(
		(cat) => cat.cat.toLocaleLowerCase() === categoryParam?.toLocaleLowerCase(),
	);
	const Subcategories = IncidentSubs[0].subCategories;

	// deined states
	const [step, setStep] = useState(1);
	const [submitError, setSubmitError] = useState("Reading inputs .....");

	const handleNext = () => {
		setStep(step + 1);
	};

	const handlePrev = () => {
		setStep(step - 1);
	};

	// use form hook
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IncidentFormData>({
		resolver: zodResolver(schema),
	});

	// handles form submission
	async function addIncidence(data: IncidentFormData) {
		setSubmitError("Validating and Recording");
		const res = await fetch("/api/incidences", {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify(data),
		});

		if (res.status != 201) {
			setSubmitError("Submission Failed! Check Inputs and Try again");
		}
		setSubmitError("Recorded Successfully!");

		reset();
		revalidatePath("/Incidents");
	}

	return (
		<div className='w-full py-6'>
			<form
				onSubmit={handleSubmit(addIncidence)}
				className='w-full mx-auto items-center px-4'>
				<h1 className='text-2xl font-bold text-center'>
					{categoryParam} Incident
				</h1>
				{step === 1 && (
					<DetailsForm
						reg={register}
						errors={errors}
						IncidentSubcategories={Subcategories}
					/>
				)}
				{step === 2 && (
					<PeopleInvolvedForm
						reg={register}
						errors={errors}
					/>
				)}

				<div className='w-full px-8 gap-4 flex justify-center mt-8 mx-auto my-4'>
					<button
						type='button'
						onClick={handlePrev}
						className='bg-sky-500 text-white px-4 py-2 rounded disabled:bg-white disabled:border disabled:cursor-not-allowed disabled:text-red-300 cursor-pointer'
						disabled={step === 1}>
						Previous
					</button>

					<button
						type='button'
						onClick={handleNext}
						className='bg-sky-500 text-white px-4 py-2 rounded disabled:bg-white disabled:border disabled:cursor-not-allowed disabled:text-red-300 cursor-pointer'
						disabled={step === 2}>
						Next
					</button>
				</div>
				<div className='w-full flex flex-col'>
					<p className='text-lg my-4 text-red-300'>{submitError}</p>
					{step === 2 && (
						<button
							type='submit'
							className='w-full max-w-[350px] mx-auto  bg-main rounded text-lg p-4 text-white font-semibold hover:bg-opacity-50'>
							Add Incident Record
						</button>
					)}
				</div>
			</form>
		</div>
	);
};

export default IncidentForm;
