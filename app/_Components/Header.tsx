import Nav from '../_Components/Nav';

const Header = () => {
  return (
    <div className="px-3 py-6 w-full max-h-fit bg-main sticky top-0 left-0 z-10 flex flex-wrap items-center justify-between mx-auto">
      <span className="text-white font-extrabold text-2xl">KR Safety</span>
      <Nav />
    </div>
  );
};

export default Header;
