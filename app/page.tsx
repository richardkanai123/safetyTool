import { stats } from '@/Libs/Types';
import { MonthlyChart } from './_Components/MonthlyChart';
import StatCard from './_Components/StatCard';
import { RegionalChart } from './_Components/RegionalChart';

export default function Home() {
  const MonthLables = [
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
  ];

  const data = {
    labels: MonthLables,
    datasets: [
      {
        label: 'Total Incidences Count',
        data: [12, 19, 10, 5, 3, 14, 6, 7, 2, 1, 20, 4],
        backgroundColor: '#8a0806',
        borderWidth: 1,
      },
    ],
  };

  const incidentsStats: stats = {
    Total: 135,
    Fatalities: 1,
    Injuries: 10,
    Derails: 1,
    Collisions: 0,
    Vandalism: 18,
    Fire: 0,
    Faults: 25,
  };

  return (
    <div className="w-full text-main flex min-h-screen flex-col items-center gap-2 p-2 ">
      <h1 className=" text-2xl font-bold text-center mb-4 mt-1">
        Kenya Railways Safety Incidences
      </h1>

      <div className="w-full p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  items-center	max-h-fit relative gap-4 mb-4">
        {Object.entries(incidentsStats).map(([key, value]) => (
          <StatCard key={key} title={key} count={value} />
        ))}
      </div>

      <h4 className="my-8 font-bold text-3xl">Monthly Analysis</h4>

      <MonthlyChart data={data} />

      <h4 className="my-8 font-bold text-3xl">Regional Analysis</h4>
      <div className="w-full mx-auto flex items-center justify-center items-stretch max-h-[500px]">
        <RegionalChart />
      </div>
    </div>
  );
}
