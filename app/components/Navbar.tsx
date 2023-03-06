"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 py-4 px-20 flex justify-between max-md:px-5">
      <Link href={"/"}>
        <h1 className="text-2xl font-semibold text-white">Crud App</h1>
      </Link>
      <h1 className="text-2xl font-semibold text-white">By Hamdan</h1>
    </nav>
  );
}
