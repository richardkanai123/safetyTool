'use client'
import Link from "next/link"

 // Error components must be Client Components
export default function Error() {
  return (
    <div className="p-4 text-main text-center flex flex-col items-center">
    <h2 className="text-3xl font-bold mt-2">Something went wrong!</h2>
    <p className="mt-3">Go back Home</p>
    <Link className="p-4 bg-main text-white rounded w-[300px] hover:bg-opacity-40 my-4" href='/' >Home</Link>
    <br />
    <p  className="text-lg font-semibold">OR</p>
    <p>Try again Later</p>
    
    </div>
  )
}
