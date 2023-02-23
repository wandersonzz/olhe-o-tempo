"use client";

import { FormEvent, useState } from "react";
import { fetchData } from "../pages/api/services/tempo";
import { Card } from "./Card";

export function Form() {
  const [city, setCity] = useState("");

  const [data, setData] = useState({
    location: {
      name: "-",
      region: "-",
      country: "-",
    },
    current: {
      temp_c: 0,
      condition: {
        text: "-",
        icon: "//cdn.weatherapi.com/weather/64x64/night/353.png",
      },
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetchData(city).then((resp) => {
      setData(resp);
    }).catch((error) => {
      console.log(error);
    })
  };

  return (
    <>
      <div className="flex">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            placeholder="Cidade"
            className="p-3 rounded-lg outline-none"
            value={city}
            onChange={({ target: { value } }) => {

              return setCity(value)
            }}
          />

          <button
            className="bg-blue-800 p-3 rounded-lg text-white font-bold"
            type="submit"
          >
            Pesquisar
          </button>
        </form>
      </div>
      <Card data={data} />
    </>
  );
}
