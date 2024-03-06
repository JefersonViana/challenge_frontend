'use client';
import { AppStateProvider } from "@/context/AppProvider";
// const phone = {
//   id: 1,
//   name: "product 1",
//   brand: "brand 1",
//   model: "model 1",
//   price: "1000",
//   color: "red",
// }
export default function Home() {
  const { listPhones } = AppStateProvider();
  
  return (
    <div
      className="flex flex-col items-center justify-center w-full bg-slate-900"
    >
      <section
        className="flex flex-col items-center justify-center w-85"
      >
      {listPhones.map((phone: any) => (
        <div
          className="flex flex-col justify-between my-2 w-full rounded shadow-md"
          key={phone.id}
        >
          <div
            className="bg-slate-200 w-full h-12 rounded-t-md rounded-b-none flex items-center justify-center text-slate-900 font-bold text-xl"
          >
            <span>{phone.name}</span>
          </div>
          <div
            className="flex flex-col justify-between p-2 bg-slate-200 rounded-b-md rounded-t-none opacity-30"
          >
            <p
              className="text-slate-900"
            >{`Marca: ${phone.brand}`}</p>
            <p
              className="text-slate-900"
            >{`Modelo: ${phone.model}`}</p>
            <p
              className="text-slate-900"
            >{`Valor: R$${phone.price},00`}</p>
            <p
              className="text-slate-900"
            >{`Cor: ${phone.color}`}</p>
          </div>
        </div>
      ))}
      </section>
    </div>
  );
}
