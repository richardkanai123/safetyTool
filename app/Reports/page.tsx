import { IncidentCategories } from '@/Libs/categories';
import Link from 'next/link';
export default function ReportsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center p-2 text-main ">
      <h2 className="text-3xl text-center font-bold  animate-in slide-in delay-300 mt-2">
        Report New Safety Incident
      </h2>
      <div className="w-full mt-4  items-center border-t py-3  ">
        <h4 className="font-light text-lg text-center mb-4 ransition-all ease-in delay-200 duration-1000 animate-in slide-in-from-top">
          Select the Incident Category
        </h4>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-6 text-white max-w-screen-2xl mx-auto transition-all ease-in animate-out fade-out">
          {IncidentCategories.map((item, index) => (
            <div key={item.cat}>
              <Link
                className={`block rounded-md overflow-hidden cursor-pointer shadow-md p-4 text-2xl font-bold bg-gradient-to-l from-main to-redVariant hover:shadow-none hover:bg-gradient-to-r hover:via-yellowVariant transition-all ease-in delay-${
                  index * 100
                } duration-1000 animate-in fade-in`}
                href={'/Reports/add-new' + item.url}
              >
                {item.cat}
              </Link>
              <p className="text-main tex-xs font-light italic px-2">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// animation: {
//   bubble: 'bubble 4s linear infinite',
// },
