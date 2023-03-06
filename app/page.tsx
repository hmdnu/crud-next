"use client";
import { Navbar } from "./components/index";
import Data from "./components/DataTable";

import axios from "axios";
import { useState, useEffect } from "react";

import Link from "next/link";

export default function Home() {
  const [datas, setDatas] = useState<any[]>([]);
  console.log();
  const url = "http://localhost:3000/data";

  function getData() {
    axios.get(url).then((res) => {
      setDatas(res.data);
    });
  }
  function deleteData(id: any) {
    const isDelete = confirm("you sure wanna delete?");

    if (isDelete) {
      let filteredData = datas.filter((data) => data.id !== id);
      axios.delete(`${url}/${id}`);
      setDatas(filteredData);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <Navbar />
      <section className="w-[70%] m-auto flex justify-end mt-5">
        <Link href="/form" className="flex bg-green-500 font-semibold text-white px-5 py-1 text-xl rounded-md cursor-pointer hover:bg-green-600">
          Add
        </Link>
      </section>
      <section className="w-[70%] max-md:w-[90%] mt-5 m-auto bg-slate-100 rounded-xl">
        <Data deleteData={deleteData} datas={datas} />
      </section>
    </main>
  );
}
