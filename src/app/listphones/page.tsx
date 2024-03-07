'use client';
import { AppStateProvider } from "@/context/AppProvider";
import Card from '../../components/card/Card';
import { useEffect, useState } from "react";
import Filters from "@/components/filters/Filters";
import { useRouter } from "next/navigation";
import Info from "@/components/info/Info";

export default function ListPhones() {
  const [list, setList] = useState<any>([]);
  const [isvalidate, setIsValidate] = useState<boolean>(false);
  const { fetchDeletePhones } = AppStateProvider();
  const { push } = useRouter();
  
  useEffect(() => {
    const phones = localStorage.getItem('phones');
    if (phones) {
      setList(JSON.parse(phones));
      setIsValidate(true);
    } else {
      push('/');
    }
  }, []);

  const deleteCard = async (id: number) => {
    const newList = list.filter((phone: any) => phone.id !== id);
    setList([...newList]);
    await fetchDeletePhones(id);
  }

  return (isvalidate ? (
    <div
      className="flex flex-col items-center justify-center w-full bg-slate-900"
    >
      <Filters setList={setList} />
      <section className="flex flex-col mt-8 items-center justify-center w-85">
        {list.length > 1 ? (
          list.map((phone: any) => (
            <Card phone={phone} key={phone.id} deleteCard={deleteCard}/>
          ))
        ) : <Info text="Lista Vazia!" />}
      </section>
    </div>
  ): <Info text="Carregando..." />);
}