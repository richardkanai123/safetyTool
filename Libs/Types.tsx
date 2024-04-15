export type stats = {
	Total: number;
	Fatalities: number;
	Injuries: number;
	Derails: number;
	Collisions: number;
	Vandalism: number;
	Fire: number;
	Faults: number;
};

interface PeopleInvolved {
	injured: number;
	fatalities: number;
	staff_involved: boolean;
}

export interface CostImplicationItem {
	item: string;
	quantity: number;
	measure: string;
	unit_cost: number;
}

export interface Incident {
	_id: string;
	category: string;
	subCategory: string;
	dateTime: string;
	location: string;
	description: string;
	contributing_factors: string;
	Factor: string;
	weather: string;
	reportedBy: string;
	region: "Eastern" | "Western" | "Central";
	Team: string;
	people_involved: PeopleInvolved;
	actionTaken: string;
	cost_implication?: CostImplicationItem[];
	severity: number;
}

export interface Category {
	category: string;
	subcategories: string[];
}
