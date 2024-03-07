'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import ButtonSlate from "../button/ButtonSlate";
import ButtonGreen from "../button/ButtonGreen";

export default function FormEdit() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');

  const router = useRouter();

  const handleCancel = (e: any) => {
    e.preventDefault();
    router.push('/listphones');
  }

  const handlePut = (e: any) => {
    e.preventDefault();
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
          onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setBrand(e.target.value)}
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
            onChange={(e) => setModel(e.target.value)}
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
            onChange={(e) => setPrice(e.target.value)}
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
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
      </div>
      <div className="flex w-85 p-2 justify-around">
        <ButtonSlate name="Cancelar" wid="w-36" handleClick={handleCancel}/>
        <ButtonGreen name="Atualizar" wid="w-36" handleClick={handlePut}/>
      </div>
    </>
  );
}