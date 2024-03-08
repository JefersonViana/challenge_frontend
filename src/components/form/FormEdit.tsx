'use client';

import { useRouter, useParams } from "next/navigation";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import ButtonSlate from "../button/ButtonSlate";
import ButtonGreen from "../button/ButtonGreen";
import { requestUpdatePhones } from "@/api/requests";

export default function FormEdit() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [disabled, setDisabled] = useState(true);
  const { id } = useParams();

  const router = useRouter();

  const handleCancel = (e: any) => {
    e.preventDefault();
    router.push('/listphones');
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>,
    setState: Dispatch<SetStateAction<string>>) => {
    setState(e.target.value);
    if (name.length > 1 && brand.length > 1 && model.length > 1 && parseInt(price) > 0 && color.length > 1) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    const phone = { name, brand, model, price, color };

    await requestUpdatePhones(
      parseInt(id as string),
      phone, localStorage.getItem('token')
    );
    router.push('/listphones');
  }

  return (
    <>
      <label
        className="flex flex-col gap-1 text-slate-500 w-85 pl-2 pr-2"
      >
        Nome
        <input
          className="border border-slate-400 rounded-md p-2"
          type="text"
          name="name"
          placeholder="Nome do celular"
          value={name}
          onChange={(e) => handleChange(e, setName)}
        />
      </label>
      <div className="flex w-85 justify-between pl-2 pr-2">
        <label
          className="flex flex-col gap-1 text-slate-500 w-40"
        >
          Marca
          <input
            className="border border-slate-400 rounded-md p-2"
            type="text"
            name="marca"
            placeholder="Samsung"
            value={brand}
            onChange={(e) => handleChange(e, setBrand)}
          />
        </label>
        <label
          className="flex flex-col gap-1 text-slate-500 w-40"
        >
          Modelo
          <input
            className="border border-slate-400 rounded-md p-2"
            type="text"
            name="model"
            placeholder="Galaxy"
            value={model}
            onChange={(e) => handleChange(e, setModel)}
          />
        </label>
      </div>
      <div className="flex w-85 justify-between pl-2 pr-2">
        <label
          className="flex flex-col gap-1 text-slate-500 w-40"
        >
          Preço
          <input
            className="border border-slate-400 rounded-md p-2"
            type="number"
            name="price"
            placeholder="1000"
            value={price}
            onChange={(e) => handleChange(e, setPrice)}
          />
        </label>
        <label
          className="flex flex-col gap-1 text-slate-500 w-40"
        >
          Cor
          <input
            className="border border-slate-400 rounded-md p-2"
            type="text"
            name="color"
            placeholder="blue"
            value={color}
            onChange={(e) => handleChange(e, setColor)}
          />
        </label>
      </div>
      <div className="flex w-85 p-2 justify-around">
        <ButtonSlate name="Cancelar" wid="w-36" handleClick={handleCancel} />
        {disabled ? (
          <button className="bg-green-700 opacity-40 text-white py-2 px-4 rounded-md w-36">Atualizar</button>
          ) : (
          <ButtonGreen name="Atualizar" wid="w-36" handleClick={handleUpdate} />
        )}
      </div>
    </>
  );
}