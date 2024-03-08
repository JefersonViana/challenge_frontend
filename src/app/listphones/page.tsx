'use client';
import { AppStateProvider } from "@/context/AppProvider";
import Card from '../../components/card/Card';
import { useEffect, useState } from "react";
import Filters from "@/components/filters/Filters";
import { useRouter } from "next/navigation";
import Info from "@/components/info/Info";
import Link from "next/link";
import { requestAllPhones } from "@/api/requests";
import Header from "@/components/header/Header";

export default function ListPhones() {
  const [list, setList] = useState<any>([]);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { fetchDeletePhones, setListPhones } = AppStateProvider();
  const { push } = useRouter();
  
  const getAllPhones = async (token: string) => {
    const response = await requestAllPhones(token);
    setListPhones(response.data);
    setList(response.data);
    setIsAuth(true);
    setIsLoading(false);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getAllPhones(token);
    } else {
      setIsLoading(false);
      setTimeout(() => {
        push('/');
      }, 2000);
    }
  }, []);

  const deleteCard = async (id: number) => {
    const newList = list.filter((phone: any) => phone.id !== id);
    setList([...newList]);
    await fetchDeletePhones(id);
  }

  return (isLoading ? <Info text="Carregando..." /> : (
    isAuth ? (
      list.length > 0 ? (
        <div
        className="flex flex-col items-center justify-center w-full bg-slate-900"
      >
        <Header />
        <Filters setList={setList} />
        <section className="flex flex-col mt-8 items-center justify-center w-85">
          {list.map((phone: any) => (
            <Card phone={phone} key={phone.id} deleteCard={deleteCard}/>
          ))}
        </section>
      </div>
      ) : <Link
        className="w-full h-screen flex items-center justify-center absolue top-0 left-0 text-white font-bold underline"
        href="/adicionar">Adicionar Produtos em sua lista</Link>
    ) : <Info text="Usuário não autenticado!" />
  ));
}