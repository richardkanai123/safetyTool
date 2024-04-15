export const IncidentCategories = [
  {
    cat: 'Track Infrastructure',
    url: '/?cat=Track Infrastructure',
    details:
      'Derailment, track obstruction, broken rails, collapses on brigdes and tunnels etc',
    subCategories: [
      'derailment',
      'obstruction',
      'broken rails',
      'frog failure',
      'collapse',
      'bridge issue',
      'embarkment',
      'tunnel',
      'other',
    ],
  },
  {
    cat: 'Rolling Stock',
    url: '/?cat=Rolling Stock',
    details:
      'Collisions with other trains/wagons or objects coupling failures, engine failure, brake failure, door malfunctions or any other rolling stock equipment malfunction ',
    subCategories: [
      'train collision',
      'engine failure',
      'brake failure',
      'door malfunction',
      'wagon collision',
      'wagons collision',
      'wagon derailment',
      'other',
    ],
  },

  {
    cat: 'Operations',
    url: '/?cat=Operations',
    details:
      'Operation equipment failure eg. signal, communication, points / turnouts, CTC, level crossings, power etc',
    subCategories: [
      'signal failure',
      'turnout failure',
      'ctc failure',
      'csm failure',
      'level crossing',
      'communication failure',
      'power failure',
      'other',
    ],
  },
  {
    cat: 'Maintenance',
    url: '/?cat=Maintenance',
    details:
      'Maintenance and engineering/technical related incidences such as accidents during maintenance, animal attacks, construction site incidents etc',
    subCategories: [
      'fall from height',
      'equipment failure during maintenance',
      'site accident',
      'infrastructure damage',
      'other',
    ],
  },
  {
    cat: 'Passenger Services',
    url: '/?cat=Passenger Services',
    details:
      'Passenger related incidents such as slips, trips, falls, drunkardness, medical emergencies, altercations, theft or pickpocketing, boarding and alighting incidents etc',
    subCategories: [
      'slip, trip or fall',
      'medical emergency',
      'altercations',
      'boarding and alighting incident',
      'theft or pickpocketing',
      'ticket loss',
      'ticketing machine failure',
      'ticket evasion',
      'fake ticket',
      'service disruption',
      'other',
    ],
  },
  {
    cat: 'Security',
    url: '/?cat=Security',
    details:
      'Criminal activities eg thefts, vandalism, tresspassing, terrorism or any other unauthorised activities in railway premises',
    subCategories: [
      'vandalism',
      'sabotage',
      'tresspassing',
      'terrorism',
      'theft',
      'unauthorised access',
      'cyber attack',
      'other',
    ],
  },
  {
    cat: 'Environmental',
    url: '/?cat=Environmental',
    details:
      'Environmental issues related to rail operations such as spillage, pollution, wildlife / animal strikes etc',
    subCategories: [
      'air pollution',
      'water pollution',
      'land/soil pollution',
      'erosion',
      'animal strike',
      'rockfall',
      'landslide',
      'animal attack',
      'tree falls',
      'other',
    ],
  },
  {
    cat: 'Weather',
    url: '/?cat=Weather',
    details:
      'Adverse weather conditions related incidences such as flooding, landslides, wind-related etc ',
    subCategories: [
      'Flooding',
      'Snow accumulation',
      'wind related',
      'heat wave',
      'other',
    ],
  },
  {
    cat: 'Human or Staff Related',
    url: '/?cat=Human or Staff Related',
    details:
      'General human error or negligence, mistakes by railway staff procedural violations, internal sabotage, fatigue or drug related issues etc',
    subCategories: [
      'Human error',
      'fatigue related',
      'procedural violation',
      'communication error',
      'other',
    ],
  },
];
