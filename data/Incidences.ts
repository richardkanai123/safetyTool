import { Incident } from '@/Libs/Types';

export const incidences: Incident[] = [
  {
    incident_id: '1',
    category: 'Track Incidents',
    subcategory: 'Infrastructure failures',
    date_time: '2024-03-20 14:30:00',
    location: 'Oakhaven Station, Platform 3',
    description:
      'A rail joint failure caused a track misalignment, leading to a potential derailment.',
    contributing_factors: 'Poor maintenance and metal fatigue',
    weather_conditions: 'Sunny',
    reportedBy: 'Track inspector: Alice Johnson',
    region: 'Eastern',
    department: 'Infrastructure',
    people_involved: {
      injured: 0,
      fatalities: 0,
      staff_involved: true,
    },
    actions_taken:
      'Emergency track repairs conducted. Track inspected thoroughly for any other potential failures.',
    cost_implication: [
      {
        item: 'Track repairs',
        quantity: 1,
        measure: 'pcs',
        unit_cost: 1000,
      },
      {
        item: 'Labor',
        quantity: 1,
        measure: 'pple',
        unit_cost: 200,
      },
    ],
    severity: 3,
  },
  {
    incident_id: '2',
    category: 'Rolling Stock Incidents',
    subcategory: 'Equipment malfunctions',
    date_time: '2024-03-21 13:45:00',
    location: 'Riverside Station, Platform 2',
    description:
      "A train's braking system malfunctioned, causing it to overshoot the platform.",
    contributing_factors: 'Mechanical failure and insufficient maintenance',
    weather_conditions: 'Clear skies',
    reportedBy: 'Train driver: Michael Thompson',
    region: 'Western',
    department: 'Operations',
    people_involved: {
      injured: 0,
      fatalities: 0,
      staff_involved: true,
    },
    actions_taken:
      'Train taken out of service for thorough inspection and repairs. Driver retrained on emergency procedures.',
    cost_implication: [
      {
        item: 'Train repairs',
        quantity: 1,
        measure: 'set',
        unit_cost: 1500,
      },
      {
        item: 'Driver training',
        quantity: 1,
        measure: 'pple',
        unit_cost: 3000,
      },
    ],
    severity: 2,
  },
  {
    incident_id: '3',
    category: 'Passenger Incidents',
    subcategory: 'Medical emergencies',
    date_time: '2024-03-22 11:00:00',
    location: 'City Central Station, Platform 1',
    description:
      'A passenger suffered a sudden cardiac arrest while waiting on the platform.',
    contributing_factors: 'Underlying health condition',
    weather_conditions: 'Heavy rain',
    reportedBy: 'Station attendant: David Thompson',
    region: 'Central',
    department: 'Operations',
    people_involved: {
      injured: 1,
      fatalities: 1,
      staff_involved: false,
    },
    actions_taken:
      'Emergency medical services called immediately. First aid provided until medical personnel arrived.',
    cost_implication: [
      {
        item: 'Emergency medical services',
        quantity: 1,
        measure: 'set',
        unit_cost: 800,
      },
      {
        item: 'First aid supplies',
        quantity: 1,
        measure: 'set',
        unit_cost: 50,
      },
    ],
    severity: 4,
  },
  {
    incident_id: '4',
    category: 'Operational Incidents',
    subcategory: 'Signal failures',
    date_time: '2024-03-23 16:20:00',
    location: 'Maplewood Station, Platform 4',
    description:
      'Signal lights malfunctioned, leading to confusion among train operators.',
    contributing_factors: 'Electrical fault',
    weather_conditions: 'Light rain',
    reportedBy: 'Station controller: Sarah Evans',
    region: 'Eastern',
    department: 'Operations',
    people_involved: {
      injured: 0,
      fatalities: 0,
      staff_involved: true,
    },
    actions_taken:
      'Immediate investigation conducted. Signal system repaired and tested thoroughly.',
    cost_implication: [
      {
        item: 'Signal repairs',
        quantity: 1,
        measure: 'set',
        unit_cost: 1200,
      },
      {
        item: 'Labor',
        measure: 'pple',
        quantity: 1,
        unit_cost: 250,
      },
    ],
    severity: 1,
  },
  {
    incident_id: '5',
    category: 'Security Incidents',
    subcategory: 'Theft',
    date_time: '2024-03-24 12:15:00',
    location: 'Lakeside Station, Platform 2',
    description:
      'A group of vandals broke into the ticket office and stole cash from the registers.',
    contributing_factors: 'Poor security measures',
    weather_conditions: 'Drizzling',
    reportedBy: 'Station manager: John Williams',
    region: 'Eastern',
    department: 'Security',
    people_involved: {
      injured: 0,
      fatalities: 0,
      staff_involved: true,
    },
    actions_taken:
      'Police notified immediately. Security measures at the station upgraded.',
    cost_implication: [
      {
        item: 'Cash theft',
        quantity: 1,
        measure: 'ksh',
        unit_cost: 150000,
      },
      {
        item: 'Security Camera upgrade',
        quantity: 3,
        measure: 'set',
        unit_cost: 1000,
      },
    ],
    severity: 5,
  },
  {
    incident_id: '6',
    category: 'Passenger Incidents',
    subcategory: 'Slip and fall',
    date_time: '2024-03-25 09:20:00',
    location: 'Grand Central Station, Platform 6',
    description:
      'A passenger slipped on a wet floor near the ticket counter and sustained minor injuries.',
    contributing_factors: 'Wet floor due to recent cleaning',
    weather_conditions: 'Partly cloudy',
    reportedBy: 'Station cleaner: Emily Johnson',
    region: 'Central',
    department: 'Operations',
    people_involved: {
      injured: 1,
      fatalities: 0,
      staff_involved: false,
    },
    actions_taken:
      'Immediate assistance provided to the injured passenger. Wet floor signs placed.',
    cost_implication: [
      {
        item: 'Medical expenses',
        quantity: 1,
        measure: 'set',
        unit_cost: 300,
      },
      {
        item: 'Compensation',
        quantity: 1,
        measure: 'pple',
        unit_cost: 1000,
      },
    ],
    severity: 2,
  },
  {
    incident_id: '7',
    category: 'Track Incidents',
    subcategory: 'Obstruction',
    date_time: '2024-03-26 17:45:00',
    location: 'Sunset Valley Station, Platform 1',
    description:
      'An abandoned suitcase was found on the tracks, causing a delay in train operations.',
    contributing_factors: 'Suspicious package reported by a passenger',
    weather_conditions: 'Clear skies',
    reportedBy: 'Security personnel: Mark Davis',
    region: 'Western',
    department: 'Security',
    people_involved: {
      injured: 0,
      fatalities: 0,
      staff_involved: true,
    },
    actions_taken:
      'Immediate evacuation of the area. Bomb squad called for inspection.',
    cost_implication: [
      {
        item: 'Security sweep',
        quantity: 1,
        unit_cost: 700,
        measure: 'set',
      },
      {
        item: 'Train delay compensation',
        quantity: 1,
        measure: 'pple',
        unit_cost: 1000,
      },
    ],
    severity: 4,
  },
  {
    incident_id: '8',
    category: 'Rolling Stock Incidents',
    subcategory: 'Brake failure',
    date_time: '2024-03-27 11:15:00',
    location: 'Harborfront Station, Platform 3',
    description:
      'A commuter train experienced brake failure while approaching the platform, causing a collision with another train.',
    contributing_factors: 'Mechanical failure and human error',
    weather_conditions: 'Foggy',
    reportedBy: 'Witness: Sarah Johnson',
    region: 'Eastern',
    department: 'Operations',
    people_involved: {
      injured: 5,
      fatalities: 2,
      staff_involved: true,
    },
    actions_taken:
      'Emergency medical services deployed. Investigation launched into the cause of the accident.',
    cost_implication: [
      {
        item: 'Train repairs',
        quantity: 1,
        measure: 'set',
        unit_cost: 5000,
      },
      {
        item: 'Medical expenses',
        quantity: 1,
        measure: 'set',
        unit_cost: 2500,
      },
    ],
    severity: 5,
  },
  {
    incident_id: '9',
    category: 'Operational Incidents',
    subcategory: 'Staff shortage',
    date_time: '2024-03-28 08:30:00',
    location: 'City Central Station, Control Room',
    description:
      'Due to unexpected staff shortages, several trains were delayed causing overcrowding and inconvenience to passengers.',
    contributing_factors: 'Unplanned leave by staff members',
    weather_conditions: 'Rainy',
    reportedBy: 'Operations manager: James Smith',
    region: 'Central',
    department: 'Operations',
    people_involved: {
      injured: 0,
      fatalities: 0,
      staff_involved: true,
    },
    actions_taken:
      'Emergency staff called in. Measures put in place to prevent future occurrences.',
    cost_implication: [
      {
        item: 'Overtime pay',
        quantity: 1,
        measure: 'ksh',
        unit_cost: 1200,
      },
      {
        item: 'Passenger compensation',
        quantity: 100,
        measure: 'pple',
        unit_cost: 1500,
      },
    ],
    severity: 3,
  },
  {
    incident_id: '10',
    category: 'Security Incidents',
    subcategory: 'Vandalism',
    date_time: '2024-03-29 14:00:00',
    location: 'Riverside Station, Platform 4',
    description:
      'Graffiti was discovered on the walls of the station building and on several parked trains.',
    contributing_factors: 'Lack of surveillance and security patrols',
    weather_conditions: 'Sunny',
    reportedBy: 'Station staff: Thomas Brown',
    region: 'Western',
    department: 'Security',
    people_involved: {
      injured: 0,
      fatalities: 0,
      staff_involved: true,
    },
    actions_taken:
      'Clean-up operations initiated. Enhanced security measures implemented.',
    cost_implication: [
      {
        item: 'Cleaning expenses',
        quantity: 1,
        measure: 'ksh',
        unit_cost: 800,
      },
      {
        item: 'Security upgrade',
        quantity: 1,
        measure: 'set',
        unit_cost: 12000,
      },
    ],
    severity: 2,
  },
  {
    incident_id: '11',
    category: 'Passenger Incidents',
    subcategory: 'Trip and fall',
    date_time: '2024-04-01 16:50:00',
    location: 'Sunset Valley Station, Platform 2',
    description:
      'A passenger tripped over a loose floor tile while boarding the train, resulting in a minor injury.',
    contributing_factors: 'Poor maintenance and slippery platform',
    weather_conditions: 'Partly cloudy',
    reportedBy: 'Station attendant: Emily Clark',
    region: 'Western',
    department: 'Operations',
    people_involved: {
      injured: 1,
      fatalities: 0,
      staff_involved: false,
    },
    actions_taken:
      'Immediate medical assistance provided. Floor tiles inspected for safety.',
    cost_implication: [
      {
        item: 'Medical expenses',
        quantity: 1,
        measure: 'set',
        unit_cost: 200,
      },
      {
        item: 'Floor tile repair',
        quantity: 4,
        measure: 'pcs',
        unit_cost: 300,
      },
    ],
    severity: 2,
  },
  {
    incident_id: '12',
    category: 'Operational Incidents',
    subcategory: 'Power outage',
    date_time: '2024-04-02 09:30:00',
    location: 'Maplewood Station, Control Room',
    description:
      'A sudden power outage affected signaling systems, leading to disruption in train services.',
    contributing_factors: 'Faulty electrical wiring',
    weather_conditions: 'Sunny',
    reportedBy: 'Station controller: Andrew Miller',
    region: 'Western',
    department: 'Operations',
    people_involved: {
      injured: 0,
      fatalities: 0,
      staff_involved: true,
    },
    actions_taken:
      'Emergency generators activated. Repairs initiated on the electrical system.',
    cost_implication: [
      {
        item: 'Electrical repairs',
        quantity: 1,
        measure: 'set',
        unit_cost: 1500,
      },
      {
        item: 'Train delay compensation',
        quantity: 1,
        measure: 'ksh',
        unit_cost: 1000,
      },
    ],
    severity: 4,
  },
  {
    incident_id: '13',
    category: 'Security Incidents',
    subcategory: 'Trespassing',
    date_time: '2024-04-03 11:20:00',
    location: 'Harborfront Station, Perimeter Fence',
    description:
      'Several individuals were observed trespassing on railway property, leading to safety concerns.',
    contributing_factors: 'Lack of adequate fencing and surveillance',
    weather_conditions: 'Rainy',
    reportedBy: 'Security personnel: Jessica White',
    region: 'Eastern',
    department: 'Security',
    people_involved: {
      injured: 0,
      fatalities: 0,
      staff_involved: true,
    },
    actions_taken:
      'Immediate intervention by security personnel. Perimeter fencing reinforced.',
    cost_implication: [
      {
        item: 'Security patrol',
        quantity: 1,
        measure: 'ksh',
        unit_cost: 500,
      },
      {
        item: 'Fencing repair',
        quantity: 1,
        measure: 'pcs',
        unit_cost: 800,
      },
    ],
    severity: 3,
  },
  {
    incident_id: '14',
    category: 'Track Incidents',
    subcategory: 'Debris on tracks',
    date_time: '2024-04-04 15:40:00',
    location: 'Riverside Station, Platform 3',
    description:
      'Tree branches and debris were found obstructing the tracks, causing delays in train operations.',
    contributing_factors: 'High winds and poor maintenance',
    weather_conditions: 'Windy',
    reportedBy: 'Track inspector: Matthew Harris',
    region: 'Western',
    department: 'Infrastructure',
    people_involved: {
      injured: 0,
      fatalities: 0,
      staff_involved: true,
    },
    actions_taken:
      'Immediate removal of debris from the tracks. Inspections conducted for further obstructions.',
    cost_implication: [
      {
        item: 'Track cleaning',
        quantity: 1,
        measure: 'ksh',
        unit_cost: 600,
      },
      {
        item: 'Train delay compensation',
        quantity: 1,
        measure: 'ksh',
        unit_cost: 1200,
      },
    ],
    severity: 2,
  },
  {
    incident_id: '15',
    category: 'Rolling Stock Incidents',
    subcategory: 'Door malfunction',
    date_time: '2024-04-05 10:10:00',
    location: 'Grand Central Station, Platform 4',
    description:
      'A train door malfunctioned, remaining open during transit, causing safety concerns.',
    contributing_factors: 'Technical fault',
    weather_conditions: 'Clear skies',
    reportedBy: 'Passenger: Samantha Johnson',
    region: 'Central',
    department: 'Operations',
    people_involved: {
      injured: 0,
      fatalities: 0,
      staff_involved: true,
    },
    actions_taken:
      'Train taken out of service for door repairs. Safety checks conducted on other train doors.',
    cost_implication: [
      {
        item: 'Door repairs',
        quantity: 1,
        measure: 'set',
        unit_cost: 1000,
      },
      {
        item: 'Passenger compensation',
        quantity: 1,
        measure: 'ksh',
        unit_cost: 800,
      },
    ],
    severity: 3,
  },
];
