'use client';
import { useState } from "react";
import Card from "../card/Card";
import iconAdd from '../../assets/adicionar.png';
import Image from 'next/image';
import { AppStateProvider } from "@/context/AppProvider";
import { formatedList } from "@/utils/formatedList";
import { useRouter } from "next/navigation";
import Header from "../header/Header";

export default function FormAddPhone() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [warning, setWaning] = useState('');
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(true);
  const [list, setList] = useState<any>([]);
  const { fetchAddPhones } = AppStateProvider();
  const { push } = useRouter();

  const handleWaning = (message: string) => {
    setWaning(message);
    setTimeout(() => {
      setWaning('');
    }
    , 2000);
  }

  const validateTextFields = (): boolean => {
    const validate = name.length < 3 || brand.length < 1 || model.length < 1 || color.length < 3;
    if (isNaN(parseInt(price)) || validate) {
      return false;
    }
    return true;
  }

  const finished = async () => {
    const success = await fetchAddPhones(formatedList(list));
    if (success) {
      setHidden(true);
      setList([]);
      setCount(0);
      setName('');
      setPrice('');
      setTimeout(() => {
        push('/listphones');
      }
      , 2000);
    } else {
      handleWaning('Tente novamente!');
      setHidden(false);
    }
  }

  const handleDelete = (id: number) => {
    const newList = list.filter((phone: any) => phone.id !== id);
    setList(newList);
  }

  const handleClick = () => {
    const isValid = validateTextFields();
    if (isValid) {
      const newPhone = {name, brand, model, price, color, id: count};
      handleWaning('Adicionado!');
      setList([...list, newPhone]);
      setHidden(false);
      setBrand('');
      setModel('');
      setColor('');
      setCount(count + 1);
    } else {
      handleWaning('Preencha os campos corretamente!');
    }
  }

  return (
    <div className="flex flex-col pt-2 pb-2 items-center justify-evenly w-full h-screen">
      <Header />
      <form
        className="self-start flex flex-col w-full h-30 gap-1 items-center justify-center "
      >
        <div className="flex w-85 justify-between pl-2 pr-2">
          <label
            className="flex flex-col text-slate-500 w-40"
          >
            <input
              className="border border-slate-400 rounded-md p-1"
              type="text"
              name="name"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="flex flex-col text-slate-500 w-40">
            <input
              className="border border-slate-400 rounded-md p-1"
              type="number"
              name="price"
              placeholder="Preço"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
        </div>
        <div className="flex w-85 justify-between pl-2 pr-2">
          <label
            className="flex flex-col text-slate-500 w-40"
          >
            <input
              className="border border-slate-400 rounded-md p-1"
              type="text"
              name="marca"
              placeholder="Marca"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </label>
          <label
            className="flex flex-col text-slate-500 w-40"
          >
            <input
              className="border border-slate-400 rounded-md p-1"
              type="text"
              name="model"
              placeholder="Modelo"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </label>
        </div>
        <div className="flex w-85 justify-between pl-2 pr-2">
          <label
            className="flex flex-col text-slate-500 w-40"
          >
            <input
              className="border border-slate-400 rounded-md p-1"
              type="text"
              name="color"
              placeholder="Cor"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
          <button
            type="button"
            onClick={handleClick}>
              <Image src={iconAdd} alt="Adicionar" width={40} height={40} />
            </button>
        </div>
        <small className={`${warning === 'Adicionado!' ? 'text-green-700' : 'text-red-500'} bottom-10 h-5 p-2`}>{warning}</small>
      </form>
      <section className="pb-2 flex flex-col items-center w-85 overflow-scroll h-2/4">
        {list.map((phone: any, index: number) => {
          phone.id = index;
          return <Card phone={phone} key={phone.model} deleteCard={handleDelete} />
        })}
      </section>
      <button
        type="button"
        onClick={finished}
        disabled={hidden}
        className="bg-green-700 rounded-md p-2 w-60 m-2 fixed bottom-0 text-white"
      >
        Finalizar
      </button>
    </div>
  );
}