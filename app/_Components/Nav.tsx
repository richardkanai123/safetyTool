"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BiSolidReport } from "react-icons/bi";
import { IoHomeSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineRailwayAlert } from "react-icons/md";

const Nav = () => {
	const pathname = usePathname();

	const tags = [
		{
			tagName: "Home",
			icon: <IoHomeSharp className='text-base' />,
			path: "/",
		},
		{
			tagName: "Report",
			icon: <BiSolidReport className='text-base' />,
			path: "/Reports",
		},
		{
			tagName: "Incidents",
			icon: <MdOutlineRailwayAlert className='text-base' />,
			path: "/Incidents",
		},
		{
			tagName: "Profile",
			icon: <CgProfile className='text-base' />,
			path: "/Profile",
		},
	];

	return (
		<nav className='min-w-fit flex items-center flex-row flex-wrap h-full gap-4 text-white px-2'>
			{tags.map((tag) => (
				<Link
					key={tag.tagName}
					className={
						pathname === tag.path
							? "hover:underline text-yellowVariant text-base font-semibold flex items-center gap-1"
							: "hover:underline  text-base font-semibold flex items-center gap-1"
					}
					href={tag.path}>
					{tag.icon}
					<span> {tag.tagName}</span>
				</Link>
			))}
		</nav>
	);
};

export default Nav;
