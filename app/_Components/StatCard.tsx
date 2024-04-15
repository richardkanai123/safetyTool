type StatProps = {
  title: String;
  count: number;
};

export default function StatCard({ title, count }: StatProps) {
  return (
    <div className="w-full flex items-center align-middle shadow-md rounded hover:shadow-none hover:border hover:border-yellowVariant justify-around  text-main p-4 md:max-w-[300px] h-[150px] cursor-pointer">
      <h1 className="font-bold text-2xl text-left fade-in delay-200  ">
        {title}
      </h1>
      <p className="font-bold text-6xl fade-in delay-700 ">
        {count}
      </p>
    </div>
  );
}
