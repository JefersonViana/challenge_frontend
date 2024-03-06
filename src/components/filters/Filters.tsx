'use client';

import { AppStateProvider } from "@/context/AppProvider";

type Props = {
  setList: React.Dispatch<React.SetStateAction<any[]>>;
};

export default function Filters({ setList }: Props) {
  const { listPhones } = AppStateProvider();

  const sortByName = (array: any[]) => {
    return array.sort((a: any, b: any) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  };

  const handleChange = (e: any) => {
    if (!e.target.value) {
      setList(listPhones);
      return;
    }
    const filtered = listPhones.filter((phone: any) => {
      const { name, brand, color, price } = phone;
      return [name, brand, color, price.toString()].some((field) => {
        return field.toLowerCase().includes(e.target.value.toLowerCase());
      });
    })
    setList(sortByName(filtered));
  };

  return (
    <section>
      <label>
        <input
          type="text"
          placeholder="Pesquisar"
          className="bg-slate-200 p-2 rounded-lg"
          onChange={handleChange}
        />
      </label>
    </section>
  )
}