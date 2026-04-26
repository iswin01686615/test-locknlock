"use client";
import { useState } from "react";

export default function Create() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const submit = async () => {
    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({
        name,
        price: Number(price),
      }),
    });
    alert("Created!");
  };

  return (
    <div>
      <input onChange={e => setName(e.target.value)} placeholder="name" />
      <input onChange={e => setPrice(e.target.value)} placeholder="price" />
      <button onClick={submit}>Create</button>
    </div>
  );
}
