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

  const sortByPrice = (array: any[]) => {
    return array.sort((a: any, b: any) => {
      if (parseInt(a.price) < parseInt(b.price)) return -1;
      if (parseInt(a.price) > parseFloat(b.price)) return 1;
      return 0;
    });
  }

  const handlePrice = (text: string) => {
    let sorted = [];
    if (text === 'menor') {
      sorted = sortByPrice(listPhones);
    } else {
      sorted = sortByPrice(listPhones).reverse();
    }
    setList([...sorted]);
  }

  return (
    <section
      className="flex flex-col justify-around w-85 h-28 mt-16"
    >
      <div
        className="flex items-center justify-center w-full h-16"
      >
        <label className="flex items-center gap-1 text-slate-500">
          Filtro:
          <input
            type="text"
            placeholder="Pesquisar"
            className="border border-slate-400 rounded-md p-2"
            onChange={handleChange}
          />
        </label>
      </div>
      <div
        className="flex items-center justify-around"
      >
        <button
          className="py-2 px-4 rounded-md bg-slate-200 text-black"
        >Marca</button>
        <button
          type="button"
          className="py-2 px-4 rounded-md bg-slate-200 text-black"
          onClick={() => handlePrice('menor')}
        >Menor Preço</button>
        <button
          className="py-2 px-4 rounded-md bg-slate-200 text-black"
          type="button"
          onClick={() => handlePrice('maior')}
        >Maior Preço</button>
      </div>
    </section>
  )
}