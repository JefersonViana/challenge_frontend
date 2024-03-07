'use client';
import { AppStateProvider } from "@/context/AppProvider";
import Card from '../../components/card/Card';
import { useEffect, useState } from "react";
import Filters from "@/components/filters/Filters";

export default function ListPhones() {
  const [list, setList] = useState<any>([]);
  const { listPhones } = AppStateProvider();
  
  useEffect(() => {
    setList(listPhones);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center w-full bg-slate-900"
    >
      <Filters setList={setList} />
      <section className="flex flex-col mt-8 items-center justify-center w-85">
        {list.map((phone: any) => (
          <Card phone={phone} key={phone.id} />
        ))}
      </section>
    </div>
  );
}
