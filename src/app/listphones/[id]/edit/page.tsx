'use client';
import Card from "@/components/card/Card";
import FormEdit from "@/components/form/FormEdit";
import { AppStateProvider } from "@/context/AppProvider";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Edit() {
  const [phone, setPhone] = useState<any>({})
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { listPhones } = AppStateProvider();
  const { id } = useParams();

  useEffect(() => {
    const phone = listPhones.find((phone: any) => phone.id.toString() === id);
    if (phone) {
      setPhone(phone);
      setIsLoading(true);
    }
  }, [])

  return (
    <div
      className="flex flex-col items-center justify-center w-85 h-[34rem] self-center mt-16 rounded-md"
    >
      <form className="bg-slate-200 h-[50%] rounded-md">
        <FormEdit />
      </form>
      {isLoading && (
        <div className="flex flex-col items-center justify-center w-85 h-[50%]">
          <h1 className="text-white">Visualização</h1>
          <Card phone={phone} deleteCard={() => {}} />
        </div>
      )}
    </div>
  )
}