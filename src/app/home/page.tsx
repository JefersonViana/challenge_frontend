'use client';
import { AppStateProvider } from "@/context/AppProvider";
import Card from '../../components/card/Card';
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
        <Card phone={phone} key={phone.id} />
      ))}
      </section>
    </div>
  );
}
