import Link from "next/link";

export default function Button({ deleteData, id }: any) {
  return (
    <div className="flex gap-2 max-md:flex-col text-center">
      <Link href={`/form/${id}?edit=${id}`} className="bg-blue-500 text-white px-4 font-semibold rounded-md cursor-pointer hover:bg-blue-600">
        Edit
      </Link>
      <button onClick={() => deleteData(id)} className="bg-red-500 text-white px-4 font-semibold rounded-md cursor-pointer hover:bg-red-600">
        Delete
      </button>
    </div>
  );
}
