"use client";
import { Navbar } from "../components";
import { useState } from "react";
import { uid } from "uid";
import { useRouter } from "next/navigation";

import axios from "axios";
export default function Form() {
  const router = useRouter();

  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);

  function addItem(e: any) {
    e.preventDefault();
    const setFormData = { id: uid(), item: itemName, price: itemPrice };

    if (!itemName || !itemPrice) {
      alert("Enter the value");
    } else {
      axios.post("http://localhost:3000/data", setFormData).then(() => {
        router.push("/");
      });
    }
  }

  return (
    <>
      <Navbar />
      <section className="w-[60%] m-auto mt-5">
        <h1 className="font-semibold text-3xl">Add Item</h1>
        <form className="mt-5 flex flex-col gap-5" onSubmit={addItem}>
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
