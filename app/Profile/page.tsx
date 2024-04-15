import { SafetyIncident } from '@/Libs/Types';
import IncidentCard from '../_Components/IncidentCard';

export default function ProfilePage() {
  const sampleReports: SafetyIncident[] = [
    {
      incident_id: 1,
      date_time: '2024-03-20 14:30:00',
      location: 'Oakhaven Station, Platform 3',
      type: 'Passenger incident',
      severity: 2,
      description: 'Passenger tripped and fell while boarding a train.',
      contributing_factors: 'Wet platform due to recent rain',
      weather_conditions: 'Raining',
      reportedBy: 'Station attendant: John Smith',
      region: 'Eastern',
      department: 'Operations',
      people_involved: {
        injured: 1,
        fatalities: 0,
        staff_involved: false,
      },
      actions_taken:
        'Medical personnel attended to the injured passenger. Platform was marked for cleaning.',
    },
    {
      incident_id: 2,
      date_time: '2024-03-18 10:15:00',
      location: 'Railroad crossing near Elm Street',
      type: 'Level crossing incident',
      severity: 1,
      description: 'Train struck a car that failed to yield at the crossing.',
      contributing_factors: 'Driver negligence',
      weather_conditions: 'Clear',
      reportedBy: 'Local police officer',
      region: 'Central',
      department: 'Not applicable',
      people_involved: {
        injured: 0,
        fatalities: 0,
        staff_involved: false,
      },
      actions_taken:
        'Police and emergency services dispatched. Crossing inspected for damage.',
    },
    {
      incident_id: 3,
      date_time: '2024-03-15 03:00:00',
      location: 'Central line, between Maplewood and Willow Creek stations',
      type: 'Equipment failure',
      severity: 3,
      description: 'Malfunction of train engine resulted in loss of power.',
      contributing_factors: 'Technical issue with engine component',
      weather_conditions: 'Not applicable',
      reportedBy: 'Train operator: Michael Lee',
      region: 'Central',
      department: 'Operations',
      people_involved: {
        injured: 0,
        fatalities: 0,
        staff_involved: false,
      },
      actions_taken:
        'Passengers transferred to a different train. Engine undergoing maintenance.',
    },
    {
      incident_id: 4,
      date_time: '2024-03-12 18:45:00',
      location: 'Maintenance yard, Riverside Depot',
      type: 'Staff injury',
      severity: 4,
      description:
        'Maintenance worker slipped and fell while inspecting a train car.',
      contributing_factors: 'Uneven surface in maintenance yard',
      weather_conditions: 'Not applicable',
      reportedBy: 'Maintenance supervisor: Jane Wilson',
      region: 'Western',
      department: 'Maintenance',
      people_involved: {
        injured: 1,
        fatalities: 0,
        staff_involved: true,
      },
      actions_taken:
        'Injured worker received medical attention. Safety protocols reviewed for maintenance yard.',
    },
  ];
  return (
    <div className="w-full flex min-h-screen flex-col items-center gap-4 p-2">
      <h2 className="text-xl font-bold text-center text-main">Profile</h2>
      <div className="w-full flex flex-col  border-t border-b mx-auto w-full lg:max-w-[600px]">
        <section className="w-full p-2 flex flex-col text-main font-semibold">
          <h3 className="text-center text-xl mb-2">User Information</h3>
          <aside className="flex items-center gap-4 border-b p-4 text-left">
            <p className="text-lg">Username :</p>
            <span>richard_kanai</span>
          </aside>
          <aside className="flex items-center gap-4 border-b p-4 text-left">
            <p className="text-lg">Email :</p>
            <span>richard@kanai.co.ke</span>
          </aside>
          <aside className="flex items-center gap-4 border-b p-4 text-left">
            <p className="text-lg">Designation :</p>
            <span>AE Signal</span>
          </aside>
          <aside className="flex items-center gap-4 border-b p-4 text-left">
            <p className="text-lg">Department :</p>
            <span>SECI</span>
          </aside>
          <aside className="flex items-center gap-4 border-b p-4 text-left">
            <p className="text-lg">Workshop :</p>
            <span>Port Reitz</span>
          </aside>
          <aside className="flex items-center gap-4 border-b p-4 text-left">
            <p className="text-lg">Region :</p>
            <span>Eastern</span>
          </aside>
        </section>
      </div>

      <h4 className="mt-4 text-main text-xl font-semibold">My Reports</h4>
      <div className="w-full max-w-[1000px] px-4 py-2 mt-4 grid grid-cols-1 md:grid-cols-2  items-center gap-4 md:flex-row place-items-center ">
        {sampleReports.length === 0 && <p>No reports yet</p>}
        {sampleReports.map((incident) => (
          <IncidentCard key={incident.incident_id} Item={incident} />
        ))}
      </div>

      <button className="text-white mt-6 px-4 py-2 rounded-md shadow-md bg-main hover:bg-opacity-60 font-semibold text-lg mx-auto w-[300px] ">
        Log Out
      </button>
    </div>
  );
}
