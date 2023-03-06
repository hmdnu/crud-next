"use client";
import { Navbar } from "@/app/components";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Edit() {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [datas, setDatas] = useState<any>([]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("edit");
  const url = `http://localhost:3000/data/${id}`;

  function updateItem(e: any) {
    e.preventDefault();

    if (!itemName || !itemPrice) {
      alert("Enter the value");
    } else {
      axios.put(`${url}`, {
        item: itemName,
        price: itemPrice,
      });
      router.push("/");
    }
  }
  function getParam() {}
  useEffect(() => {
    getParam();

    axios.get(url).then((res) => {
      setDatas(res.data);
    });
  }, [url]);
  return (
    <>
      <Navbar />

      <section className="w-[60%] m-auto mt-5">
        <h1 className="font-semibold text-3xl">Edit {datas.item}</h1>
        <form className="mt-5 flex flex-col gap-5" onSubmit={updateItem}>
          <label>
            <h1 className="text-xl mb-2">Item</h1>
            <input onChange={(e) => setItemName(e.target.value)} className="px-3 py-1 border-b outline-none w-full" type="text" placeholder="enter item" />
          </label>
          <label>
            <h1 className="text-xl mb-2">Price</h1>
            <input onChange={(e) => setItemPrice(e.target.valueAsNumber)} className="px-3 py-1 border-b outline-none w-full" type="number" placeholder="enter price" />
          </label>
          <button className="bg-green-500 px-3 py-1 rounded-md text-white cursor-pointer hover:bg-green-600">Add Item</button>
        </form>
      </section>
    </>
  );
}
