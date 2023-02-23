"use client";

interface CardProps {
  data: {
    location: {
      name: string;
      region: string;
      country: string;
    };
    current: {
      temp_c: number;
      condition: {
        text: string;
        icon: string;
      };
    };
  };
}

export function Card({ data }: CardProps) {

  const verifica = data?.location?.name

  if (verifica == null) {
    return (
      <div className="bg-white p-6 mt-10 rounded-lg shadow-md min-w-[12rem]">
        <div className="text-center">
          <h1 className="text-red-600">Não encontramos essa cidade!</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-md min-w-[12rem]">
      <div className="text-center">
        <span className="block text-lg font-bold text-slate-700">
          {data.location.name}
        </span>
        <span className="text-slate-400 text-sm font-medium">
          {`${data.location.region}, ${data.location.country}`}
        </span>
      </div>

      <div className="font-bold text-slate-700 flex gap-1 mb-2 justify-center">
        <span className="text-8xl ">{data.current.temp_c}</span>
        <span className="text-3xl mt-3">ºC</span>
      </div>

      <div className="flex flex-col items-center">
        <img src={data.current.condition.icon} alt="tempo atual" />
        <span className="text-slate-700 font-medium">
          {data?.current?.condition?.text}
        </span>
      </div>
    </div>
  );
}
