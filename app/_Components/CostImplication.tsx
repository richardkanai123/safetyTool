import React, { useState } from "react";
type CostImplicationKey = "item" | "quantity" | "measure" | "unit_cost";
const CostImplicationForm = () => {
	// const [costImplications, setCostImplications] = useState([
	// 	{ item: "", quantity: 0, measure: "", unit_cost: 0 },
	// ]);

	// const handleAddCostImplication = () => {
	// 	setCostImplications([
	// 		...costImplications,
	// 		{ item: "", quantity: 0, measure: "", unit_cost: 0 },
	// 	]);
	// };

	// const handleRemoveCostImplication = (index: number) => {
	// 	const newCostImplications = [...costImplications];
	// 	newCostImplications.splice(index, 1);
	// 	setCostImplications(newCostImplications);
	// };

	// const handleCostImplicationChange = (
	// 	index: number,
	// 	key: CostImplicationKey,
	// 	value: string | number | never,
	// ) => {
	// 	if (
	// 		index >= 0 &&
	// 		index < costImplications.length &&
	// 		key in costImplications[index]
	// 	) {
	// 		const newCostImplications = [...costImplications];
	// 		newCostImplications[index][key] = value;
	// 		setCostImplications(newCostImplications);
	// 	} else {
	// 		console.log("error");
	// 	}
	// };

	// return (
	// 	< className='mt-4 w-full mx-auto'>
	// 		<fieldset className='w-full border border-gray-300 p-4 rounded mb-4 '>
	// 			<legend className='text-lg font-semibold mb-2'>
	// 				Cost Implications
	// 			</legend>
	// 			{costImplications.map((cost, index) => (
	// 				<div
	// 					key={index}
	// 					className='w-full flex items-center space-x-4 mb-4'>
	// 					<input
	// 						type='text'
	// 						placeholder='Item'
	// 						className='px-4 py-2 border rounded'
	// 						value={cost.item}
	// 						onChange={(e) =>
	// 							handleCostImplicationChange(index, "item", e.target.value)
	// 						}
	// 					/>

	// 					<input
	// 						type='text'
	// 						placeholder='Measure'
	// 						className='px-4 py-2 border rounded'
	// 						value={cost.measure}
	// 						onChange={(e) =>
	// 							handleCostImplicationChange(index, "measure", e.target.value)
	// 						}
	// 					/>

	// 					<input
	// 						type='number'
	// 						placeholder='Quantity'
	// 						className='px-4 py-2 border rounded'
	// 						value={cost.quantity}
	// 						onChange={(e) =>
	// 							handleCostImplicationChange(
	// 								index,
	// 								"quantity",
	// 								parseInt(e.target.value),
	// 							)
	// 						}
	// 					/>

	// 					<input
	// 						type='number'
	// 						placeholder='Unit Cost'
	// 						className='px-4 py-2 border rounded'
	// 						value={cost.unit_cost}
	// 						onChange={(e) =>
	// 							handleCostImplicationChange(
	// 								index,
	// 								"unit_cost",
	// 								parseFloat(e.target.value),
	// 							)
	// 						}
	// 					/>
	// 					<button
	// 						className='px-4 py-2 bg-red-500 text-white rounded'
	// 						onClick={() => handleRemoveCostImplication(index)}>
	// 						Remove
	// 					</button>
	// 				</div>
	// 			))}

	// 			<button
	// 				onClick={() => console.log(costImplications)}
	// 				type='button'
	// 				className='bg-main rounded text-lg p-4 text-white font-semibold block my-4'>
	// 				Add Cost Implication
	// 			</button>
	// 		</fieldset>
	return <div>cost implication add</div>;
};

export default CostImplicationForm;
